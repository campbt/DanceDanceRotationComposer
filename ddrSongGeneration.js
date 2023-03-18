// This file is used to generate ALL songs, including extra manual processing steps

var songMetasActual = [

    // MARK: Snow Crows

    // MARK: Elementalist

    {
        "name": "Power Weaver [Benchmark]",
        "description": "A benchmark for Power Weaver provided by Snow Crows.\nLast Updated: 2/18/2023",
        "logUrl": "https://dps.report/jpIq-20230218-140800_golem",
        "buildChatCode": "[&DQYfHSkfOBl0AHQAUAEAAL4BAAA1FwAAEhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/weaver/power-weaver",
        "postProcessSteps": [
            // First add Lightning Storm
            {
                "command": "AddPreCastAbility",
                "abilityId": 5737,
                "time": -1121,
                "duration": 1121,
                "noteType": "UtilitySkill2"
            },
            // Then add Weave Self (which comes before Lightning Storm)
            {
                "command": "AddPreCastAbility",
                "abilityId": 43638,
                "time": -800,
                "duration": 800,
                "noteType": "EliteSkill"
            }
        ]
    },
    {
        "name": "Condi Weaver [Benchmark]",
        "description": "by: Snow Crows\nUpdated Feb 23, 2023",
        "logUrl": "https://dps.report/MZfE-20230221-213716_golem",
        "buildChatCode": "[&DQYfFRomOBV0AAAAcwAAAMsAAAA1FwAAEhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/weaver/condition-weaver",
        "postProcessSteps": [
            // The initial Weave Self Elite Skill is part of a pre-cast
            {
                "command": "AddPreCastAbility",
                "abilityId": 43638,
                "time": -800,
                "duration": 800,
                "noteType": "EliteSkill"
            }
        ]
    },
    {
        "name": "Power Catalyst [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 1, 2022",
        "logUrl": "https://dps.report/9pYO-20221213-215347_golem",
        "buildChatCode": "[&DQYfHSkfQyb+GgAAvgEAAPgaAADuGgAAlwAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/catalyst/power-catalyst",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Power Quickness Catalyst [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 8, 2022",
        "logUrl": "https://dps.report/7kx4-20221209-102548_golem",
        "buildChatCode": "[&DQYpHyU1Qz50AAAAvgEAAPgaAADuGgAAlwAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/catalyst/power-quickness-catalyst",
        "postProcessSteps": [
        ]
    },

    // MARK: Mesmer

    {
        "name": "Power Chronomancer [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 17, 2022\nNOTE: Split Second is not in this song because it is not reported in DPS logs. It should be cast basically off cooldown.",
        "logUrl": "https://dps.report/4U2Z-20221207-132946_golem",
        "buildChatCode": "[&DQcKGQEdKD4jDwAABBMAAGkBAACPAQAAsxIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/chronomancer/power-chronomancer",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Condi Alacrity Mirage (Staff) [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 8th, 2023",
        "logUrl": "https://dps.report/5DUZ-20221003-032506_golem",
        "buildChatCode": "[&DQcBJS09OxfuFQAA4BUAAIEBAACDAQAARhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/mirage/condition-alacrity-mirage",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Condi Virtuoso [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 7, 2022",
        "logUrl": "https://dps.report/xE4Z-20220807-013444_golem",
        "buildChatCode": "[&DQcBHRgdQjsjDwAAggEAAIEBAACDAQAA5RoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/virtuoso/condition-virtuoso",
        "postProcessSteps": [
            // The Virtuoso Elite Skill is not in the DPS report for some reason
            {
                "command": "AddAutoCastAbility",
                "abilityId": 24755,
                "interval": 48100,
                "offset": 800,
                "noteType": "EliteSkill"
            }
        ]
    },
    {
        "name": "Power Virtuoso [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 17, 2022\nNOTE: This was recorded before changes to mantra of pain, so it has been disabled for this song.",
        "logUrl": "https://dps.report/3K6u-20220818-152539_golem",
        "buildChatCode": "[&DQcKGQEdQjojDwAA3RoAAI8BAABpAQAA5RoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/virtuoso/power-virtuoso",
        "postProcessSteps": [
            // This song was recorded when Mantra of Pain was just an instant cast ammo skill. So it should be removed.
            {
                "command": "DeleteAbilityId",
                "abilityId": 10211
            },
            // The Virtuoso Elite Skill is not in the DPS report for some reason
            {
                "command": "AddAutoCastAbility",
                "abilityId": 24755,
                "interval": 48100,
                "offset": 3500,
                "noteType": "EliteSkill"
            }
        ]
    },

    // MARK: Mr. Mystic

    {
        "name": "Lightning God Power Weaver",
        "description": "by: Mr. Mystic",
        "logUrl": "https://dps.report/7ZvH-20230124-165406_golem",
        "buildChatCode": "[&DQYfHSkvOBl0AAAANRcAAL4BAABQAQAAJgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=N-52nj1iuzI",
        "postProcessSteps": [
            // There is a weird extra swap to Lightning here, which shouldn't be there
            {
                "command": "DeleteAt",
                "index": 2
            }
        ]
    },
    {
        "name": "Button Mash Condi Weaver",
        "description": "by: Mr. Mystic",
        "difficulty": 2,
        "logUrl": "https://dps.report/0P7A-20230308-223756_golem",
        "buildChatCode": "[&DQYfFSUlOBUnDwAAcgAAAE0BAAA1FwAAJgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=9rVVx0aSuSk",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Power Button Mash Weaver",
        "description": "by: Mr. Mystic",
        "logUrl": "https://dps.report/7JwB-20221209-054522_golem",
        "buildChatCode": "[&DQYfHSkfOBl0AAAANRcAAL4BAABQAQAAJgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=sng3qEH1tBg",
        "postProcessSteps": [
            // There is a weird extra swap to Lightning here, which shouldn't be there
            {
                "command": "DeleteAt",
                "index": 2
            }
        ]
    },
    {
        "name": "The New Holosmith",
        "description": "by: Mr. Mystic",
        "logUrl": "https://dps.report/60Ki-20230207-231251_golem",
        "buildChatCode": "[&DQMGNyYvOScqDwAAJgEAAKMAAABXFgAA8BUAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=MWxcL6O_sgI",
        "postProcessSteps": [
            // Pre-cast Turret
            {
                "command": "AddPreCastAbility",
                "abilityId": 5818,
                "time": -800,
                "duration": 500,
                "noteType": "UtilitySkill2"
            },
            // Autocast Profession Skill 3, which doesn't show up in the dps logs
            {
                "command": "AddAutoCastAbility",
                "abilityId": 6178,
                "interval": 6500,
                "offset": 1500,
                "noteType": "ProfessionSkill3"
            },
            // Autocast Profession Skill 4, which doesn't show up in the dps logs
            {
                "command": "AddAutoCastAbility",
                "abilityId": 42163,
                "interval": 24500,
                "offset": 1750,
                "noteType": "ProfessionSkill4"
            }
        ]
    },
    {
        "name": "The New Pistol Alac Mechanist",
        "description": "by: Mr. Mystic",
        "logUrl": "https://dps.report/kLvN-20230221-231353_golem",
        "buildChatCode": "[&DQMGJyY5RiqEAAAAkwEAAA4bAAAQGwAACRsAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=MtLTfGnXTKo",
        "postProcessSteps": [
            // Autocast Jade Bot Cannon
            {
                "command": "AddAutoCastAbility",
                "abilityId": 63095,
                "interval": 72500,
                "offset": 3000,
                "noteType": "EliteSkill"
            }
        ]
    }

];

// Only ones being tested at the moment
// TODO: MOVE ALL TO ONE ARRAY
var songMetas = [
];

function deleteAbilityId(song, abilityId) {
    var notes = song.notes;
    var numDeleted = 0;
    for (var index = 0; index < notes.length; index++) {
        var note = notes[index];
        if (note.abilityId == abilityId) {
            song.notes.splice(index, 1);
            numDeleted += 1;
        }
    }
    console.log("  Deleted " + numDeleted + " notes of abilityId: " + abilityId);
}

async function generateSongs() {
    var songs = [];

    console.log("Starting Generation of " + songMetas.length + " Songs");
    for (var songMetasIndex = 0; songMetasIndex < songMetas.length; songMetasIndex++) {
        var songMeta = songMetas[songMetasIndex];
        console.log("Generating Song: " + songMeta.name);

        var song = await generateSong(
            songMeta.name,
            songMeta.description,
            songMeta.logUrl,
            songMeta.buildChatCode,
            songMeta.buildUrl
        )
        console.log("  Song Generated!");

        var postProcessSteps = songMeta.postProcessSteps;
        for (var postIndex = 0; postIndex < postProcessSteps.length; postIndex++) {
            var process = postProcessSteps[postIndex];
            var command = process.command;
            console.log("  Post Process: " + command);
            if (command == "AddPreCastAbility") {
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
                var note = song.notes[index];
                song.notes.splice(index, 1);
                console.log("  Delete Note At: " + index + " (" + note.abilityId + ", " + note.noteType + ")");
            } else if (command == "DeleteAbilityId") {
                deleteAbilityId(song, process.abilityId);
            }
        }
        console.log("  Completed");

        songs.push(song);
    }

    return songs;
}
