var customSkills = {
    // Elementalist - Cleansing Fire
    // Not sure how this is in the DPS reports on builds that didn't even take it,
    // but it doesn't seem castable, so ignore.
    "5535": {
        "isNote": false
    },
    // Elementalist - Part of Fiery Greatsword
	"5663": {
		"isNote": false
	},
    // Sigil: Lightning Strike
	"9292": {
		"isNote": false
	},
    // Sigil: Frost Burst
	"9428": {
		"isNote": false
	},
    // Sigil: Ring of Earth
	"9433": {
		"isNote": false
	},
    // Firebrand - Trait: Glacial Heart
	"21795": {
		"isNote": false
	},
    // Daredevil - Special Dodge
	"23275": {
		"isNote": true,
		"noteType": "Dodge"
	},
    // Ability Code for the weapon stow
	"23285": {
		"isNote": true,
		"noteType": "WeaponStow"
	},
    // Renegade - Part of Unrelenting Assault
	"28232": {
		"isNote": false
	},
    // Reaper - Trait: Chilling Nova
	"29604": {
		"isNote": false
	},
    // Daredevil - Trait: Bound
    "31129": {
        "isNote": false
    },
    // Dareevil - Trait: Impaling Lotus
	"31267": {
		"isNote": false
	},
    // Berserker - Trait: King of Fires
	"31289": {
		"isNote": false
	},
    // Daredevil - Trait: Bound
	"31600": {
		"isNote": false
	},
    // Revenant - Trait: Call of the Demon
    "46856": {
        "isNote": false
    },
    // Revenant - Trait: Call of the Dragon
    "46857": {
        "isNote": false
    },
    // Weaver - Dual Fire
	"43470": {
		"isNote": true,
		"noteType": "Profession1"
	},
    // Weaver - Dual Water
	"41166": {
		"isNote": true,
		"noteType": "Profession2"
	},
    // Weaver - Dual Air
	"42264": {
		"isNote": true,
		"noteType": "Profession3"
	},
    // Weaver - Dual Earth
	"44857": {
		"isNote": true,
		"noteType": "Profession4"
	},
	// Holosmith - Vent Exhaust
	"43630": {
		"isNote": false
	},
	// Holosmith - Overheat
	"43937": {
		"isNote": false
	},

    // Firebrand Bundles are not in API for some reason

    // Tome of Justice:
    "41258": { // Chapter 1: Searing Spell
        "isNote": true,
        "noteType": "Weapon1",
        "tomeSkill": "44364",
    },
    "40635": { // Chapter 2: Igniting Burst
        "isNote": true,
        "noteType": "Weapon2",
        "tomeSkill": "44364",
    },
    "42449": { // Chapter 3: Heated Rebuke
        "isNote": true,
        "noteType": "Weapon3",
        "tomeSkill": "44364",
    },
    "40015": { // Chapter 4: Scorched Aftermath
        "isNote": true,
        "noteType": "Weapon4",
        "tomeSkill": "44364",
    },
    "42898": { // Epilogue: Ashes of the Just
        "isNote": true,
        "noteType": "Weapon5",
        "tomeSkill": "44364",
    },

    // Tome of Resolve:
    "45022": { // Chapter 1: Desert Bloom
        "isNote": true,
        "noteType": "Weapon1",
        "tomeSkill": "41780",
    },
    "40679": { // Chapter 2: Radiant Recovery
        "isNote": true,
        "noteType": "Weapon2",
        "tomeSkill": "41780",
    },
    "45128": { // Chapter 3: Azure Sun
        "isNote": true,
        "noteType": "Weapon3",
        "tomeSkill": "41780",
    },
    "42008": { // Chapter 4: Shining River
        "isNote": true,
        "noteType": "Weapon4",
        "tomeSkill": "41780",
    },
    "42925": { // Epilogue: Eternal Oasis
        "isNote": true,
        "noteType": "Weapon5",
        "tomeSkill": "41780",
    },

    // Tome of Courage:
    "42986": { // Chapter 1: Unflinching Charge
        "isNote": true,
        "noteType": "Weapon1",
        "tomeSkill": "42259",
    },
    "41968": { // Chapter 2: Daring Challenge
        "isNote": true,
        "noteType": "Weapon2",
        "tomeSkill": "42259",
    },
    "41836": { // Chapter 3: Valiant Bulwark
        "isNote": true,
        "noteType": "Weapon3",
        "tomeSkill": "42259",
    },
    "40988": { // Chapter 4: Stalwart Stand
        "isNote": true,
        "noteType": "Weapon4",
        "tomeSkill": "42259",
    },
    "44455": { // Epilogue: Unbroken Lines
        "isNote": true,
        "noteType": "Weapon5",
        "tomeSkill": "42259",
    },

	"46970": { // Mushroom King's Blessing (PoV only) - No idea
        "isNote": false
    },

    // Elementalist - Trait: Sunspot
	"56883": {
		"isNote": false
	},
    // Elementalist - Trait: Earthen Blast
    "56885": {
        "isNote": false
    },
    // Engineer - Trait: Explosive Entrance
    "59562": {
        "isNote": false
    },
    // Thief - Trait: Invoke Torment
    "59591": {
        "isNote": false
    },
    // Harbinger - Trait: Approaching Doom
    "62558": {
        "isNote": false
    },
    // Willbender - Part of Rushing Justice (there is a real note at start)
    "62624": {
        "isNote": false
    },
    // Harbinger - Trait: Deathly Haste
    "62671": {
        "isNote": false
    },
    // Vindicator - Trait: Forerunner of Death
    "62693": {
        "isNote": false
    },
    // Vindicator - Part of Phantom's Onslaught (there is a real note at start)
    "62713": {
        "isNote": false
    },
    // Vindicator - Forerunner of Death
    "62730": {
        "isNote": true,
        "noteType": "Dodge"
    },
    // Bladesworn - Trait: Unseen Sword
    "62847": {
        "isNote": false
    },

    // Bladesworn Bundles are not in API for some reason

    // Bladesworn - Dragon Trigger
    "62797": { // Dragon Slash - Force
        "isNote": true,
        "noteType": "Weapon1"
    },
    "62980": { // Dragon Slash - Boost
        "isNote": true,
        "noteType": "Weapon2"
    },
    "62951": { // Dragon Slash - Reach
        "isNote": true,
        "noteType": "Weapon3"
    },
    "62893": { // Triggerguard
        "isNote": true,
        "noteType": "Weapon4"
    },
    "62926": { // Flicker Step
        "isNote": true,
        "noteType": "Weapon5"
    },

    // Bladesworn - Gunsaber
    "62966": { // Swift Cut
        "isNote": true,
        "noteType": "Weapon1"
    },
    "62772": { // Steel Divide
        "isNote": true,
        "noteType": "Weapon1"
    },
    "62918": { // Explosive Thrust
        "isNote": true,
        "noteType": "Weapon1"
    },
    "62930": { // Blooming Fire
        "isNote": true,
        "noteType": "Weapon2"
    },
    "62732": { // Artillery Slash
        "isNote": true,
        "noteType": "Weapon3"
    },
    "62789": { // Cyclone Trigger
        "isNote": true,
        "noteType": "Weapon4"
    },
    "62885": { // Break Step
        "isNote": true,
        "noteType": "Weapon5"
    },

	// Mechanist - Barrier Burst
    "63141": {
        "isNote": true,
		"noteType": "Profession3"
    },
	// Mechanist - Barrier Burst
    "63365": {
        "isNote": true,
		"noteType": "Profession3"
    },
    // Specter - Part of Twilight Combo
    "63181": {
        "isNote": false
    },
    // Untamed - Part of Overbearing Smash
    "63201": {
        "isNote": false
    },
    // Untamed - Part of some ability/Trait
    "63224": {
        "isNote": false
    },

	// == Relics ==

	// Relic - Fireworks
	"69855": {
		"isNote": false
	},

    // Ability Code for all weapon swaps
	"-2": {
		"isNote": true,
		"noteType": "WeaponSwap"
	},
    // Weaver - Attunement Swap Fire/Water
	"-5": {
		"isNote": true,
		"noteType": "Profession1"
	},
    // Weaver - Attunement Swap Fire/Air
	"-6": {
		"isNote": true,
		"noteType": "Profession1"
	},
    // Weaver - Attunement Swap Fire/Earth
	"-7": {
		"isNote": true,
		"noteType": "Profession1"
	},
    // Weaver - Attunement Swap Water/Fire
	"-8": {
		"isNote": true,
		"noteType": "Profession2"
	},
    // Weaver - Attunement Swap Water/Air
	"-9": {
		"isNote": true,
		"noteType": "Profession2"
	},
    // Weaver - Attunement Swap Water/Earth
	"-10": {
		"isNote": true,
		"noteType": "Profession2"
	},
    // Weaver - Attunement Swap Air/Fire
	"-11": {
		"isNote": true,
		"noteType": "Profession3"
	},
    // Weaver - Attunement Swap Air/Water
	"-12": {
		"isNote": true,
		"noteType": "Profession3"
	},
    // Weaver - Attunement Swap Air/Earth
	"-13": {
		"isNote": true,
		"noteType": "Profession3"
	},
    // Weaver - Attunement Swap Earth/Fire
	"-14": {
		"isNote": true,
		"noteType": "Profession4"
	},
    // Weaver - Attunement Swap Earth/Air
	"-15": {
		"isNote": true,
		"noteType": "Profession4"
	},
    // Weaver - Attunement Swap Earth/Earth
	"-16": {
		"isNote": true,
		"noteType": "Profession4"
	},
    // Mirage - Ambush
	"-17": {
		"isNote": true,
		"noteType": "Dodge"
	},
	//  Firebrand - Restoring Reprieve
	"-20": {
		"remap": 41475
	},
	//  Firebrand - Potent Haste
	"-22": {
		"remap": 42983
	},
	//  Rune of the Nightmare
	"-26": {
		"isNote": false
	},
	//  Relic of Fireworks (Buff Lost)
	"-32": {
		"isNote": false
	}
};
