var myMysticSongMetas = [

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
            },
            {
                "command": "OptimizeAbilityQueue"
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
            {
                "command": "OptimizeAbilityQueue"
            }
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
            },
            {
                "command": "OptimizeAbilityQueue"
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
                "noteType": "Utility2"
            },
            // Autocast Profession Skill 3, which doesn't show up in the dps logs
            {
                "command": "AddAutoCastAbility",
                "abilityId": 6178,
                "interval": 6500,
                "offset": 1500,
                "noteType": "Profession3"
            },
            // Autocast Profession Skill 4, which doesn't show up in the dps logs
            {
                "command": "AddAutoCastAbility",
                "abilityId": 42163,
                "interval": 24500,
                "offset": 1750,
                "noteType": "Profession4"
            },
            {
                "command": "OptimizeAbilityQueue"
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
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Button Mash Scrapper",
        "description": "by: Mr. Mystic",
        "logUrl": "https://dps.report/Xf3X-20230320-185258_golem",
        "buildChatCode": "[&DQMGNyYvKz0qDwAAJgEAAK4SAACjAAAAiQEAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=8y8xVNPgA0Y",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "The New Power Reaper [LI]",
        "description": "by: Mr. Mystic\nLow intensity version",
        "logUrl": "https://dps.report/d6kn-20230503-122000_golem",
        "buildChatCode": "[&DQg1LTImIjYoDwAAgQAAAHUBAABvAQAAlQAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=qnmZYQvlfnk",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "The New Power Reaper [Simplified]",
        "description": "by: Mr. Mystic\nSimplified version",
        "difficulty": 2,
        "logUrl": "https://dps.report/2MOO-20230504-000904_golem",
        "buildChatCode": "[&DQg1KTImIjbBEgAAgQAAAEABAADxEgAAegEAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=qnmZYQvlfnk",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "The New Harbinger",
        "description": "by: Mr. Mystic",
        "logUrl": "https://dps.report/nfyh-20230511-030639_golem",
        "buildChatCode": "[&DQgnNTI1QD/nGgAAiwAAAOsaAACAAAAA6BoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=V4D5Ud-LYCg",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Chaos Condi Viruotoso",
        "description": "by: Mr. Mystic",
        "difficulty": 2,
        "logUrl": "https://dps.report/cPga-20230517-030126_golem",
        "buildChatCode": "[&DQctPRgdQj8jDwAAgwEAAIEBAADdGgAA5RoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://www.youtube.com/watch?v=8OhmaHmtr1Q",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

];
