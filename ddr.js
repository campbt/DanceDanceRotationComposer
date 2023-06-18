// MARK: Data Lookups for Generation (loaded in html)

// var allSkills (loaded from data/AllSkills.js)
// var customSkills (loaded from data/CustomSkills.js)
// var skillToPaletteLookup (loaded from data/PaletteSkills.js)
// var toolbeltIdToSlot (loaded from data/ToolbeltToSlots.js)
// var reventSkillToLegend (loaded from data/RevenantSkillToLegend.js)
// var skillPriority (loaded from data/SkillPriority.js)

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
                const extractedStringEndPosition = data.indexOf('};', extractedStringStartPosition) + 2;
                const jsonString = data.slice(extractedStringStartPosition, extractedStringEndPosition);
                const cleanJsonString = jsonString.slice(0, jsonString.trim().length - 1);

                try {
                    console.log(cleanJsonString.trim());
                    const dpsReportObj = JSON.parse(cleanJsonString.trim());

                    var players = dpsReportObj["players"];

                    var rotation = null;
                    if (players.length == 1) {
                        rotation = players[0]["details"]["rotation"][0];
                    } else {
                        // Special Case:
                        // Some benches involve more than one person, like for specter
                        // We'll use a hacky way to guess the real one by assuming the actual
                        // bencher is using more unique skills. The non-bencher is usually just auto attacking,
                        // so their count will just be 1

                        var bestCount = 0;
                        for (var playerIndex = 0; playerIndex < players.length; playerIndex++) {
                            var playerRotation = players[playerIndex]["details"]["rotation"][0];
                            var abilityIds = {};
                            var count = 0;
                            for (var rotationIndex = 0; rotationIndex < playerRotation.length; rotationIndex++) {
                                var abilityId = playerRotation[rotationIndex][1];
                                if (abilityIds[abilityId] != true) {
                                    count += 1;
                                    abilityIds[abilityId] = true;
                                }
                            }

                            if (count > bestCount) {
                                rotation = playerRotation;
                                bestCount = count;
                            }
                        }
                    }

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

/**
 * Revent utility skills are a bit more complicated because there are inactive utilities
 * All rev heal/utility/heal skills share the same paletteId.
 * In order to determine which slot the utility is in:
 *     + Check the Legend that the skill belongs to,
 *     + Determine if that legend is Primary or Inactive legend
 *       + If primary, look for that utility in main utility slots of the build
 *       + If inactive, look for that utility in inactive utility slots of the build (found in profession specific bytes)
 */
function getRevenantUtilityNoteType(abilityId, utilitySlots, revenantInfo) {
    var retval = "Unknown";

    var legend = -1;
    if (abilityId in revenantSkillToLegend) {
        legend = revenantSkillToLegend[abilityId];
    } else {
        // If lookup fails, default to the primary legend so it uses the main utilities
        console.log("Warning: AbilityID not in revenantSkillToLegend: " + abilityId);
        legend = revenantInfo.primaryLegend;
    }

    if (legend == revenantInfo.primaryLegend) {
        // Check utility skills of the build
        var paletteId = skillToPaletteLookup[abilityId];
        for (var i = 0; i < utilitySlots.length; i++) {
            if (utilitySlots[i] === paletteId) {
                retval = "Utility" + (i + 1);
                break;
            }
        }
    } else if (legend == revenantInfo.inactiveLegend) {
        // Check inactive utility skills of the build
        var paletteId = skillToPaletteLookup[abilityId];
        for (var i = 0; i < revenantInfo.inactiveUtilities.length; i++) {
            if (revenantInfo.inactiveUtilities[i] === paletteId) {
                retval = "Utility" + (i + 1);
                break;
            }
        }
    } else {
        console.log("Warning: AbilityID, " + abilityId + ", belongs to legend " + legend + " but the revanant info doesn't have that legend for some reason. primary=" + revenantInfo.primaryLegend + " inactive=" + revenantInfo.inactiveLegend);
        return "Unknown";
    }

    return retval;
}

//Return the noteType to the song note
//Ex: Weapon_1, Utility, Profession_1, etc
function getNoteType(abilityId, utilitySlots, revenantInfo) {
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
            if (revenantInfo == null) {
                // Special: Utility skills simply have "Utility" for their slot,
                //          and can be placed in any Utility slot (1, 2, 3).
                //          Use the BuildTemplate to find out which slot a utility skill is in
                //          BuildTemlate skills are stored with their palette ID, so the abilityId
                //          must first be converted to that.

                retval = "Unknown"; // Value used if the lookup fails
                var paletteId = skillToPaletteLookup[abilityId];
                for (var i = 0; i < utilitySlots.length; i++) {
                    if (utilitySlots[i] === paletteId) {
                        retval = "Utility" + (i + 1);
                        break;
                    }
                }
            } else {
                // Extra Special: Revenant needs more love here
                retval = getRevenantUtilityNoteType(abilityId, utilitySlots, revenantInfo);
            }
        } else if (slot === "Heal") {
            retval = "Heal";
        } else if (slot === "Elite") {
            retval = "Elite";
        } else if (slot === "Profession_1") {
            retval = "Profession1";
        } else if (slot === "Profession_2") {
            retval = "Profession2";
        } else if (slot === "Profession_3") {
            retval = "Profession3";
        } else if (slot === "Profession_4") {
            retval = "Profession4";
        } else if (slot === "Profession_5") {
            retval = "Profession5";
        } else if (slot === "Profession_6") {
            retval = "Profession6";
        } else if (slot === "Profession_7") {
            retval = "Profession7";
        } else if (slot === "Toolbelt") {
            // Special: These are skills from the Engineer. The slot has to be looked up from that lookup table
            slot = toolbeltIdToSlot[abilityId];
            if (slot == "Heal") {
                retval = "Profession1";
            } else if (slot == "Utility") {
                // The same special treatment has to be done for the utility lookup
                // Except it will now link to the profession skills 2-4
                retval = "Unknown"; // Value used if the lookup fails
                var paletteId = skillToPaletteLookup[abilityId];
                for (var i = 0; i < utilitySlots.length; i++) {
                    if (utilitySlots[i] === paletteId) {
                        retval = "Profession" + (i + 2);
                        break;
                    }
                }
            } else if (slot == "Elite") {
                retval = "Profession5";
            } else {
                retval = "Unknown"; // Value used if the lookup fails
            }
        }
    }

    return retval;
}

// MARK: Post Process Utilities

function isConjureAbility(abilityId) {
    if ((abilityId in allSkills) == false) {
        return false;
    }
    var skillInfo = allSkills[abilityId];
    if (("categories" in skillInfo) == false) {
        return false;
    }
    var categories = allSkills[abilityId]["categories"];
    for (var index = 0; index < categories.length; index++) {
        if (categories[index] == "Conjure") {
            return true;
        }
    }
    return false;
}

// Kits sometimes have a category, but some don't
// So, we'll check if there are bundle skills
function isKitAbility(abilityId) {
    if ((abilityId in allSkills) == false) {
        return false;
    }
    var skillInfo = allSkills[abilityId];
    if (("bundle_skills" in skillInfo) == false) {
        return false;
    }
    var bundleSkills = allSkills[abilityId]["bundle_skills"];
    return bundleSkills.length > 0;
}

// MARK: Post Process Functions

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

/**
 * Post-Process Step: Fix Weapon Swaps
 *
 * Some classes have mechanics that trigger "weapon swaps" in the rotation files,
 * but are not relevant for notes
 *
 * Elementalist: Conjure Weapons have a Weapon Swap during the cast. Entering is unnecessary.
 * Engineer: Kits have it when entering and exiting. Entering's is unnecessary.
 * Holosmith: Photon Forge has a weapon swap for enter and exit, which are both unnecessary as it uses a Profession5 for this.
 * Fire Brand: Happens when entering a tome (no rotation entry is made for the profession skill, so it needs to be swapped to that)
 * Bladesworn: Used when entering and existing, but seems completely unnecessary as there is a profession skill to do this.
 */
function fixWeaponSwaps(build, notes) {
    var retval = notes;
    var profession = build["profession"];

    function hasSpec(id) {
        var specializations = build["specializations"]
        for (var i = 0; i < specializations.length; i++) {
            if (specializations[i]["id"] == id) {
                return true;
            }
        }
        return false;
    }

    if (profession == 1) {
        // Guardian

        if (hasSpec(62)) {
            // Firebrand
            // This one is tricky.
            // Firebrand tome skills show up in the log, but *entering* the tome
            // shows up as just a WeaponSwap. So, the WeaponSwap note needs to be changed
            // to the tome skill, rather than just removed outright.
            // Also, closing a tome also shows up as a WeaponSwap, so it needs to be swapped as well.
            // These tome skills are marked with "tomeSkill" in CustomSkills.js

            retval = [];
            var lastWeaponSwapIndex = -1
            var currentTomeSkill = null
            for (var index = 0; index < notes.length; index++) {
                var note = notes[index];

                retval.push(note);

                var abilityName = "";
                if (note.abilityId in allSkills) {
                    abilityName = allSkills[note.abilityId]["name"];
                }
                // console.log("Note: " + index + " : " + note.time + " " + note.duration + "ms " + note.noteType + " | " + abilityName);

                if (note.noteType == "WeaponSwap") {
                    lastWeaponSwapIndex = index;
                }

                // Only care to check for tome skills and not-in-tome skills, which are all Weapon1-5
                if (
                    note.noteType == "Weapon1" ||
                    note.noteType == "Weapon2" ||
                    note.noteType == "Weapon3" ||
                    note.noteType == "Weapon4" ||
                    note.noteType == "Weapon5"
                ) {
                    var tomeSkill = null
                    var abilityId = note.abilityId;
                    if (abilityId in customSkills) {
                        var customInfo = customSkills[abilityId];
                        if ("tomeSkill" in customInfo) {
                            tomeSkill = customInfo["tomeSkill"];
                        }
                    }

                    if (lastWeaponSwapIndex >= 0 && tomeSkill != currentTomeSkill) {
                        // The last weapon swap must have been a tome open/close
                        if (tomeSkill != null) {
                            // Must have opened the tome
                            retval[lastWeaponSwapIndex]["abilityId"] = tomeSkill
                            retval[lastWeaponSwapIndex]["noteType"] = getNoteType(tomeSkill, [], null);
                            console.log("Firebrand: WeaponSwap at " + lastWeaponSwapIndex + " swapping to open tome skill: " + retval[lastWeaponSwapIndex]["noteType"]);
                        } else {
                            // Must have closed the tome
                            retval[lastWeaponSwapIndex]["abilityId"] = currentTomeSkill
                            retval[lastWeaponSwapIndex]["noteType"] = getNoteType(currentTomeSkill, [], null);
                            console.log("Firebrand: WeaponSwap at " + lastWeaponSwapIndex + " swapping to close tome skill: " + retval[lastWeaponSwapIndex]["noteType"]);
                        }
                        // Prevent swapping multiple times
                        lastWeaponSwapIndex = -1;
                    }
                    currentTomeSkill = tomeSkill;
                    // console.log("Firebrand: " + index + " : " + currentTomeSkill + " last=" + lastWeaponSwapIndex + ", " + currentTomeSkill);
                }
            }

        }
    } else if (profession == 2) {
        // Warrior

        if (hasSpec(68)) {
            // Bladesworn
            // Ignore ALL weapon swaps. Bladesworn swaps using profession skill 1
            retval = notes.filter( (note) => {
                return note.noteType != "WeaponSwap";
            });
        }
    } else if (profession == 3) {
        // Engineer

        retval = [];

        var isHolosmith = hasSpec(57);
        for (var index = 0; index < notes.length; index++) {
            var note = notes[index];

            if (
                // Holosmith - Remove WeaponSwaps caused by Photon Forge
                isHolosmith &&
                note.noteType == "WeaponSwap" &&
                (
                    // If this weapon swap is caused by PhotonForge, then photon forge
                    // should appear right next to it.
                    // It seems it is not 100% consistent which side it will be on
                    (index > 0 && (notes[index-1].noteType == "Profession5")) ||
                    (index + 1 < notes.length && (notes[index+1].noteType == "Profession5"))
                )
            ) {
                // Ignore. Don't add note
            } else if (
                // All Engineer's - Remove WeaponSwaps caused by Kits
                note.noteType == "WeaponSwap" &&
                (
                    // If this weapon swap is caused by a Hit, then the kit skill
                    // should appear right next to it.
                    // It seems it is not 100% consistent which side it will be on
                    (index > 0 && isKitAbility(notes[index-1].abilityId)) ||
                    (index + 1 < notes.length && isKitAbility(notes[index+1].abilityId))
                )
            ) {
                // Ignore. Don't add note
                console.log("Removing WeaponSwap caused by Kit")
            } else {
                retval.push(note);
            }
        }
    } else if (profession == 6) {
        // Elementalist
        // If the abilityId of the note is for a conjured weapon, search forward and remove the next weapon swap

        retval = [];
        for (var index = 0; index < notes.length; index++) {
            var note = notes[index];
            if (isConjureAbility(note.abilityId)) {
                // Conjure ability is added
                retval.push(note);

                for (var j = 1; j < notes.length; j++) {
                    var nextNote = notes[index+j];
                    if (nextNote.noteType != "WeaponSwap") {
                        // Some instant cast ability was cast while conjure was being cast
                        retval.push(nextNote);
                    } else {
                        // Hit the weapon swap. Don't add this.
                        index = index + j;
                        break;
                    }
                }
            } else {
                retval.push(note);
            }
        }
    }


    return retval;
}

// MARK: Post-Process Class Specific Fixes

/**
 * Post-Profess: Elemenalist Specific
 */
function fixElementalist(build, notes) {
    var originalNoteSize = notes.length;

    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];

        // "Rock Barrier" -> "Hurl" |
        // Hurl doesn't show up in logs for some reason. Add it in automatically
        // a little after rock barrier
        if (note.abilityId == 5695)
        {
            var flipSkill = allSkills[note.abilityId]["flip_skill"]
            notes.push({
                "time": note.time + 759,
                "duration": 0,
                "noteType": note.noteType,
                "abilityId": flipSkill
            });
        }
    }
    // If the Fire Elemental Elite is used, then add in casts for the ult. Assume precast.
    if (build["skills"]["terrestrial"]["elite"] == 38) {
        for (var time = 300; time < 120000; time += 12100) {
            notes.push({
                "time": time,
                "duration": 0,
                "noteType": "Elite",
                "abilityId": 25499
            });
        }
    }
}

/**
 * Post-Profess: Engineer Specific
 */
function fixEngineer(build, notes) {
    var originalNoteSize = notes.length;

    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];

        // "Throw Mine" -> "Detonate" |
        // Detonate doesn't show up in logs for some reason. Add it in automatically
        // a little after
        if (note.abilityId == 6161 || note.abilityId == 30337)
        {
            var flipSkill = allSkills[note.abilityId]["flip_skill"]
            notes.push({
                "time": note.time + 750,
                "duration": 0,
                "noteType": note.noteType,
                "abilityId": flipSkill
            });
        }

        // "Throw Field Mine" -> "Detonate" |
        // Detonate doesn't show up in logs for some reason. Add it in automatically
        // a little after
        if (note.abilityId == 6164)
        {
            var flipSkill = 6166 // flip_skill not on this for some reason, so hard coded
            notes.push({
                "time": note.time + 750,
                "duration": 0,
                "noteType": note.noteType,
                "abilityId": flipSkill
            });
        }
    }
}

/**
 * Post-Profess: Mesmer Specific
 */
function fixMesmer(build, notes) {
    var originalNoteSize = notes.length;

    var ambushSkills = {
        44321: true, // (Axe) Imaginary Axes
        45230: true, // (Sword) Mirage Thrust
        42304: true, // (Scepter) Ether Barrage
        44241: true, // (Greatsword) Split Surge
        40184: true, // (Staff) Chaos Vortex
        44864: true, // (Spear) Ambush Assault
        39959: true, // Wave of Panic
    };
    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];

        // Ambush - Ambush skills need to be manually triggered, even if weapon 1
        if (note.abilityId in ambushSkills) {
            note["overrideAuto"] = true;
        }
    }
}

/**
 * Post-Profess: Thief Specific
 */
function fixThief(build, notes) {
    var originalNoteSize = notes.length;

    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];

        // "Prepare Thousand Needles" -> "Thousand Needles"
        if (note.abilityId == 13026)
        {
            var flipSkill = allSkills[note.abilityId]["flip_skill"]
            notes.push({
                "time": note.time + 3000,
                "duration": 0,
                "noteType": note.noteType,
                "abilityId": flipSkill
            });
        }
    }
}

// MARK: Optimize Ability Queue

/**
 * To have better songs, the notes should take advantage of ability queueing when possible
 * This means that the note hits while another ability is casting, allowing the ability to be queued.
 *
 * The system for ability queueing is a bit opaque but it seems to be this:
 * At most, one skill can be queued up at a time.
 *
 * + If the note is instant cast (duration of 0ms): Don't move it
 * + If the note has higher priority than the previous skill: Don't move it
 * + If the note has equal to or lower priority than the previous skill: Move note time back to somewhere within the previous skill's duration (maybe with a buffer of like 200ms?)
 *
 *  Ex: {A, t=0, 500ms}, {B, t=500, 500ms}, {C, t=750, 0ms}, {D, t=1000, 500ms}, {E, t=1500, 500ms, +1 priority}
 *      =>
 *      {A, t=0, 500ms}, {B, t=200, 500ms}, {D, t=700, 500ms}, {C, t=750, 0ms}, {E, t=1500, 500ms, +1 priority}
 */
function optimizeAbilityQueue(
    build,
    notes
) {
    if (notes.length == 0) {
        return notes;
    }

    var newNotes = [];

    // Some profession specific fixes exist
    //     01 – Guardian
    //     02 – Warrior
    //     03 – Engineer
    //     04 – Ranger
    //     05 – Thief
    //     06 – Elementalist
    //     07 – Mesmer
    //     08 – Necromancer
    //     09 – Revenant
    var profession = build["profession"];
    //     5: Druid
    //     7: Daredevil
    //     18: Berserker
    //     27: Dragonhunter
    //     34: Reaper
    //     40: Chronomancer
    //     43: Scrapper
    //     48: Tempest
    //     52: Herald
    //     55: Soulbeast
    //     56: Weaver
    //     57: Holosmith
    //     58: Deadeye
    //     59: Mirage
    //     60: Scourge
    //     61: Spellbreaker
    //     62: Firebrand
    //     63: Renegade
    //     64: Harbinger
    //     65: Willbender
    //     66: Virtuoso
    //     67: Catalyst
    //     68: Bladesworn
    //     69: Vindicator
    //     70: Mechanist
    //     71: Specter
    //     72: Untamed
    var elite = build["specializations"][2]["id"];

    var specialPrioritySkillId

    function canBeQueuedOn(castingNote, nextNote) {
        // Basic Auto Attacks can not be queued or be queued on
        if (castingNote.noteType == "Weapon1" && castingNote.overrideAuto != true)
            return false;
        if (nextNote.noteType == "Weapon1" && nextNote.overrideAuto != true)
            return false;
        // Dodges, WeaponSwaps, and WeaponStows are all things that can not be moved or queued on
        // if (
        //     // Note: Not 100% on heal, but Signet of the Ether does seem to block queueing on top of it
        //     //       Better safe than sorry here. Heal is pretty uncommon
        //     castingNote.noteType == "Heal" ||
        //     nextNote.noteType == "Heal" ||
        //     castingNote.noteType == "Dodge" ||
        //     nextNote.noteType == "Dodge" ||
        //     castingNote.noteType == "WeaponSwap" ||
        //     nextNote.noteType == "WeaponSwap" ||
        //     castingNote.noteType == "WeaponStow" ||
        //     nextNote.noteType == "WeaponStow" ||
        //     castingNote.noteType == "Unknown" ||
        //     nextNote.noteType == "Unknown"
        // ) {
        //     return false
        // }

        var castingAbilityId = castingNote.abilityId;
        var nextAbilityId = nextNote.abilityId;

        var castingPriority = 1;
        if (castingAbilityId in skillPriority) {
            castingPriority += skillPriority[castingAbilityId];
        }

        var nextAbilityPriority = 1;
        if (nextAbilityId in skillPriority) {
            nextAbilityPriority += skillPriority[nextAbilityId];
        }

        return castingPriority >= nextAbilityPriority;
    }

    var currentCastingNote = null;
    for (var index = 0; index < notes.length; index++) {
        var oldNote = notes[index];
        var note = JSON.parse(JSON.stringify(oldNote, null, 4));
        newNotes.push(note);

        // BUT, dodges/swaps/stows...etc can't be moved and also prevent other abilities from
        // being enqueued earlier than them.
        if (
            note.noteType == "Heal" ||
            note.noteType == "Dodge" ||
            note.noteType == "WeaponSwap" ||
            note.noteType == "WeaponStow" ||
            note.noteType == "Unknown"
        ) {
            currentCastingNote = null;
            continue;
        }

        if (
            (note.abilityId in skillPriorityBlacklistInstantCasts) ||
            isKitAbility(note.abilityId) ||
            isConjureAbility(note.abilityId)
        ) {
            // These skills have duration 0 but other abilities can NOT be queued in front of them
            // They are generally some kind of kit or ability swap, similar to WeaponSwap
            currentCastingNote = null;
            continue;
        }

        // Profession Specific
        if (elite == 62) {
            // Firebrand can't allow shifting skills around any profession skill
            if (
                note.noteType == "Profession1" ||
                note.noteType == "Profession2" ||
                note.noteType == "Profession3"
            ) {
                currentCastingNote = null;
                continue;
            }
        } else if (elite == 68) {
            // Bladesworn has Sheath/Unsheath gunsaber for profession skill 1
            if (
                note.noteType == "Profession1"
            ) {
                currentCastingNote = null;
                continue;
            }
        } else if (elite == 57) {
            // Holosmith has Photon Forge for profession 5
            if (
                note.noteType == "Profession5"
            ) {
                currentCastingNote = null;
                continue;
            }
        } else if (profession == 6) {
            // Elementalist can't let anything queue up before profession skills 1-4. All are attunement swaps.
            if (
                note.noteType == "Profession1" ||
                note.noteType == "Profession2" ||
                note.noteType == "Profession3" ||
                note.noteType == "Profession4"
            ) {
                currentCastingNote = null;
                continue;
            }
        } else if (profession == 8) {
            // Necromancer Profession1 is a Shroud skill (or Sand Shade) which doesn't allow abilities to be shifted before them
            if (
                elite != 60 && // Ignore scourge
                note.noteType == "Profession1"
            ) {
                currentCastingNote = null;
                continue;
            }
        } else if (profession == 9) {
            // Revanant Profession1 is a Legendary Swap skill which can't allow abilities before it most of the time
            if (
                note.noteType == "Profession1"
            ) {
                currentCastingNote = null;
                continue;
            }
        }

        // Assume that 0 duration abilities are instant cast and don't interrupt anything nor are ever "casting"
        if (note.duration == 0) {
            // currentCastingNote is not set so abilities can be moved in front of this instant cast, if necessary
            continue;
        }


        if (currentCastingNote != null && canBeQueuedOn(currentCastingNote, note)) {
            // Shift the new note back
            note.time = currentCastingNote.time + Math.min(currentCastingNote.duration, 200);
        }
        currentCastingNote = oldNote;
    }

    // It's possible notes were shifted ahead of other notes (like instant cast ones)
    // So ensure everything is in order for the module
    newNotes.sort(
        function(a,b) {
            return a.time-b.time;
        }
    );

    return newNotes;
}

// MARK: Generate

async function generateSong(
    name,
    description,
    logUrl,
    buildChatCode,
    buildUrl,
    performOptimizeAbilityQueue
) {
    console.log("Generating song: " + name);
    var rotation = await getRotationFromDpsReport(logUrl);

    //Use a build template to assume the Utility_1, Utility_2, Utility_3, Heal, and Elite skill orders
    var build = new Buildtemplate(buildChatCode);
    console.log("  Build: " + build);
    var utilitySlots = build["skills"]["terrestrial"]["utilities"];

    // Special: Revenant can have inactive utility slots and inactive legendary stored in the profession specific bytes
    var revenantInfo = null;
    if (build["profession"] == 9) {
        var specific = build["specific"];

        // Small lookup table for legendaries
        // var legendToSkillId = {
        //     "3": 28419, // Dwarf
        //     "4": 28494, // Demon
        //     "6": 28159, // Centaur
        //     "2": 28134, // Assassin
        //     "1": 28085, // Dragon
        //     "5": 41858, // Renegade
        //     "7": 62891 // Alliance
        // };

        // Calculate the inactive utility palette IDs
        var inactiveUtilitySlots = [];
        for (var i = 0; i < 3; i++) {
            var offset = i * 2 + 4;
            inactiveUtilitySlots.push(specific[offset] + (specific[offset+1] << 8));
        }
        revenantInfo = {
            "primaryLegend" : specific[0],
            "inactiveLegend" : specific[1],
            "inactiveUtilities" : inactiveUtilitySlots
        };
    }

    //Convert the DPS rotation into notes
    var notes = [];
    for (var i = 0; i < rotation.length; i++) {
        //Try to get the noteType (weaponType) from the manuallyMappedSkills array or the allSkills array
        //If the abilityID doesn't appear in either of those tables, return ""
        var noteType = getNoteType(rotation[i][1], utilitySlots, revenantInfo);

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

    // Post Process Step: Fix Weapon Issues for some professions
    notes = fixWeaponSwaps(build, notes);

    // Fix profession specific edge cases
    //     01 – Guardian
    //     02 – Warrior
    //     03 – Engineer
    //     04 – Ranger
    //     05 – Thief
    //     06 – Elementalist
    //     07 – Mesmer
    //     08 – Necromancer
    //     09 – Revenant
    if (build.profession == 3) {
        fixEngineer(build, notes);
    } else if (build.profession == 5) {
        fixThief(build, notes);
    } else if (build.profession == 6) {
        fixElementalist(build, notes);
    } else if (build.profession == 7) {
        fixMesmer(build, notes);
    }

    // Absolutely make sure everything is sorted by time
    notes.sort(
        function(a,b) {
            return a.time-b.time;
        }
    );

    if (performOptimizeAbilityQueue == true) {
        console.log("Optimizing note times for ability queueing");
        notes = optimizeAbilityQueue(
            build,
            notes
        );
    }

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

    console.log("Completed generation: " + name);
    return song;
}

function warnOfIssues() {

    // Scourge: No Profession skills
    // Mechanist: No Pet skills
    // Ranger: No Pet skills
}

// MARK: Music Box

/**
 * Converts an AutoHotkey script from http://gw2mb.com/archive.php
 */
function generateFromMusicBox(
    autoHotkeyScript,
    name,
    instrument
) {
    var lines = autoHotkeyScript.split("\n");

    var time = 0;
    var notes = [];
    for (var index = 0; index < lines.length; index++) {
        var line = lines[index];

        if (line.includes("up")) {
            continue;
        }
        if (line.includes("Sleep")) {
            time += parseInt(line.replace(/\D/g,''));
        } else if (line.includes("Numpad")) {
            var numPad = parseInt(line.replace(/\D/g,''));

            var noteType = "Unknown";
            var abilityId = 0;


            if (numPad == 0) {
                noteType = "Utility3";
                abilityId = -1309;
            } else if (numPad == 1) {
                noteType = "Weapon1";
                abilityId = -1301;
            } else if (numPad == 2) {
                noteType = "Weapon2";
                abilityId = -1302;
            } else if (numPad == 3) {
                noteType = "Weapon3";
                abilityId = -1303;
            } else if (numPad == 4) {
                noteType = "Weapon4";
                abilityId = -1304;
            } else if (numPad == 5) {
                noteType = "Weapon5";
                abilityId = -1305;
            } else if (numPad == 6) {
                noteType = "Heal";
                abilityId = -1306;
            } else if (numPad == 7) {
                noteType = "Utility1";
                abilityId = -1307;
            } else if (numPad == 8) {
                noteType = "Utility2";
                abilityId = -1308;
            } else if (numPad == 9) {
                noteType = "Elite";
                abilityId = -1310;
            } else {
                console.log("Unknown Numpad: " + numPad + " | line: " + line);
                continue;
            }

            var note = {
                "time": time,
                "duration": 500,
                "noteType": noteType,
                "abilityId": abilityId
            };
            if (numPad == 1) {
                note["overrideAuto"] = true;
            }

            notes.push(note);
        }
    }

    var song = {
        "name" : name,
        "description" : "A song to be played on a " + instrument,
        "logUrl" : "",
        "buildChatCode" : "",
        "buildUrl" : "",
        "decodedBuildTemplate" : {
            "profession": 0,
            "specializations": [
                {
                    "id": 31,
                    "traits": [
                        1,
                        1,
                        1
                    ]
                },
                {
                    "id": 37,
                    "traits": [
                        1,
                        1,
                        1
                    ]
                },
                {
                    "id": 0,
                    "traits": [
                        1,
                        1,
                        1
                    ]
                }
            ],
            "skills": {
                "terrestrial": {
                    "heal": 0,
                    "utilities": [
                        0,
                        0,
                        0
                    ],
                    "elite": 0
                },
                "aquatic": {
                    "heal": 0,
                    "utilities": [
                        0,
                        0,
                        0
                    ],
                    "elite": 0
                }
            },
            "specific": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        "notes" : notes
    };
    return song;
}
