// const https = require('https');

// MARK: Data Lookups for Generation (loaded in html)

// var allSkills (loaded from data/AllSkills.js)
// var customSkills (loaded from data/CustomSkills.js)
// var skillToPaletteLookup (loaded from data/PaletteSkills.js)
// var toolbeltIdToSlot (loaded from data/ToolbeltToSlots.js)

/*
 * Makes a GET request for the logUrl and then parses the results to find the rotation
 * Note: This assumes the player in the dps report is player 0 and that the DPS report is on the golem
 */
async function getRotationFromDpsReport(logUrl) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: logUrl,
            type: "GET",
            success: function(data) {
                const extractedStringStartPosition = data.indexOf('{"targets":');
                const extractedStringEndPorition = data.indexOf('var logData = _logData');
                const jsonString = data.slice(extractedStringStartPosition, extractedStringEndPorition);
                const cleanJsonString = jsonString.slice(0, jsonString.trim().length - 1);

                try {
                    const dpsReportObj = JSON.parse(cleanJsonString.trim());

                    // Extract
                    var rotation = dpsReportObj["players"][0]["details"]["rotation"][0];

                    resolve(rotation); // Resolve the Promise with the parsed JSON data
                } catch (err) {
                    reject(err); // Reject the Promise if there's an error parsing the JSON data
                }
            },
            error: function(error) {
                // Reject the Promise if there's an error fetching the data
                reject(error);
            }
        });
    });
}

//Return the noteType to the song note
//Ex: Weapon_1, Utility, Profession_1, etc
function getSkillType(abilityId, utilitySlots) {
    var retval = "Unknown";

    // Check the customSkills to see if the abilityID exists as a key
    // If it's in there, that means the gw2 API did not have the abilityID,
    // so custom data had to be fill for the note generation
    if (abilityId in customSkills) {
        const customSkillData = customSkills[abilityId];
        if (customSkillData.isNote === true) {
            retval = customSkillData.noteType;
        } else {
            // Some abilityId's in the DPS reports are things like sigils or traits
            // No note needs to be generated for these
            return null;
        }
    }


    // If the abilityID is not in customSkills, then check against the allSkills lookup,
    // from the gw2 API, and select the note type based on the slot string
    // return the slot string
    if (abilityId in allSkills) {
        const skill = allSkills[abilityId];
        var slot = skill.slot;
        // Special: Yes, Downed_ is a slot and shares the same note. This is just for "down-state" ele training, it's used in Shroud on Reaper, and Holosmith Sword
        if (slot === "Weapon_1" || slot === "Downed_1") {
            retval = "Weapon1";
        } else if (slot === "Weapon_2" || slot === "Downed_2") {
            retval = "Weapon2";
        } else if (slot === "Weapon_3" || slot === "Downed_3") {
            retval = "Weapon3";
        } else if (slot === "Weapon_4" || slot === "Downed_4") {
            retval = "Weapon4";
        } else if (slot === "Weapon_5" || slot === "Downed_5") {
            retval = "Weapon5";
        } else if (slot === "Utility") {
            // Special: Utility skills simply have "Utility" for their slot,
            //          and can be placed in any Utility slot (1, 2, 3).
            //          Use the BuildTemplate to find out which slot a utility skill is in
            //          BuildTemlate skills are stored with their palette ID, so the abilityId
            //          must first be converted to that.

            retval = "Unknown"; // Value used if the lookup fails
            var paletteId = skillToPaletteLookup[abilityId];
            for (var i = 0; i < utilitySlots.length; i++) {
                if (utilitySlots[i] === paletteId) {
                    retval = "UtilitySkill" + (i + 1);
                    break;
                }
            }
        } else if (slot === "Heal") {
            retval = "HealingSkill";
        } else if (slot === "Elite") {
            retval = "EliteSkill";
        } else if (slot === "Profession_1") {
            retval = "ProfessionSkill1";
        } else if (slot === "Profession_2") {
            retval = "ProfessionSkill2";
        } else if (slot === "Profession_3") {
            retval = "ProfessionSkill3";
        } else if (slot === "Profession_4") {
            retval = "ProfessionSkill4";
        } else if (slot === "Profession_5") {
            retval = "ProfessionSkill5";
        } else if (slot === "Profession_6") {
            retval = "ProfessionSkill6";
        } else if (slot === "Profession_7") {
            retval = "ProfessionSkill7";
        } else if (slot === "Toolbelt") {
            // Special: These are skills from the Engineer. The slot has to be looked up from that lookup table
            slot = toolbeltIdToSlot[abilityId];
            if (slot == "Heal") {
                retval = "ProfessionSkill1";
            } else if (slot == "Utility") {
                // The same special treatment has to be done for the utility lookup
                // Except it will now link to the profession skills 2-4
                retval = "Unknown"; // Value used if the lookup fails
                var paletteId = skillToPaletteLookup[abilityId];
                for (var i = 0; i < utilitySlots.length; i++) {
                    if (utilitySlots[i] === paletteId) {
                        retval = "ProfessionSkill" + (i + 2);
                        break;
                    }
                }
            } else if (slot == "Elite") {
                retval = "ProfessionSkill5";
            } else {
                retval = "Unknown"; // Value used if the lookup fails
            }
        }
    }

    return retval;
}

/**
 * Post Process Step: Fix Time Offset
 *
 * The Song can not have any notes with a time lower than 0, but the DPS
 * report can include skills cast earlier than the first point of damage (which is t=0),
 * so some notes may occur at negative times.
 *
 * This fixes the notes in the song by shifting everything so that the first note starts at 0
 */
function fixTimeOffset(notes) {
    if (notes.length == 0) {
        return;
    }

    var firstNote = notes[0];
    var offset = firstNote.time;
    if (offset == 0) {
        return;
    }

    for (var i = 0; i < notes.length; i++) {
        notes[i].time -= offset;
    }
}

async function generateSong(
    name,
    description,
    logUrl,
    buildChatCode,
    buildUrl
) {
    var rotation = await getRotationFromDpsReport(logUrl);

    //Use a build template to assume the Utility_1, Utility_2, Utility_3, Heal, and Elite skill orders
    var build = new Buildtemplate(buildChatCode);
    var utilitySlots = build["skills"]["terrestrial"]["utilities"];

    //Convert the DPS rotation into notes
    var notes = [];
    for (var i = 0; i < rotation.length; i++) {
        //Try to get the noteType (weaponType) from the manuallyMappedSkills array or the allSkills array
        //If the abilityID doesn't appear in either of those tables, return ""
        var noteType = getSkillType(rotation[i][1], utilitySlots);

        //Drop all empty noteTypes and create song notes with non-empty noteTypes
        if (noteType !== null) {
            notes.push({
                "time": Math.floor(rotation[i][0] * 1000), //convert seconds to milliseconds
                "duration": rotation[i][2], // duration is already in ms
                "noteType": noteType,
                "abilityId": rotation[i][1]
            });
        }
    }

    // Post Process Step: Fix Time Offset
    fixTimeOffset(notes);

    //Build the song object
    var song = {
        "name" : name,
        "description" : description,
        "logUrl" : logUrl,
        "buildChatCode" : buildChatCode,
        "buildUrl" : buildUrl,
        "decodedBuildTemplate" : build,
        "notes" : notes
    };

    return song;
}
