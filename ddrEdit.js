//
// This file is for the edit.html page, allowing for special manual additions to songs
//

// MARK: Data Lookups for Generation (loaded in html)

// var allSkills (loaded from data/AllSkills.js)
// var customSkills (loaded from data/CustomSkills.js)
// var skillToPaletteLookup (loaded from data/PaletteSkills.js)
// var toolbeltIdToSlot (loaded from data/ToolbeltToSlots.js)

/**
 * Parses the string input of a song and returns the JSON object
 */
function parseSong(input) {
    const song = JSON.parse(input);
    if (song == null) {
        throw new Error("Invalid JSON for the song");
    }
    if (song["notes"] == null) {
        throw new Error("Song is missing notes");
    }
    return song;
}

function setOutput(output) {
    $("#output").text(output);
}

function appendOutput(output) {
    $("#output").text(
        $("#output").text() + "\n" + output
    );
}

function addPrecastAbility(
    song,
    abilityId,
    time,
    duration,
    noteType
) {
    if (isNaN(abilityId)) {
        throw new Error("Invalid AbilityId");
    }
    if (isNaN(time) || time >= 0) {
        throw new Error("Invalid Time (must be negative integer)");
    }
    if (isNaN(duration) || duration < 0) {
        throw new Error("Invalid Duration (must be non-negative integer)");
    }

    var notes = song["notes"];

    var newNote = {
        "time": 0,
        "duration": duration,
        "noteType": noteType,
        "abilityId": abilityId
    };
    console.log("Adding Precast Note (" + abilityId + ") at :" + newNote.time);

    // Insert precast note
    notes.splice(
        0, 0,
        newNote
    );

    // Shift other abilities back
    console.log("Shifting all notes forward by " + (-1 * time) + "ms");
    for (var index = 1; index < notes.length; index++) {
        var note = notes[index];
        note.time -= time;
    }

    return song;
}

function addAutocastAbility(
    song,
    abilityId,
    interval,
    offset,
    noteType
) {
    if (isNaN(abilityId)) {
        throw new Error("Invalid AbilityId");
    }
    if (isNaN(interval) || interval < 1000) {
        throw new Error("Invalid Interval");
    }
    if (isNaN(offset) || offset < 0) {
        throw new Error("Invalid Offset");
    }
    var notes = song["notes"];

    if ((abilityId in allSkills) == false) {
        throw new Error("Invalid Skill ID");
    }
    const skill = allSkills[abilityId];

    var time = offset;
    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];
        if (note.time > time) {
            var newNote = {
                "time": time,
                "duration": 0,
                "noteType": noteType,
                "abilityId": abilityId
            };
            time += interval;
            console.log("Adding Autocast Note (" + abilityId + ") at :" + newNote.time);

            notes.splice(
                index, 0,
                newNote
            );
        }
    }

    return song;
}
