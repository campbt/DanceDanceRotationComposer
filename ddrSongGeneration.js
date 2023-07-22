// This file is used to generate ALL songs, including extra manual processing steps

// Extra song metas are found in the songs/ folder
var songMetas = [
];

/** Adds a new note in at the correct location. Does NOT shift any notes around. */
function addAbility(song, abilityId, time, duration, noteType) {
    var newNote = {
        "time": time,
        "duration": duration,
        "noteType": noteType,
        "abilityId": abilityId
    };

    var notes = song.notes;
    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];
        if (note.time > newNote.time) {
            notes.splice(
                index, 0,
                newNote
            );
            return;
        }
    }

    song.notes.push(
        newNote
    );
}

function deleteAt(song, index) {
    var note = song.notes[index];
    song.notes.splice(index, 1);
    console.log("  Delete Note At: " + index + " (" + note.abilityId + ", " + note.noteType + ")");

    if (index == 0) {
        console.log("  Shifting notes back so note 0 is at t=0");
        fixTimeOffset(song.notes);
    }
}

function deleteAbilityId(song, abilityId) {
    var notes = song.notes;
    var numDeleted = 0;
    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];
        if (note.abilityId == abilityId) {
            song.notes.splice(index, 1);
            numDeleted += 1;

            if (index == 0) {
                console.log("  Shifting notes back so note 0 is at t=0");
                fixTimeOffset(song.notes);
            }

            index -= 1;
        }
    }
    console.log("  Deleted " + numDeleted + " notes of abilityId: " + abilityId);
}

async function generateSongs() {
    var songs = [];

    var allSongMetas = [];
    allSongMetas = allSongMetas.concat(songMetas);
    allSongMetas = allSongMetas.concat(snowCrowsSongMetas);
    allSongMetas = allSongMetas.concat(myMysticSongMetas);

    console.log("Starting Generation of " + allSongMetas.length + " Songs");
    for (var songMetasIndex = 0; songMetasIndex < allSongMetas.length; songMetasIndex++) {
        var songMeta = allSongMetas[songMetasIndex];
        // console.log("Generating Song: " + songMeta.name);

        var song = await generateSong(
            songMeta.name,
            songMeta.description,
            songMeta.logUrl,
            songMeta.buildChatCode,
            songMeta.buildUrl,
            false // Don't optimize at this stage. Do it after postProcess
        )
        // console.log("  Song Generated!");

        var postProcessSteps = songMeta.postProcessSteps;
        for (var postIndex = 0; postIndex < postProcessSteps.length; postIndex++) {
            var process = postProcessSteps[postIndex];
            var command = process.command;
            console.log("  Post Process: " + command);
            if (command == "AddAbility") {
                addAbility(
                    song,
                    process.abilityId,
                    process.time,
                    process.duration,
                    process.noteType
                );
            } else if (command == "AddPreCastAbility") {
                song = addPrecastAbility(
                    song,
                    process.abilityId,
                    process.time,
                    process.duration,
                    process.noteType
                );
            } else if (command == "AddAutoCastAbility") {
                song = addAutocastAbility(
                    song,
                    process.abilityId,
                    process.interval,
                    process.offset,
                    process.noteType
                );
            } else if (command == "DeleteAt") {
                var index = process.index;
                deleteAt(song, index);
            } else if (command == "DeleteAbilityId") {
                deleteAbilityId(song, process.abilityId);
            } else if (command == "OptimizeAbilityQueue") {
                song.notes = optimizeAbilityQueue(
                    song.decodedBuildTemplate,
                    song.notes
                );
            }
        }
        console.log("  Completed");

        songs.push(song);
    }

    if (songs.length == 1) {
        return songs[0];
    } else {
        return songs;
    }
}
