// Special lookup table for skills that have non-standard priority
// Compiled from: https://docs.google.com/spreadsheets/d/19TeXBuGkba9F29Wnvv7TEpEc6wIYiCvtNuIXyVdnFdI/edit#gid=0
var skillPriority = {

    // Elementalist
    "5687": 1, // Updraft
    "5690": 1, // Earthquake
    "44998": 1, // Polaric Leap
    "44405": 1, // Riptide
    "40709": 1, // Earthen Vortex
    "40794": 1, // Earthen Synergy
    "5553": 1, // Gust
    "5671": 1, // Static Field
    "5680": 1, // Burning Retreat
    "5717": 1, // Burning Retreat
    "5719": 1, // Flame Leap
    "45746": 1, // Twist of Fate
    "5697": 1, // Fiery Whirl

    // Engineer
    "6004": 1, // Net Shot
    "6154": 1, // Overcharged Shot
    "5829": 1, // Static Shot
    "6054": 1, // Static Shield
    "63234": 1, // Rocket Fist Prototype
    "5905": 1, // Pry Bar
    "5998": 1, // Gear Shield
    "5996": 1, // Magnet
    "5930": 1, // Air Blast
    "5983": 1, // Rocket Kick
    "5868": 1, // Supply Crate
    "6183": 1, // Supply Crate
    "5832": 1, // Elixir X
    "20451": 1, // Elixir X
    "42009": 1, // Prime Light Beam

    // Guardian
    "9124": 1, // Banish
    "9195": 1, // Ring of Warding
    "9144": 1, // Line of Warding
    "9086": 1, // Protector's Strike
    "9099": 1, // Chains of Light
    "9097": 1, // Symbol of Blades
    "9091": 1, // Shield of Absorption
    "9224": 1, // Shield of Absorption
    "9154": 1, // Renewed Focus
    "68666": 1, // Renewed Focus
    "30083": 1, // Wings of Resolve
    "30225": 1, // Wings of Resolve
    "30286": 1, // Wings of Resolve
    "30783": 1, // Wings of Resolve
    "62603": 1, // Flowing Resolve
    "62635": 1, // Flowing Resolve
    "62532": 1, // Crashing Courage
    "62555": 1, // Crashing Courage
    "62596": 1, // Crashing Courage
    "62648": 1, // Crashing Courage

    // Mesmer
    "10218": 1, // Mind Stab
    "10220": 1, // Illusionary Wave
    "10276": 1, // Illusionary Counter
    "10334": 1, // Blurred Frenzy
    "10280": 1, // Illusionary Riposte
    "30769": 1, // Echo of Memory
    "62597": 1, // Bladeturn Requiem
    "43343": 1, // Blade Renewal
    "62573": 1, // Psychic Force
    "45230": 0.5, // Mirage Thrust
    "42304": 0.5, // Ether Barrage
    "44321": 0.5, // Imaginary Axes

    // Necromancer
    "10556": 1, // Wail of Doom
    "29855": 1, // Nightfall

    // Ranger
    "12522": 1, // Counterattack
    "12475": 1, // Hilt Bash
    "12573": 1, // Hunter's Shot
    "12511": 1, // Point-Blank Shot
    "12517": 1, // Quick Shot
    "12508": 1, // Concussion Shot
    "12490": 1, // Winter's Bite
    "12494": 1, // Lightning Reflexes
    "31496": 1, // Sublime Conversion
    "40729": 1, // Worldly Impact
    "42809": 1, // Worldly Impact
    "42894": 1, // Brutal Charge
    "46432": 1, // Brutal Charge
    "64882": 1, // Undead Plague

    // Revenant
    "29209": 1, // Riposting Shadows

    // Thief
    "16432": 1, // Cloak and Dagger
    "13005": 1, // Backstab
    "50481": 1, // Malicious Backstab
    "13010": 1, // Shadow Strike
    "13012": 1, // Head Shot
    "13113": 1, // Black Powder
    "13128": 1, // Infiltrator's Return
    "13083": 1, // Disabling Shot
    "13025": 1, // Infiltrator's Arrow
    "13035": 1, // Roll for Initiative
    "13020": 1, // Scorpion Wire
    "29516": 1, // Impact Strike
    "40600": 1, // Kneel
    "41068": 1, // Free Action
    "46335": 1, // Shadow Gust
    "13082": 1, // Thieves Guild
    "13085": 1, // Dagger Storm
    "63067": 2, // Siphon
    "63155": 1, // Enter Shadow Shroud
    "63251": 1, // Exit Shadow Shroud

    // Warrior
    "14507": 1, // Counterblow
    "14503": 1, // Pommel Bash
    "14414": 1, // Skull Crack
    "14425": 1, // Skull Crack
    "14426": 1, // Skull Crack
    "14427": 1, // Skull Crack
    "41110": 1, // Skull Crack
    "14400": 1, // Riposte
    "14367": 1, // Flurry
    "14428": 1, // Flurry
    "14429": 1, // Flurry
    "14430": 1, // Flurry
    "42494": 1, // Flurry
    "14353": 1, // Eviscerate
    "14422": 1, // Eviscerate
    "14423": 1, // Eviscerate
    "14424": 1, // Eviscerate
    "43566": 1, // Eviscerate
    "14361": 1, // Shield Bash
    "14362": 1, // Shield Stance
    "14375": 1, // Arcing Slice
    "14545": 1, // Arcing Slice
    "14546": 1, // Arcing Slice
    "14547": 1, // Arcing Slice
    "42707": 1, // Arcing Slice
    "14504": 1, // Pin Down
    "14506": 1, // Combustive Shot
    "14520": 1, // Combustive Shot
    "14521": 1, // Combustive Shot
    "14522": 1, // Combustive Shot
    "42803": 1, // Combustive Shot
    "14387": 1, // Earthshaker
    "14512": 1, // Earthshaker
    "14513": 1, // Earthshaker
    "14514": 1, // Earthshaker
    "40601": 1, // Earthshaker
    "14472": 1, // Explosive Shell
    "14360": 1, // Rifle Butt
    "14396": 1, // Kill Shot
    "14473": 1, // Kill Shot
    "14474": 1, // Kill Shot
    "14475": 1, // Kill Shot
    "42041": 1, // Kill Shot
    "44165": 1, // Full Counter
    "44937": 1, // Disrupting Stab
    "29679": 1, // Skull Grinder
    "30682": 1, // Flaming Flurry
    "30851": 1, // Decapitate
    "29852": 1, // Arc Divider
    "29923": 1, // Scorched Earth
    "30879": 1, // Rupturing Smash
    "29644": 1, // Gun Flame
    "62800": 1, // Dragon's Roar
    "62960": 1, // Dragonspike Mine
    "14516": 1, // Bull's Charge
    "14464": 1, // Kick
    "14502": 1, // Kick
    "41524": 1, // Kick
    "14388": 1, // Stomp
    "25498": 1, // Stomp
    "14419": 1, // Battle Standard
    "14569": 1, // Battle Standard
    "14483": 1, // Rampage
    "14355": 1, // Signet of Rage
    "62803": 1, // Dragon Trigger

};

// These skills have duration 0 but other abilities can NOT be queued in front of them
// They are generally some kind of kit or ability swap, similar to WeaponSwap
var skillPriorityBlacklistInstantCasts = {
    // "-17"   : true, // Ambush
    // "5495"  : true, // Earth Attunment
    // "44857" : true, // Earth Attunment
    // "-16"   : true, // Earth Attunment
    // "-15"   : true, // Earth Attunment
    // "-14"   : true, // Earth Attunment
    // "5494"  : true, // Air Attunment
    // "42264" : true, // Air Attunment
    // "-13"   : true, // Air Attunment
    // "-12"   : true, // Air Attunment
    // "-11"   : true, // Air Attunment
    // "5493"  : true, // Water Attunment
    // "41166" : true, // Water Attunment
    // "-10"   : true, // Water Attunment
    // "-9"    : true, // Water Attunment
    // "-8"    : true, // Water Attunment
    // "5492"  : true, // Fire Attunment
    // "43470" : true, // Fire Attunment
    // "-7"    : true, // Fire Attunment
    // "-6"    : true, // Fire Attunment
    // "-5"    : true, // Fire Attunment
    // "44364" : true, // Firebrand - Tome of Justice
    // "68647" : true, // Firebrand - Tome of Justice
    // "41780" : true, // Firebrand - Tome of Resolve
    // "44364" : true, // Firebrand - Tome of Justice
    // "68647" : true, // Firebrand - Tome of Justice
    // "41780" : true, // Firebrand - Tome of Resolve
    // "68648" : true, // Firebrand - Tome of Resolve
    // "42259" : true, // Firebrand - Tome of Courage
    // "68650" : true, // Firebrand - Tome of Courage
    // "28494" : true, // Revenant - Legendary
    // "41123" : true, // Holosmith - Deactivate Photon Forge
    // "42938" : true, // Holosmith - EngagePhoton Forge
    // "62745" : true, // Bladesworn - Unsheathe Gunsaber
    // "62861" : true  // Bladesworn - Sheathe Gunsaber
}
