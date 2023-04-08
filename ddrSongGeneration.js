// This file is used to generate ALL songs, including extra manual processing steps

var songMetas = [

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
                "noteType": "Utility2"
            },
            // Then add Weave Self (which comes before Lightning Storm)
            {
                "command": "AddPreCastAbility",
                "abilityId": 43638,
                "time": -800,
                "duration": 800,
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            },
            // Add in the Profession1 that is not in the dps report for some reason
            {
                "command": "AddAbility",
                "time": 1200,
                "duration": 0,
                "noteType": "Profession1",
                "abilityId": -6
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
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
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
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Quickness Catalyst [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 8, 2022",
        "logUrl": "https://dps.report/7kx4-20221209-102548_golem",
        "buildChatCode": "[&DQYpHyU1Qz50AAAAvgEAAPgaAADuGgAAlwAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/catalyst/power-quickness-catalyst",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
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
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Alacrity Mirage (Staff) [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 8th, 2023",
        "logUrl": "https://dps.report/5DUZ-20221003-032506_golem",
        "buildChatCode": "[&DQcBJS09OxfuFQAA4BUAAIEBAACDAQAARhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/mirage/condition-alacrity-mirage",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Alacrity Mirage (StAxe) [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 8, 2023",
        "logUrl": "https://dps.report/tzYP-20230222-184348_golem",
        "buildChatCode": "[&DQcBJy09Ox/uFQAAgQEAAIMBAADgFQAARhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/mirage/condition-alacrity-mirage",
        "postProcessSteps": [
            // Precast Phantasmal Duelist (Weapon4)
            {
                "command": "AddPreCastAbility",
                "abilityId": 10175,
                "time": -560,
                "duration": 560,
                "noteType": "Weapon4"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Mirage (Axe) [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 7, 2022",
        "logUrl": "https://dps.report/une5-20220723-180845_golem",
        "buildChatCode": "[&DQctHQEnOx8jDwAAgwEAAIEBAADgFQAARhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/mirage/condition-mirage",
        "postProcessSteps": [
            // For some reason, it has the precast duelist but misses a dodge
            {
                "command": "DeleteAt",
                "index": 0
            },
            // Dodge
            {
                "command": "AddPreCastAbility",
                "abilityId": -17,
                "time": -279,
                "duration": 0,
                "noteType": "Dodge"
            },
            // Precast Phantasmal Mage (Weapon5)
            {
                "command": "AddPreCastAbility",
                "abilityId": 10189,
                "time": -600,
                "duration": 879,
                "noteType": "Weapon5"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
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
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
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
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Necromancer

    // Unfortunately, the dps report does not have the profession skills, and they are not just cast off cooldown in this rotation
    {
        "name": "Condi Scourge [Benchmark]",
        "description": "by: Snow Crows\nUpdated Jan 7, 2023",
        "logUrl": "https://dps.report/0Pzn-20220630-021720_golem",
        "buildChatCode": "[&DQgnNjI1PCYoD6IAgAAAAG8BAABwAQAAkgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/scourge/condition-scourge",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Harbinger [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 30, 2022",
        "logUrl": "https://dps.report/ViK3-20221201-114322_golem",
        "buildChatCode": "[&DQgnNjI1QD/nGgAAgAAAANQaAADsGgAAkgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/harbinger/condition-harbinger",
        "postProcessSteps": [
            // Precast is: Elixir of Anguish -> Elixir of Rish -> Elixir of Promise -> Plaguelands
            {
                "command": "AddPreCastAbility",
                "abilityId": 10549,
                "time": -918,
                "duration": 918,
                "noteType": "Elite"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62667,
                "time": -676,
                "duration": 676,
                "noteType": "Heal"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62530,
                "time": -682,
                "duration": 682,
                "noteType": "Utility2"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62662,
                "time": -683,
                "duration": 683,
                "noteType": "Utility3"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Reaper [Benchmark]",
        "description": "by: Snow Crows\nUpdated Feb 17, 2023",
        "logUrl": "https://dps.report/61Dw-20230214-203311_golem",
        "buildChatCode": "[&DQg1KTImIjabACgPQAGBAIEAQAHxEnUBlQCVAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/reaper/power-reaper",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Engineer

    {
        "name": "Power Holosmith [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 9, 2022",
        "logUrl": "https://dps.report/Xk87-20221130-224702_golem",
        "buildChatCode": "[&DQMGOyYvOSsqDwAAhgAAACYBAABXFgAA8BUAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/engineer/holosmith/power-holosmith",
        "postProcessSteps": [
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
        "name": "Condi Mechanist [Benchmark]",
        "description": "by: Snow Crows\nUpdated Feb 20, 2023\nSet JadeBot skills to autocast.",
        "logUrl": "https://dps.report/XehS-20230217-165803_golem",
        "buildChatCode": "[&DQMGJyY5RhUNGyoPhgCGAAcBBwEQGw4bCRuJAQAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/engineer/mechanist/condition-mechanist",
        "postProcessSteps": [
            {
                "command": "AddPreCastAbility",
                "abilityId": 5812,
                "time": -200,
                "duration": 0,
                "noteType": "Utility2"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Ranger

    {
        "name": "Power Soulbeast [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 4, 2022",
        "logUrl": "https://dps.report/9nH4-20220717-181537_golem",
        "buildChatCode": "[&DQQePSA/Nzp5AAAApQEAAKwBAAC1AAAALhYAADsAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/soulbeast/power-soulbeast",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Soulbeast [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 26, 2022\nStart in Beastmode with Lynx",
        "logUrl": "https://dps.report/vqa8-20220905-124634_golem",
        "buildChatCode": "[&DQQeLSE3Ny55AC4XvwC/ALoApQHpFukWLhYuFgMlFQkAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/soulbeast/condition-soulbeast",
        "postProcessSteps": [
            // Precast Abilities
            {
                "command": "AddPreCastAbility",
                "abilityId": 12517,
                "time": -250,
                "duration": 250,
                "noteType": "Weapon3"
            },
			{
                "command": "AddPreCastAbility",
                "abilityId": 45479,
                "time": -250,
                "duration": 250,
                "noteType": "Elite"
            },
			{
                "command": "AddPreCastAbility",
                "abilityId": 12496,
                "time": -500,
                "duration": 500,
                "noteType": "Utility2"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Hybrid Soulbeast [Benchmark]",
        "description": "Condi damage, but bursty like power \nStart in Beastmode with Bristleback",
        "logUrl": "https://dps.report/OZNq-20230218-035157_golem",
        "buildChatCode": "[&DQQePSA/Ny55AC4XvwC/AKUBpQHpFukWLhYuFjQlFQkAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/soulbeast/hybrid-soulbeast",
        "postProcessSteps": [
            // AutoCast Abilities
			{
                "command": "AddAutoCastAbility",
                "abilityId": 45479,
                "interval": 24000,
                "offset": 3450,
                "noteType": "Profession2"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Alacrity Untamed [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 10, 2022",
        "logUrl": "https://dps.report/dVD1-20221202-174129_golem",
        "buildChatCode": "[&DQQePRkVSBclDwAAtQAAALYAAAABGwAA7QAAAAMAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/untamed/power-alacrity-untamed",
        "postProcessSteps": [
            // Precast Call lightning on your storm spirit
            {
                "command": "AddPreCastAbility",
                "abilityId": 12594,
                "time": -639,
                "duration": 639,
                "noteType": "Utility2"
            },
            // Precast Strength of the Pack
            {
                "command": "AddPreCastAbility",
                "abilityId": 12516,
                "time": -750,
                "duration": 750,
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Untamed [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 10, 2022",
        "logUrl": "https://dps.report/YaET-20221228-195030_golem",
        "buildChatCode": "[&DQQIGh49SBd5AAAAtQAAAAEbAACsAQAA7QAAAAMAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/untamed/power-untamed",
        "postProcessSteps": [
            // Precast Exploding Spores
            {
                "command": "AddPreCastAbility",
                "abilityId": 63157,
                "time": -484,
                "duration": 484,
                "noteType": "Utility2"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Untamed [Benchmark]",
        "description": "by: Snow Crows\nUpdated Dec 4, 2022",
        "logUrl": "https://dps.report/eY6D-20221027-005909_golem",
        "buildChatCode": "[&DQQePSA2SBd5AAAAARsAALYAAAC/AAAAwAAAAD0AAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/untamed/condition-untamed",
        "postProcessSteps": [
            // Precast Sharpening Stone
            {
                "command": "AddPreCastAbility",
                "abilityId": 12537,
                "time": -200,
                "duration": 0,
                "noteType": "Utility3"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Thief

    {
        "name": "Power Daredevil [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 15, 2023",
        "logUrl": "https://www.dps.report/wYRI-20220824-133048_golem",
        "buildChatCode": "[&DQUcPSMbBzkMAQAAVwEAADMBAACwEgAADgEAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/daredevil/power-daredevil",
        "postProcessSteps": [
            // Precast Dodges to empty bar
            {
                "command": "AddPreCastAbility",
                "abilityId": 23275,
                "time": -750,
                "duration": 750,
                "noteType": "Dodge"
            },
			{
                "command": "AddPreCastAbility",
                "abilityId": 13027,
                "time": -1000,
                "duration": 1000,
                "noteType": "HealSkill"
            },
			{
                "command": "AddPreCastAbility",
                "abilityId": 23275,
                "time": -750,
                "duration": 750,
                "noteType": "Dodge"
            },
			{
                "command": "AddPreCastAbility",
                "abilityId": 23275,
                "time": -750,
                "duration": 750,
                "noteType": "Dodge"
            },
            // Precast Thieves Guild
            {
                "command": "AddPreCastAbility",
                "abilityId": 13082,
                "time": -1162,
                "duration": 1162,
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Daredevil [Benchmark]",
        "description": "by: Snow Crows\nUpdated Feb 17, 2023",
        "logUrl": "https://www.dps.report/84Ov-20230216-152900_golem",
        "buildChatCode": "[&DQUcGyw1BxmUEgwBVQFXAS8BMwELAVYBKAAOAQAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/daredevil/condition-daredevil",
        "postProcessSteps": [
            {
                "command": "AddPreCastAbility",
                "abilityId": 13093,
                "time": -100,
                "duration": 0,
                "noteType": "Utility1"
            },
            // Precast Thieves Guild
            {
                "command": "AddPreCastAbility",
                "abilityId": 13082,
                "time": -1162,
                "duration": 1162,
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Deadeye Rifle [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 13, 2023",
        "logUrl": "https://dps.report/yDtd-20230214-221732_golem",
        "buildChatCode": "[&DQUcPSMbOh0MAQAAMwEAAB8WAAAgFwAAPRYAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/deadeye/power-deadeye",
        "postProcessSteps": [
            // Precast Deadeye's Mark
            {
                "command": "AddPreCastAbility",
                "abilityId": 43390,
                "time": -402,
                "duration": 402,
                "noteType": "Profession1"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Deadeye Dagger [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 13, 2023",
        "logUrl": "https://dps.report/ZuuL-20221130-040247_golem",
        "buildChatCode": "[&DQUcPSMbOh0MAQAAMwEAAB8WAACsFgAAPRYAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/deadeye/power-deadeye",
        "postProcessSteps": [
            // Precast Deadeye's Mark
            {
                "command": "AddPreCastAbility",
                "abilityId": 43390,
                "time": -402,
                "duration": 402,
                "noteType": "Profession1"
            },
            // Precast Thieves Guild
            {
                "command": "AddPreCastAbility",
                "abilityId": 13082,
                "time": -1162,
                "duration": 1162,
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Alacrity Specter [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 14, 2023",
        "logUrl": "https://dps.report/KKWN-20220902-160446_golem",
        "buildChatCode": "[&DQUcGywXRx8VGwAALwEAAAgbAAAGGwAADgEAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/specter/condition-alacrity-spectre",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Specter [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 14, 2023",
        "logUrl": "https://dps.report/KzkD-20220827-170023_golem",
        "buildChatCode": "[&DQUcGywfRxcVGwAAPgEAAC8BAAALAQAAKAAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/specter/condition-spectre",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Guardian

    {
        "name": "Power Dragonhunter [Benchmark]",
        "description": "by: Snow Crows\nUpdated Feb 27, 2023",
        "logUrl": "https://dps.report/iJlg-20230223-101906_golem",
        "buildChatCode": "[&DQEqOhA/GykmDwAA/gAAAEgBAACKEgAAtRIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/guardian/dragonhunter/power-dragonhunter",
        "postProcessSteps": [
            // Precast Procession of Blades, which was missed in logs
            {
                "command": "AddPreCastAbility",
                "abilityId": 30364,
                "time": -447,
                "duration": 447,
                "noteType": "Utility3"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Quickness Firebrand [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 6, 2023",
        "logUrl": "https://dps.report/tZsX-20230301-130007_golem",
        "buildChatCode": "[&DQEQGi4fPi5LFwAATAEAABUXAAB6FgAAiRIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/guardian/firebrand/condition-quickness-firebrand",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Firebrand [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 2, 2023",
        "logUrl": "https://dps.report/PeVd-20230226-194816_golem",
        "buildChatCode": "[&DQEQGi4fPi1LFwAATAEAABUXAAAxAQAAiRIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/guardian/firebrand/condition-firebrand",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Willbender [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 8, 2023",
        "logUrl": "https://dps.report/vmTw-20230305-042153_golem",
        "buildChatCode": "[&DQEqOi4VQSYmDwAATAEAAEgBAAD+AAAA6RoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/guardian/willbender/power-willbender",
        "postProcessSteps": [
            // Delete the initial Profession2 casts, they appear in the wrong order in the dps log and are added in manually
            {
                "command": "DeleteAbilityId",
                "abilityId": 62603
            },
            // Precast Order: Flowing Resolve (Profession2) x2 -> Crashing Courage (Profession3) -> Shield of Wrath (Weapon5) -> Sword of Justice (Utility2)
            {
                "command": "AddPreCastAbility",
                "abilityId": 9168,
                "time": -597,
                "duration": 597,
                "noteType": "Utility2"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 9082,
                "time": -402,
                "duration": 402,
                "noteType": "Weapon5"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62648,
                "time": -683,
                "duration": 683,
                "noteType": "Profession3"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62603,
                "time": -500,
                "duration": 500,
                "noteType": "Profession2"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62603,
                "time": -500,
                "duration": 500,
                "noteType": "Profession2"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Renegade

    {
        "name": "Power Herald [Benchmark]",
        "description": "by: Snow Crows\nUpdated Jan 7, 2023",
        "logUrl": "https://dps.report/rW1Q-20221202-011416_golem",
        "buildChatCode": "[&DQkPKgM2NDXcEdwRKxIrEtQR1BEGEgYSyhHKEQECAQIGEisS1BEGEisS1BE=]",
        "buildUrl": "https://snowcrows.com/en/builds/revenant/herald/power-herald",
        "postProcessSteps": [
            // Precast Activating Facets | Facet of Nature (Profession2) -> Facet of Darkness (Utility3) -> Facet of Nature (Heal) -> Facet of Strength (Utility2)
            {
                "command": "AddPreCastAbility",
                "abilityId": 26644,
                "time": -333,
                "duration": 0,
                "noteType": "Utility2"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 27220,
                "time": -333,
                "duration": 0,
                "noteType": "Heal"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 28379,
                "time": -333,
                "duration": 0,
                "noteType": "Utility3"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 29371,
                "time": -333,
                "duration": 0,
                "noteType": "Profession2"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Quickness Herald [Benchmark]",
        "description": "by: Snow Crows\nUpdated Jan 7, 2023",
        "logUrl": "https://dps.report/Qw02-20221201-233631_golem",
        "buildChatCode": "[&DQkPKgM2NCbcEdwRKxIrEtQR1BEGEgYSyhHKEQECAQIGEisS1BEGEisS1BE=]",
        "buildUrl": "https://snowcrows.com/en/builds/revenant/herald/power-quickness-herald",
        "postProcessSteps": [
            // Precast Activating Facets | Facet of Nature (Profession2) -> Facet of Darkness (Utility3) -> Facet of Nature (Heal)
            // Then precast activating two of them: Infuse Light (Heal) -> True Nature (Profession2)
            // -> Facet of Strength (Utility2)
            {
                "command": "AddPreCastAbility",
                "abilityId": 26644,
                "time": -333,
                "duration": 0,
                "noteType": "Utility2"
            },
            // Activate Facets:
            {
                "command": "AddPreCastAbility",
                "abilityId": 51667,
                "time": -333,
                "duration": 0,
                "noteType": "Profession2"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 27228,
                "time": -333,
                "duration": 0,
                "noteType": "Heal"
            },
            // Turn on Facets:
            {
                "command": "AddPreCastAbility",
                "abilityId": 27220,
                "time": -333,
                "duration": 0,
                "noteType": "Heal"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 28379,
                "time": -333,
                "duration": 0,
                "noteType": "Utility3"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 29371,
                "time": -333,
                "duration": 0,
                "noteType": "Profession2"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Alacrity Renegade [Benchmark]",
        "description": "by: Snow Crows\nUpdated Feb 14, 2023",
        "logUrl": "https://dps.report/S4Zh-20230214-191402_golem",
        "buildChatCode": "[&DQkOHQMmPzrcEQAAKxIAANQRAAAGEgAAyhEAAAQFAADUESsSBhIAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/revenant/renegade/condition-alacrity-renegade",
        "postProcessSteps": [
            // Dlete the first Echoing Eruption so it can be pre-cast before Orders from Above
            {
                "command": "DeleteAt",
                "index": 0
            },
            // Precast Razorclaw's Rage (Utility3) -> Temporal Rift (Weapon5) -> Echoing Eruption (Weapon3) -> Orders from above (Profession4)
            {
                "command": "AddPreCastAbility",
                "abilityId": 45537,
                "time": -440,
                "duration": 440,
                "noteType": "Profession4"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 27964,
                "time": -440,
                "duration": 440,
                "noteType": "Weapon3"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 28409,
                "time": -560,
                "duration": 560,
                "noteType": "Weapon5"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 42949,
                "time": -520,
                "duration": 520,
                "noteType": "Utility3"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condi Renegade [Benchmark]",
        "description": "by: Snow Crows\nUpdated Jan 7, 2023",
        "logUrl": "https://dps.report/EeYd-20221008-182313_golem",
        "buildChatCode": "[&DQkOHQMmPyrcEQAAKxIAANQRAAAGEgAAyhEAAAQFAADUESsSBhIAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/revenant/renegade/condition-renegade",
        "postProcessSteps": [
            {
                "command": "AddPreCastAbility",
                "abilityId": 42836,
                "time": -592,
                "duration": 592,
                "noteType": "Profession3"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 28409,
                "time": -560,
                "duration": 560,
                "noteType": "Weapon5"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 42949,
                "time": -520,
                "duration": 520,
                "noteType": "Utility3"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Vindicator [Benchmark]",
        "description": "by: Snow Crows\nUpdated Jan 7, 2023",
        "logUrl": "https://dps.report/zeOf-20221201-171756_golem",
        "buildChatCode": "[&DQkPKgM2RR3cEdwRBhIGEisSKxLUEdQRyhHKEQcCAgAGEisS1BEAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/revenant/vindicator/power-vindicator",
        "postProcessSteps": [
            // Precast Spear of Archemorus (Elite)
            {
                "command": "AddPreCastAbility",
                "abilityId": 62942,
                "time": -597,
                "duration": 597,
                "noteType": "Elite"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Warrior

    {
        "name": "Condi Berserker [Benchmark]",
        "description": "by: Snow Crows\nUpdated Feb 19, 2023",
        "logUrl": "https://dps.report/nLun-20230217-094721_golem",
        "buildChatCode": "[&DQIkLTM9EiryEgAA3BIAANcSAADEEgAAwhIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/berserker/condition-berserker",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Spellbreaker [Benchmark]",
        "description": "by: Snow Crows\nUpdated Jan 11, 2023",
        "logUrl": "https://dps.report/7AYV-20221213-184310_golem",
        "buildChatCode": "[&DQIEHxY/PT2mAAAArQAAAKkAAACvAAAAnRYAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/spellbreaker/power-spellbreaker",
        "postProcessSteps": [
            // Precast: "To the Limit" (Heal) -> Winds of Disenchantment (Elite)
            {
                "command": "AddPreCastAbility",
                "abilityId": 45333,
                "time": -1200,
                "duration": 1200,
                "noteType": "Elite"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 14402,
                "time": -800,
                "duration": 800,
                "noteType": "Heal"
            },
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Bladesworn [Benchmark]",
        "description": "by: Snow Crows\nUpdated Mar 11, 2023\nSome utility skills are not present in this song.",
        "logUrl": "https://dps.report/brm9-20220810-112155_golem",
        "buildChatCode": "[&DQIEHwsVRCunAAAA8BoAAPIaAAD9GgAA/BoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/bladesworn/power-bladesworn",
        "postProcessSteps": [
            // Add in Precast: Flow Stabilizer (Utility2) x2 -> Tactical Reload (Elite) -> Flow Stabilizer (Utility2) -> Overcharged Cartridges (Utility3)
            {
                "command": "AddPreCastAbility",
                "abilityId": 68085,
                "time": -689,
                "duration": 689,
                "noteType": "Utility3"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62967,
                "time": -300,
                "duration": 300,
                "noteType": "Utility2"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62901,
                "time": -560,
                "duration": 560,
                "noteType": "Elite"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62967,
                "time": -300,
                "duration": 300,
                "noteType": "Utility2"
            },
            {
                "command": "AddPreCastAbility",
                "abilityId": 62967,
                "time": -300,
                "duration": 300,
                "noteType": "Utility2"
            },
            {
                "command": "OptimizeAbilityQueue"
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
    }

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

    console.log("Starting Generation of " + songMetas.length + " Songs");
    for (var songMetasIndex = 0; songMetasIndex < songMetas.length; songMetasIndex++) {
        var songMeta = songMetas[songMetasIndex];
        console.log("Generating Song: " + songMeta.name);

        var song = await generateSong(
            songMeta.name,
            songMeta.description,
            songMeta.logUrl,
            songMeta.buildChatCode,
            songMeta.buildUrl,
            false // Don't optimize at this stage. Do it after postProcess
        )
        console.log("  Song Generated!");

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
