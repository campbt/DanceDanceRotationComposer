var snowCrowsSongMetas = [

    // Last Generated: 2023/10/16


    // MARK: Elementalist

    {
        "name": "Beginner Condition Weaver [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Dec 2, 2022\nUpdated Dec 30, 2022\nNovember 2022 Balance",
        "logUrl": "https://dps.report/m2fR-20221230-135117_golem",
        "buildChatCode": "[&DQYfFRomOBV0AAAAcwAAAMsAAAA1FwAAEhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/weaver/beginner-condition-weaver",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Beginner Power Weaver [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Dec 22, 2022\nUpdated Mar 12, 2023\nMay 2023 Balance",
        "logUrl": "https://dps.report/orIr-20230311-214922_golem",
        "buildChatCode": "[&DQYfHSkfOBl0AHQAUAEAAL4BAAA1FwAAEhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/weaver/beginner-power-weaver",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Condition Alacrity Tempest [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Oct 5, 2022\nUpdated Sep 3, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/PDDo-20230901-223550_golem",
        "buildChatCode": "[&DQYfFSU1MCfHEgAAcwAAAL4BAADLAAAAJgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/tempest/condition-alacrity-tempest",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Tempest [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Oct 9, 2022\nUpdated Sep 3, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/LxOW-20230829-062736_golem",
        "buildChatCode": "[&DQYfFRomMBfHEgAAcwAAAL4BAADLAAAAJgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/tempest/condition-tempest",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Weaver [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Sep 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/Rh4G-20230831-184205_golem",
        "buildChatCode": "[&DQYfFRomOBV0AAAAcwAAAMsAAAA1FwAAEhcAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/weaver/condition-weaver",
        "postProcessSteps": [
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
        "name": "Power Catalyst [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 8, 2022\nUpdated Aug 27, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/xfAj-20230905-181818_golem",
        "buildChatCode": "[&DQYfHSkfQyZ0AAAAvgEAAPgaAABQAQAA9xoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/catalyst/power-catalyst",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Quickness Catalyst [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 8, 2022\nUpdated Sep 7, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/ssbX-20230903-221045_golem",
        "buildChatCode": "[&DQYfHSkfQz50AAAAvgEAAPgaywDLAAAA9xoAAAAAAAAAAAAAAAAAAAAAAAADWgAvADMAAA==]",
        "buildUrl": "https://snowcrows.com/en/builds/elementalist/catalyst/power-quickness-catalyst",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Weaver [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Aug 25, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/puTp-20230823-113551_golem",
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

    // MARK: Engineer

    {
        "name": "Beginner Power Holosmith [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Dec 18, 2022\nUpdated Jan 5, 2023\nMay 2023 Balance",
        "logUrl": "https://dps.report/nMYf-20220824-174210_golem",
        "buildChatCode": "[&DQMGOyYvOSsqDwAAhgAAACYBAABXFgAA8BUAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/engineer/holosmith/beginner-power-holosmith",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Condition Alacrity Mechanist [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 14, 2022\nUpdated Oct 14, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/nCrq-20231014-174856_golem",
        "buildChatCode": "[&DQMGJyY5RioNGwAABwEAAJMBAACGAAAACRsAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/engineer/mechanist/condition-alacrity-mechanist",
        "postProcessSteps": [
            // (No Entry Found in post_process_steps.py)
        ]
    },
    {
        "name": "Condition Holosmith [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Oct 9, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/mbPx-20231009-150450_golem",
        "buildChatCode": "[&DQMGJyY5OTcqDwAAhgAAAAcBAACTAQAA8BUAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/engineer/holosmith/condition-holosmith",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Mechanist [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 9, 2022\nUpdated Sep 6, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/YZq3-20230827-082702_golem",
        "buildChatCode": "[&DQMGJyY5RjUNGxQBhgBfARAbAAAOG4YACRsAAAAAAAAAAAAAAAAAAAAAAAABNgAA]",
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

    // MARK: Guardian

    {
        "name": "Condition Firebrand [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Sep 28, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/4Txb-20231003-115945_golem",
        "buildChatCode": "[&DQEQGi4fPiVLFwAATAEAABUXAAAxAQAAGBYAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/guardian/firebrand/condition-firebrand",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Quickness Firebrand [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Sep 9, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/qxZh-20230908-203433_golem",
        "buildChatCode": "[&DQEQGi4fPiVLFwAAFRcAAHoWAABMAQAAiRIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/guardian/firebrand/condition-quickness-firebrand",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Willbender [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 3, 2022\nUpdated Oct 5, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/W6No-20231004-182316_golem",
        "buildChatCode": "[&DQEQGi4XQSUmDwAATAEAANgaAAAxAQAA6RoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/guardian/willbender/condition-willbender",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Willbender [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 8, 2022\nUpdated Sep 22, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/cQat-20230827-230528_golem",
        "buildChatCode": "[&DQEqOi4VQSYmDwAATAEAAEgBAAD+AAAAiRIAAAAAAAAAAAAAAAAAAAAAAAA=]",
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

    // MARK: Mesmer

    {
        "name": "Condition Alacrity Mirage [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished May 23, 2021\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/xC5s-20231003-215812_golem",
        "buildChatCode": "[&DQctPQElOxvuFQAA4BUAAIMBAACBAQAARhcAAAAAAAAAAAAAAAAAAAAAAAABWQAA]",
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
        "name": "Condition Mirage [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished May 23, 2021\nUpdated Sep 9, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/mhMB-20230828-112203_golem",
        "buildChatCode": "[&DQcBJy09Ox/uFSMP4BUHFoEBgQGDAYMBRhe8AQAAAAAAAAAAAAAAAAAAAAA=]",
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
        "name": "Condition Virtuoso [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 16, 2022\nUpdated Oct 5, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/5rrD-20231003-202531_golem",
        "buildChatCode": "[&DQcBHRgdQjsjDwAAgwEAAIIBAACBAQAA5RoAAAAAAAAAAAAAAAAAAAAAAAA=]",
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
        "name": "Power Boon Chronomancer [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished May 23, 2021\nUpdated Jul 13, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/rZau-20230828-220121_golem",
        "buildChatCode": "[&DQcKGQEdKC4jDwAABBMAAGkBAADPEgAAsxIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/chronomancer/power-boon-chronomancer",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Chronomancer [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished May 23, 2021\nUpdated Sep 9, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/27Dr-20230906-171101_golem",
        "buildChatCode": "[&DQcKGQEdKD4jDwAABBMAAGkBAACPAQAAsxIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/mesmer/chronomancer/power-chronomancer",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Necromancer

    {
        "name": "Condition Alacrity Scourge [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Sep 9, 2023\nUpdated Oct 14, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/2bvf-20231014-100953_golem",
        "buildChatCode": "[&DQgnNjI1PD5+FgAAgAAAAHUBAABvAQAAkgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/scourge/condition-alacrity-scourge",
        "postProcessSteps": [
            // (No Entry Found in post_process_steps.py)
        ]
    },
    {
        "name": "Condition Harbinger [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Aug 18, 2021\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/IpSJ-20231002-151234_golem",
        "buildChatCode": "[&DQgnNTI1QD/nGgAAgAAAAOwaAAB1AQAA6BoAAAAAAAAAAAAAAAAAAAAAAAA=]",
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
        "name": "Condition Quickness Harbinger [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 14, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/9GSF-20231002-152522_golem",
        "buildChatCode": "[&DQgnNTI1QCvnGgAAgAAAAOwaAAB1AQAA6BoAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/harbinger/condition-quickness-harbinger",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Reaper [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Oct 5, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/O08l-20231002-152104_golem",
        "buildChatCode": "[&DQgnNzIlIiabAAAAQAEAAIAAAACmEgAAkgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/reaper/condition-reaper",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Scourge [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Sep 16, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/LzVj-20231003-151324_golem",
        "buildChatCode": "[&DQgnNjI1PCp+FgAAcAEAAIAAAAB1AQAAkgAAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/scourge/condition-scourge",
        "postProcessSteps": [
            // Unfortunately, the dps report does not have the profession skills, and they are not just cast off cooldown in this rotation
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Reaper [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Oct 14, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/s1PP-20231007-214530_golem",
        "buildChatCode": "[&DQg1KTIlIjbBEigPQAGBAIEAQAHxEnUBlQCVAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/necromancer/reaper/power-reaper",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },

    // MARK: Ranger

    {
        "name": "Condition Druid [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jun 30, 2023\nUpdated Sep 10, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/Ro5d-20230902-021316_golem",
        "buildChatCode": "[&DQQePSE3BT95AAAArAEAABsAAAC/AAAAwAAAADkAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/druid/condition-druid",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Quickness Untamed [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Apr 1, 2022\nUpdated Sep 5, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/I0px-20230905-165034_golem",
        "buildChatCode": "[&DQQePSE3SBd5AAAAvwAAAL0AAAC6AAAAwAAAACwAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/untamed/condition-quickness-untamed",
        "postProcessSteps": [
            // (No Entry Found in post_process_steps.py)
        ]
    },
    {
        "name": "Condition Soulbeast [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Sep 22, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/4Iwe-20231003-183528_golem",
        "buildChatCode": "[&DQQeLSE3Ny55AC4XvwC/ABsApQHpFukWLhYuFgMlFQkAAAAAAAAAAAAAAAA=]",
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
        "name": "Hybrid Soulbeast [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Sep 6, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/MVe5-20231003-183103_golem",
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
        "name": "Power Soulbeast [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Oct 17, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/KXbi-20231003-200539_golem",
        "buildChatCode": "[&DQQeOSA/Nzp5AAAApQEAALUAAACsAQAALhYAABEAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/ranger/soulbeast/power-soulbeast",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Untamed [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Dec 9, 2022\nUpdated Aug 27, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/uAKN-20231006-193430_golem",
        "buildChatCode": "[&DQQIGR45SDd5AAAAtQAAAKwBAAABGwAADxsAAC9DAAAAAAAAAAAAAAAAAAADWgAFADMAAA==]",
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

    // MARK: Revenant

    {
        "name": "Condition Alacrity Renegade [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Aug 10, 2021\nUpdated Sep 30, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/ervZ-20231003-013459_golem",
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
        "name": "Condition Quickness Herald [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Aug 25, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/ryeI-20230827-083609_golem",
        "buildChatCode": "[&DQkOHQMWNBbcEdwRKxIrEtQR1BEGEgYSyhHKEQEEAQQrEtQRBhLUESsSBhI=]",
        "buildUrl": "https://snowcrows.com/en/builds/revenant/herald/condition-quickness-herald",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Quickness Herald [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 12, 2022\nUpdated Sep 30, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/gpDG-20231003-204833_golem",
        "buildChatCode": "[&DQkDNg8qNBbcEdwRKxIrEtQR1BEGEgYSyhHKEQECAQIGEisS1BEGEisS1BE=]",
        "buildUrl": "https://snowcrows.com/en/builds/revenant/herald/power-quickness-herald",
        "postProcessSteps": [
            // Precast Activating Facets | Facet of Nature (Profession2) -> Facet of Darkness (Utility3) -> Facet of Nature (Heal). Then precast activating two of them: Infuse Light (Heal) -> True Nature (Profession2)-> Facet of Strength (Utility2)
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

    // MARK: Thief

    {
        "name": "Beginner Power Daredevil [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jan 1, 2023\nUpdated Mar 14, 2023\nFebruary 2023 Balance",
        "logUrl": "https://www.dps.report/wYRI-20220824-133048_golem",
        "buildChatCode": "[&DQUcPSMbBzkMAQAAVwEAADMBAACwEgAADgEAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/daredevil/beginner-power-daredevil",
        "postProcessSteps": [
            // (No Entry Found in post_process_steps.py)
        ]
    },
    {
        "name": "Condition Alacrity Specter [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 9, 2022\nUpdated Oct 8, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/M4K3-20230723-001607_golem",
        "buildChatCode": "[&DQUcGywfRzUVGwAALwEAAD4BAAALAQAADgEAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/specter/condition-alacrity-spectre",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Daredevil [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Aug 29, 2022\nUpdated Aug 27, 2023\nSecrets of the Obscure",
        "logUrl": "https://www.dps.report/31eu-20230825-131050_golem",
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
        "name": "Condition Specter [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 8, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/LWOU-20230719-010902_golem",
        "buildChatCode": "[&DQUcGywXRxUVGwAAPgEAAC8BAAALAQAADgEAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/thief/specter/condition-spectre",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Daredevil [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Sep 28, 2022\nUpdated Aug 27, 2023\nSecrets of the Obscure",
        "logUrl": "https://www.dps.report/GlYP-20230826-115834_golem",
        "buildChatCode": "[&DQUcPSMbBzsMAQAAKRMAADMBAACwEgAADgEAAAAAAAAAAAAAAAAAAAAAAAA=]",
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
        "name": "Power Deadeye [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Sep 1, 2022\nUpdated Sep 27, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/MXrd-20230915-172015_golem",
        "buildChatCode": "[&DQUcPSMbOh0MAQAAMwEAAKwWAAAfFgAAPRYAAAAAAAAAAAAAAAAAAAAAAAA=]",
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

    // MARK: Warrior

    {
        "name": "Beginner Power Spellbreaker [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 19, 2023\nUpdated Mar 21, 2023\nFebruary 2023 Balance",
        "logUrl": "https://dps.report/dUYi-20230319-214900_golem",
        "buildChatCode": "[&DQIEHxY/PT2mAAAArQAAAKkAAACvAAAAnRYAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/spellbreaker/beginner-power-spellbreaker",
        "postProcessSteps": [
        ]
    },
    {
        "name": "Condition Berserker [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 22, 2022\nUpdated Aug 27, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/U6gU-20230824-191717_golem",
        "buildChatCode": "[&DQIkLTM+EibyEgAA3BIAAKESAADXEgAAwhIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/berserker/condition-berserker",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Condition Quickness Berserker [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Aug 10, 2022\nUpdated Oct 15, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/tNb1-20231014-165434_golem",
        "buildChatCode": "[&DQIkLTM+EiryEqcA3BKoANcSqgChEqwAwhKcAAAAAAAAAAAAAAAAAAAAAAADWgBmACMAAA==]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/berserker/condition-quickness-berserker",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Berserker [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Jul 20, 2022\nUpdated Oct 4, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/Pypi-20231003-192433_golem",
        "buildChatCode": "[&DQIEHzMaEhXyEgAAqQAAANcSAADEEgAAwhIAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/berserker/power-berserker",
        "postProcessSteps": [
            {
                "command": "OptimizeAbilityQueue"
            }
        ]
    },
    {
        "name": "Power Bladesworn [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Mar 14, 2022\nUpdated Sep 1, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/9ns8-20230512-052547_golem",
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
    {
        "name": "Power Spellbreaker [SC]",
        "description": "Build and rotation created by Snow Crows.\n\nPublished Oct 1, 2022\nUpdated Sep 3, 2023\nSecrets of the Obscure",
        "logUrl": "https://dps.report/hmXz-20230903-014548_golem",
        "buildChatCode": "[&DQIEHxY/PT2mAAAArQAAAKkAAACvAAAAnRYAAAAAAAAAAAAAAAAAAAAAAAA=]",
        "buildUrl": "https://snowcrows.com/en/builds/warrior/spellbreaker/power-spellbreaker",
        "postProcessSteps": [
            // Precast: 'To the Limit' (Heal) -> Winds of Disenchantment (Elite)
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

];
