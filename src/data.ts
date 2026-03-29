import { Pokemon, Trainer, Route } from './types';

export const TYPE_COLORS: Record<string, { bg: string, text: string, border: string }> = {
  NORMAL: { bg: 'bg-[#A8A77A]/10', text: 'text-[#A8A77A]', border: 'border-[#A8A77A]/50' },
  FIRE: { bg: 'bg-[#EE8130]/10', text: 'text-[#EE8130]', border: 'border-[#EE8130]/50' },
  WATER: { bg: 'bg-[#6390F0]/10', text: 'text-[#6390F0]', border: 'border-[#6390F0]/50' },
  ELECTRIC: { bg: 'bg-[#F7D02C]/10', text: 'text-[#F7D02C]', border: 'border-[#F7D02C]/50' },
  GRASS: { bg: 'bg-[#7AC74C]/10', text: 'text-[#7AC74C]', border: 'border-[#7AC74C]/50' },
  ICE: { bg: 'bg-[#96D9D6]/10', text: 'text-[#96D9D6]', border: 'border-[#96D9D6]/50' },
  FIGHTING: { bg: 'bg-[#C22E28]/10', text: 'text-[#C22E28]', border: 'border-[#C22E28]/50' },
  POISON: { bg: 'bg-[#A33EA1]/10', text: 'text-[#A33EA1]', border: 'border-[#A33EA1]/50' },
  GROUND: { bg: 'bg-[#E2BF65]/10', text: 'text-[#E2BF65]', border: 'border-[#E2BF65]/50' },
  FLYING: { bg: 'bg-[#A98FF3]/10', text: 'text-[#A98FF3]', border: 'border-[#A98FF3]/50' },
  PSYCHIC: { bg: 'bg-[#F95587]/10', text: 'text-[#F95587]', border: 'border-[#F95587]/50' },
  BUG: { bg: 'bg-[#A6B91A]/10', text: 'text-[#A6B91A]', border: 'border-[#A6B91A]/50' },
  ROCK: { bg: 'bg-[#B6A136]/10', text: 'text-[#B6A136]', border: 'border-[#B6A136]/50' },
  GHOST: { bg: 'bg-[#735797]/10', text: 'text-[#735797]', border: 'border-[#735797]/50' },
  DRAGON: { bg: 'bg-[#6F35FC]/10', text: 'text-[#6F35FC]', border: 'border-[#6F35FC]/50' },
  STEEL: { bg: 'bg-[#B7B7CE]/10', text: 'text-[#B7B7CE]', border: 'border-[#B7B7CE]/50' },
  FAIRY: { bg: 'bg-[#D685AD]/10', text: 'text-[#D685AD]', border: 'border-[#D685AD]/50' },
  DARK: { bg: 'bg-[#705746]/10', text: 'text-[#705746]', border: 'border-[#705746]/50' },
};

export const POKEMON_DATA: Pokemon[] = [
  {
    id: 1,
    name: "BULBASAUR",
    types: ["GRASS", "POISON"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    moveset: [
      { name: "VINE WHIP", type: "GRASS", category: "PHYSICAL", power: 45, accuracy: 100, level: 7 },
      { name: "RAZOR LEAF", type: "GRASS", category: "PHYSICAL", power: 55, accuracy: 95, level: 13 },
      { name: "SLEEP POWDER", type: "GRASS", category: "STATUS", level: 1, isRelearner: true },
      { name: "GRASS KNOT", type: "GRASS", category: "SPECIAL", power: 0, accuracy: 100, tmNumber: "05" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "GIGA DRAIN", type: "GRASS", category: "SPECIAL", power: 75, accuracy: 100, tmNumber: "10" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
    ]
  },
  {
    id: 2,
    name: "IVYSAUR",
    types: ["GRASS", "POISON"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    moveset: [
      { name: "SEED BOMB", type: "GRASS", category: "PHYSICAL", power: 80, accuracy: 100, level: 20 },
      { name: "SOLAR BEAM", type: "GRASS", category: "SPECIAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
      { name: "GRASS KNOT", type: "GRASS", category: "SPECIAL", power: 0, accuracy: 100, tmNumber: "05" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "GIGA DRAIN", type: "GRASS", category: "SPECIAL", power: 75, accuracy: 100, tmNumber: "10" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
    ]
  },
  {
    id: 3,
    name: "VENUSAUR",
    types: ["GRASS", "POISON"],
    ability: "CHLOROPHYLL",
    abilityDescription: "Boosts the Pokémon's Speed stat in sunshine.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    moveset: [
      { name: "PETAL BLIZZARD", type: "GRASS", category: "PHYSICAL", power: 90, accuracy: 100, level: 32 },
      { name: "SLUDGE BOMB", type: "POISON", category: "SPECIAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
      { name: "GRASS KNOT", type: "GRASS", category: "SPECIAL", power: 0, accuracy: 100, tmNumber: "05" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "GIGA DRAIN", type: "GRASS", category: "SPECIAL", power: 75, accuracy: 100, tmNumber: "10" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
      { name: "EARTHQUAKE", type: "GROUND", category: "PHYSICAL", power: 100, accuracy: 100, tmNumber: "38" },
    ]
  },
  {
    id: 4,
    name: "CHARMANDER",
    types: ["FIRE"],
    ability: "BLAZE",
    abilityDescription: "Powers up Fire-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    moveset: [
      { name: "EMBER", type: "FIRE", category: "SPECIAL", power: 40, accuracy: 100, level: 7 },
      { name: "DRAGON BREATH", type: "DRAGON", category: "SPECIAL", power: 60, accuracy: 100, level: 12 },
      { name: "SUNNY DAY", type: "FIRE", category: "STATUS", tmNumber: "06" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "FLAMETHROWER", type: "FIRE", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "18" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
    ]
  },
  {
    id: 5,
    name: "CHARMELEON",
    types: ["FIRE"],
    ability: "BLAZE",
    abilityDescription: "Powers up Fire-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    moveset: [
      { name: "FLAMETHROWER", type: "FIRE", category: "SPECIAL", power: 90, accuracy: 100, level: 24 },
      { name: "FIRE PUNCH", type: "FIRE", category: "PHYSICAL", power: 75, accuracy: 100, level: 1, isRelearner: true },
      { name: "SUNNY DAY", type: "FIRE", category: "STATUS", tmNumber: "06" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
    ]
  },
  {
    id: 6,
    name: "CHARIZARD",
    types: ["FIRE", "FLYING"],
    ability: "SOLAR POWER",
    abilityDescription: "Boosts the Sp. Atk stat in sunny weather, but HP decreases.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    moveset: [
      { name: "FLARE BLITZ", type: "FIRE", category: "PHYSICAL", power: 120, accuracy: 100, level: 36 },
      { name: "AIR SLASH", type: "FLYING", category: "SPECIAL", power: 75, accuracy: 95, level: 1, isRelearner: true },
      { name: "DRAGON PULSE", type: "DRAGON", category: "SPECIAL", power: 85, accuracy: 100, level: 1, isRelearner: true },
      { name: "SUNNY DAY", type: "FIRE", category: "STATUS", tmNumber: "06" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "FLAMETHROWER", type: "FIRE", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "18" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
      { name: "FLY", type: "FLYING", category: "PHYSICAL", power: 90, accuracy: 95, hmNumber: "05" },
      { name: "DRAGON CLAW", type: "DRAGON", category: "PHYSICAL", power: 80, accuracy: 100, tmNumber: "26" },
    ]
  },
  {
    id: 7,
    name: "SQUIRTLE",
    types: ["WATER"],
    ability: "TORRENT",
    abilityDescription: "Powers up Water-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    moveset: [
      { name: "WATER PULSE", type: "WATER", category: "SPECIAL", power: 60, accuracy: 100, level: 9 },
      { name: "BITE", type: "DARK", category: "PHYSICAL", power: 60, accuracy: 100, level: 12 },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "SCALD", type: "WATER", category: "SPECIAL", power: 80, accuracy: 100, tmNumber: "21" },
      { name: "SURF", type: "WATER", category: "SPECIAL", power: 90, accuracy: 100, hmNumber: "02" },
    ]
  },
  {
    id: 8,
    name: "WARTORTLE",
    types: ["WATER"],
    ability: "TORRENT",
    abilityDescription: "Powers up Water-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    moveset: [
      { name: "AQUA TAIL", type: "WATER", category: "PHYSICAL", power: 90, accuracy: 90, level: 20 },
      { name: "RAPID SPIN", type: "NORMAL", category: "PHYSICAL", power: 50, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 9,
    name: "BLASTOISE",
    types: ["WATER"],
    ability: "MEGA LAUNCHER",
    abilityDescription: "Powers up aura and pulse moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    moveset: [
      { name: "HYDRO PUMP", type: "WATER", category: "SPECIAL", power: 110, accuracy: 80, level: 36 },
      { name: "DARK PULSE", type: "DARK", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "AURA SPHERE", type: "FIGHTING", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "WATER PULSE", type: "WATER", category: "SPECIAL", power: 60, accuracy: 100, tmNumber: "02" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "SCALD", type: "WATER", category: "SPECIAL", power: 80, accuracy: 100, tmNumber: "21" },
      { name: "SURF", type: "WATER", category: "SPECIAL", power: 90, accuracy: 100, hmNumber: "02" },
      { name: "ICE BEAM", type: "ICE", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "07" },
    ]
  },
  {
    id: 387,
    name: "TURTWIG",
    types: ["GRASS"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    moveset: [
      { name: "ABSORB", type: "GRASS", category: "SPECIAL", power: 20, accuracy: 100, level: 1 },
      { name: "RAZOR LEAF", type: "GRASS", category: "PHYSICAL", power: 55, accuracy: 95, level: 13 },
    ]
  },
  {
    id: 388,
    name: "GROTLE",
    types: ["GRASS"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
    moveset: [
      { name: "MEGA DRAIN", type: "GRASS", category: "SPECIAL", power: 40, accuracy: 100, level: 18 },
      { name: "BITE", type: "DARK", category: "PHYSICAL", power: 60, accuracy: 100, level: 22 },
    ]
  },
  {
    id: 389,
    name: "TORTERRA",
    types: ["GRASS", "GROUND"],
    ability: "SHELL ARMOR",
    abilityDescription: "A hard shell protects the Pokémon from critical hits.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    moveset: [
      { name: "EARTHQUAKE", type: "GROUND", category: "PHYSICAL", power: 100, accuracy: 100, level: 32 },
      { name: "WOOD HAMMER", type: "GRASS", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
      { name: "GRASS KNOT", type: "GRASS", category: "SPECIAL", power: 0, accuracy: 100, tmNumber: "05" },
      { name: "GIGA DRAIN", type: "GRASS", category: "SPECIAL", power: 75, accuracy: 100, tmNumber: "10" },
      { name: "EARTHQUAKE", type: "GROUND", category: "PHYSICAL", power: 100, accuracy: 100, tmNumber: "38" },
      { name: "STRENGTH", type: "NORMAL", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "06" },
    ]
  },
  {
    id: 13,
    name: "WEEDLE",
    types: ["BUG", "POISON"],
    ability: "SHIELD DUST",
    abilityDescription: "Blocks the additional effects of attacks taken.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    moveset: [
      { name: "POISON STING", type: "POISON", category: "PHYSICAL", power: 15, accuracy: 100, level: 1 },
    ]
  },
  {
    id: 14,
    name: "KAKUNA",
    types: ["BUG", "POISON"],
    ability: "SHED SKIN",
    abilityDescription: "The Pokémon may heal its own status conditions.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    moveset: [
      { name: "HARDEN", type: "NORMAL", category: "STATUS", level: 7 },
    ]
  },
  {
    id: 15,
    name: "BEEDRILL",
    types: ["BUG", "POISON"],
    ability: "ADAPTABILITY",
    abilityDescription: "Powers up moves of the same type as the Pokémon.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    moveset: [
      { name: "TWINEEDLE", type: "BUG", category: "PHYSICAL", power: 25, accuracy: 100, level: 20 },
      { name: "POISON JAB", type: "POISON", category: "PHYSICAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "DRILL RUN", type: "GROUND", category: "PHYSICAL", power: 80, accuracy: 95, level: 1, isRelearner: true },
      { name: "AERIAL ACE", type: "FLYING", category: "PHYSICAL", power: 60, accuracy: 100, tmNumber: "45" },
      { name: "STEEL WING", type: "STEEL", category: "PHYSICAL", power: 70, accuracy: 90, tmNumber: "24" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
    ]
  },
  {
    id: 940,
    name: "WATTREL",
    types: ["ELECTRIC", "FLYING"],
    ability: "WIND POWER",
    abilityDescription: "The Pokémon becomes charged when it is hit by a wind move.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png",
    moveset: [
      { name: "THUNDER SHOCK", type: "ELECTRIC", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "PLUCK", type: "FLYING", category: "PHYSICAL", power: 60, accuracy: 100, level: 7 },
    ]
  },
  {
    id: 941,
    name: "KILOWATTREL",
    types: ["ELECTRIC", "FLYING"],
    ability: "COMPETITIVE",
    abilityDescription: "Boosts the Sp. Atk stat sharply when a stat is lowered.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png",
    moveset: [
      { name: "DISCHARGE", type: "ELECTRIC", category: "SPECIAL", power: 80, accuracy: 100, level: 25 },
      { name: "HURRICANE", type: "FLYING", category: "SPECIAL", power: 110, accuracy: 70, level: 1, isRelearner: true },
    ]
  },
  {
    id: 935,
    name: "CHARCADET",
    types: ["FIRE"],
    ability: "FLASH FIRE",
    abilityDescription: "Powers up the Pokémon's Fire-type moves if it's hit by one.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png",
    moveset: [
      { name: "EMBER", type: "FIRE", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "FLAME CHARGE", type: "FIRE", category: "PHYSICAL", power: 50, accuracy: 100, level: 12 },
    ]
  },
  {
    id: 410,
    name: "SHIELDON",
    types: ["ROCK", "STEEL"],
    ability: "STURDY",
    abilityDescription: "It cannot be knocked out with one hit.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png",
    moveset: [
      { name: "TACKLE", type: "NORMAL", category: "PHYSICAL", power: 40, accuracy: 100, level: 1 },
      { name: "IRON DEFENSE", type: "STEEL", category: "STATUS", level: 15 },
    ]
  },
  {
    id: 411,
    name: "BASTIODON",
    types: ["ROCK", "STEEL"],
    ability: "SOUNDPROOF",
    abilityDescription: "Gives full immunity to all sound-based moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png",
    moveset: [
      { name: "IRON HEAD", type: "STEEL", category: "PHYSICAL", power: 80, accuracy: 100, level: 30 },
      { name: "METAL BURST", type: "STEEL", category: "PHYSICAL", power: 0, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 407,
    name: "ROSERADE",
    types: ["GRASS", "POISON"],
    ability: "TECHNICIAN",
    abilityDescription: "Powers up the Pokémon's weaker moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png",
    moveset: [
      { name: "MAGICAL LEAF", type: "GRASS", category: "SPECIAL", power: 60, accuracy: 100, level: 1 },
      { name: "SLUDGE BOMB", type: "POISON", category: "SPECIAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
      { name: "DAZZLING GLEAM", type: "FAIRY", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "GRASS KNOT", type: "GRASS", category: "SPECIAL", power: 0, accuracy: 100, tmNumber: "05" },
      { name: "GIGA DRAIN", type: "GRASS", category: "SPECIAL", power: 75, accuracy: 100, tmNumber: "10" },
      { name: "TOXIC", type: "POISON", category: "STATUS", tmNumber: "28" },
      { name: "SLUDGE BOMB", type: "POISON", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "43" },
    ]
  },
  {
    id: 468,
    name: "TOGEKISS",
    types: ["FAIRY", "FLYING"],
    ability: "SERENE GRACE",
    abilityDescription: "Boosts the likelihood of additional effects occurring.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png",
    moveset: [
      { name: "AIR SLASH", type: "FLYING", category: "SPECIAL", power: 75, accuracy: 95, level: 1 },
      { name: "AURA SPHERE", type: "FIGHTING", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "DAZZLING GLEAM", type: "FAIRY", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 757,
    name: "SALANDIT",
    types: ["POISON", "FIRE"],
    ability: "CORROSION",
    abilityDescription: "The Pokémon can poison the target even if it's a Steel or Poison type.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png",
    moveset: [
      { name: "EMBER", type: "FIRE", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "DRAGON RAGE", type: "DRAGON", category: "SPECIAL", power: 0, accuracy: 100, level: 13 },
    ]
  },
  {
    id: 758,
    name: "SALAZZLE",
    types: ["POISON", "FIRE"],
    ability: "OBLIVIOUS",
    abilityDescription: "The Pokémon is oblivious, and that keeps it from being infatuated or falling under the Taunt move's effect.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png",
    moveset: [
      { name: "FLAMETHROWER", type: "FIRE", category: "SPECIAL", power: 90, accuracy: 100, level: 33 },
      { name: "SLUDGE WAVE", type: "POISON", category: "SPECIAL", power: 95, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 25,
    name: "PIKACHU",
    types: ["ELECTRIC"],
    ability: "STATIC",
    abilityDescription: "The Pokémon is charged with static electricity.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    moveset: [
      { name: "THUNDER SHOCK", type: "ELECTRIC", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "THUNDERBOLT", type: "ELECTRIC", category: "SPECIAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
      { name: "THUNDERBOLT", type: "ELECTRIC", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "37" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "THUNDER", type: "ELECTRIC", category: "SPECIAL", power: 110, accuracy: 70, tmNumber: "13" },
    ]
  },
  {
    id: 26,
    name: "RAICHU",
    types: ["ELECTRIC"],
    ability: "SURGE SURFER",
    abilityDescription: "Doubles the Pokémon's Speed stat on Electric Terrain.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    moveset: [
      { name: "THUNDER", type: "ELECTRIC", category: "SPECIAL", power: 110, accuracy: 70, level: 1 },
      { name: "VOLT TACKLE", type: "ELECTRIC", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
      { name: "THUNDERBOLT", type: "ELECTRIC", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "37" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "THUNDER", type: "ELECTRIC", category: "SPECIAL", power: 110, accuracy: 70, tmNumber: "13" },
    ]
  },
  {
    id: 708,
    name: "PHANTUMP",
    types: ["GHOST", "GRASS"],
    ability: "HARVEST",
    abilityDescription: "May create another Berry after one is used.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png",
    moveset: [
      { name: "ASTONISH", type: "GHOST", category: "PHYSICAL", power: 30, accuracy: 100, level: 1 },
      { name: "LEECH SEED", type: "GRASS", category: "STATUS", level: 1 },
    ]
  },
  {
    id: 709,
    name: "TREVENANT",
    types: ["GHOST", "GRASS"],
    ability: "NATURAL CURE",
    abilityDescription: "All status conditions heal when the Pokémon withdraws from battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png",
    moveset: [
      { name: "SHADOW CLAW", type: "GHOST", category: "PHYSICAL", power: 70, accuracy: 100, level: 1 },
      { name: "WOOD HAMMER", type: "GRASS", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 725,
    name: "LITTEN",
    types: ["FIRE"],
    ability: "BLAZE",
    abilityDescription: "Powers up Fire-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png",
    moveset: [
      { name: "EMBER", type: "FIRE", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "FIRE FANG", type: "FIRE", category: "PHYSICAL", power: 65, accuracy: 95, level: 15 },
    ]
  },
  {
    id: 726,
    name: "TORRACAT",
    types: ["FIRE"],
    ability: "BLAZE",
    abilityDescription: "Powers up Fire-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png",
    moveset: [
      { name: "FLAME CHARGE", type: "FIRE", category: "PHYSICAL", power: 50, accuracy: 100, level: 17 },
      { name: "FLARE BLITZ", type: "FIRE", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 727,
    name: "INCINEROAR",
    types: ["FIRE", "DARK"],
    ability: "INTIMIDATE",
    abilityDescription: "The Pokémon intimidates opposing Pokémon upon entering battle, lowering their Attack stat.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png",
    moveset: [
      { name: "DARKEST LARIAT", type: "DARK", category: "PHYSICAL", power: 85, accuracy: 100, level: 34 },
      { name: "CROSS CHOP", type: "FIGHTING", category: "PHYSICAL", power: 100, accuracy: 80, level: 1, isRelearner: true },
    ]
  },
  {
    id: 728,
    name: "POPPLIO",
    types: ["WATER"],
    ability: "TORRENT",
    abilityDescription: "Powers up Water-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png",
    moveset: [
      { name: "WATER GUN", type: "WATER", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "ICY WIND", type: "ICE", category: "SPECIAL", power: 55, accuracy: 95, level: 15 },
    ]
  },
  {
    id: 729,
    name: "BRIONNE",
    types: ["WATER"],
    ability: "TORRENT",
    abilityDescription: "Powers up Water-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png",
    moveset: [
      { name: "BUBBLE BEAM", type: "WATER", category: "SPECIAL", power: 65, accuracy: 100, level: 17 },
      { name: "MOONBLAST", type: "FAIRY", category: "SPECIAL", power: 95, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 730,
    name: "PRIMARINA",
    types: ["WATER", "FAIRY"],
    ability: "LIQUID VOICE",
    abilityDescription: "All sound-based moves become Water-type moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
    moveset: [
      { name: "SPARKLING ARIA", type: "WATER", category: "SPECIAL", power: 90, accuracy: 100, level: 34 },
      { name: "HYDRO PUMP", type: "WATER", category: "SPECIAL", power: 110, accuracy: 80, level: 1, isRelearner: true },
    ]
  },
  {
    id: 35,
    name: "CLEFAIRY",
    types: ["FAIRY"],
    ability: "MAGIC GUARD",
    abilityDescription: "The Pokémon only takes damage from attacks.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    moveset: [
      { name: "DISARMING VOICE", type: "FAIRY", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "METRONOME", type: "NORMAL", category: "STATUS", level: 12 },
    ]
  },
  {
    id: 36,
    name: "CLEFABLE",
    types: ["FAIRY"],
    ability: "UNAWARE",
    abilityDescription: "When attacking, the Pokémon ignores the target Pokémon's stat changes.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    moveset: [
      { name: "MOONBLAST", type: "FAIRY", category: "SPECIAL", power: 95, accuracy: 100, level: 1 },
      { name: "SOFT-BOILED", type: "NORMAL", category: "STATUS", level: 1, isRelearner: true },
    ]
  },
  {
    id: 37,
    name: "VULPIX",
    types: ["FIRE"],
    ability: "FLASH FIRE",
    abilityDescription: "Powers up the Pokémon's Fire-type moves if it's hit by one.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    moveset: [
      { name: "EMBER", type: "FIRE", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "WILL-O-WISP", type: "FIRE", category: "STATUS", level: 12 },
    ]
  },
  {
    id: 38,
    name: "NINETALES",
    types: ["FIRE"],
    ability: "DROUGHT",
    abilityDescription: "Turns the sunlight harsh when the Pokémon enters a battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    moveset: [
      { name: "FLAMETHROWER", type: "FIRE", category: "SPECIAL", power: 90, accuracy: 100, level: 1 },
      { name: "SOLAR BEAM", type: "GRASS", category: "SPECIAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 704,
    name: "GOOMY",
    types: ["DRAGON"],
    ability: "SAP SIPPER",
    abilityDescription: "Boosts the Attack stat if hit by a Grass-type move.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png",
    moveset: [
      { name: "ABSORB", type: "GRASS", category: "SPECIAL", power: 20, accuracy: 100, level: 1 },
      { name: "DRAGON BREATH", type: "DRAGON", category: "SPECIAL", power: 60, accuracy: 100, level: 18 },
    ]
  },
  {
    id: 160,
    name: "FERALIGATR",
    types: ["WATER"],
    ability: "SHEER FORCE",
    abilityDescription: "Removes additional effects to increase the power of moves when attacking.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
    moveset: [
      { name: "LIQUIDATION", type: "WATER", category: "PHYSICAL", power: 85, accuracy: 100, level: 30 },
      { name: "CRUNCH", type: "DARK", category: "PHYSICAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "DRAGON DANCE", type: "DRAGON", category: "STATUS", level: 1, isRelearner: true },
      { name: "SURF", type: "WATER", category: "SPECIAL", power: 90, accuracy: 100, hmNumber: "02" },
      { name: "WATERFALL", type: "WATER", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "04" },
      { name: "ICE BEAM", type: "ICE", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "07" },
    ]
  },
  {
    id: 714,
    name: "NOIBAT",
    types: ["FLYING", "DRAGON"],
    ability: "INFILTRATOR",
    abilityDescription: "Passes through the opposing Pokémon's barrier, such as Substitute and Light Screen, which allows it to inflict damage.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png",
    moveset: [
      { name: "GUST", type: "FLYING", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "AIR CUTTER", type: "FLYING", category: "SPECIAL", power: 60, accuracy: 95, level: 16 },
    ]
  },
  {
    id: 715,
    name: "NOIVERN",
    types: ["FLYING", "DRAGON"],
    ability: "BOOMBURST",
    abilityDescription: "The Pokémon attacks everything around it with the destructive power of a terrible, explosive sound.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png",
    moveset: [
      { name: "DRAGON PULSE", type: "DRAGON", category: "SPECIAL", power: 85, accuracy: 100, level: 48 },
      { name: "BOOMBURST", type: "NORMAL", category: "SPECIAL", power: 140, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 650,
    name: "CHESPIN",
    types: ["GRASS"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
    moveset: [
      { name: "VINE WHIP", type: "GRASS", category: "PHYSICAL", power: 45, accuracy: 100, level: 1 },
      { name: "ROLLOUT", type: "ROCK", category: "PHYSICAL", power: 30, accuracy: 90, level: 13 },
    ]
  },
  {
    id: 651,
    name: "QUILLADIN",
    types: ["GRASS"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png",
    moveset: [
      { name: "NEEDLE ARM", type: "GRASS", category: "PHYSICAL", power: 60, accuracy: 100, level: 16 },
      { name: "BITE", type: "DARK", category: "PHYSICAL", power: 60, accuracy: 100, level: 20 },
    ]
  },
  {
    id: 652,
    name: "CHESNAUGHT",
    types: ["GRASS", "FIGHTING"],
    ability: "BULLETPROOF",
    abilityDescription: "Protects the Pokémon from some ball and bomb moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png",
    moveset: [
      { name: "SPIKY SHIELD", type: "GRASS", category: "STATUS", level: 36 },
      { name: "HAMMER ARM", type: "FIGHTING", category: "PHYSICAL", power: 100, accuracy: 90, level: 1, isRelearner: true },
    ]
  },
  {
    id: 443,
    name: "GIBLE",
    types: ["DRAGON", "GROUND"],
    ability: "ROUGH SKIN",
    abilityDescription: "Inflicts damage to the attacker on contact.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png",
    moveset: [
      { name: "SAND TOMB", type: "GROUND", category: "PHYSICAL", power: 35, accuracy: 85, level: 1 },
      { name: "DRAGON BREATH", type: "DRAGON", category: "SPECIAL", power: 60, accuracy: 100, level: 15 },
    ]
  },
  {
    id: 444,
    name: "GABITE",
    types: ["DRAGON", "GROUND"],
    ability: "ROUGH SKIN",
    abilityDescription: "Inflicts damage to the attacker on contact.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png",
    moveset: [
      { name: "SLASH", type: "NORMAL", category: "PHYSICAL", power: 70, accuracy: 100, level: 24 },
      { name: "DRAGON CLAW", type: "DRAGON", category: "PHYSICAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 445,
    name: "GARCHOMP",
    types: ["DRAGON", "GROUND"],
    ability: "ROUGH SKIN",
    abilityDescription: "Inflicts damage to the attacker on contact.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
    moveset: [
      { name: "EARTHQUAKE", type: "GROUND", category: "PHYSICAL", power: 100, accuracy: 100, level: 48 },
      { name: "OUTRAGE", type: "DRAGON", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
      { name: "EARTHQUAKE", type: "GROUND", category: "PHYSICAL", power: 100, accuracy: 100, tmNumber: "38" },
      { name: "DRAGON CLAW", type: "DRAGON", category: "PHYSICAL", power: 80, accuracy: 100, tmNumber: "26" },
      { name: "PROTECT", type: "NORMAL", category: "STATUS", tmNumber: "09" },
      { name: "X-CUTTER", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, hmNumber: "01" },
    ]
  },
  {
    id: 475,
    name: "GALLADE",
    types: ["PSYCHIC", "FIGHTING"],
    ability: "SHARPNESS",
    abilityDescription: "Powers up slicing moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png",
    moveset: [
      { name: "PSYCHO CUT", type: "PSYCHIC", category: "PHYSICAL", power: 70, accuracy: 100, level: 1 },
      { name: "SACRED SWORD", type: "FIGHTING", category: "PHYSICAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
      { name: "LEAF BLADE", type: "GRASS", category: "PHYSICAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 722,
    name: "ROWLET",
    types: ["GRASS", "FLYING"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
    moveset: [
      { name: "LEAFAGE", type: "GRASS", category: "PHYSICAL", power: 40, accuracy: 100, level: 1 },
      { name: "PECK", type: "FLYING", category: "PHYSICAL", power: 35, accuracy: 100, level: 8 },
    ]
  },
  {
    id: 723,
    name: "DARTRIX",
    types: ["GRASS", "FLYING"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png",
    moveset: [
      { name: "RAZOR LEAF", type: "GRASS", category: "PHYSICAL", power: 55, accuracy: 95, level: 17 },
      { name: "PLUCK", type: "FLYING", category: "PHYSICAL", power: 60, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 52,
    name: "MEOWTH",
    types: ["NORMAL"],
    ability: "TECHNICIAN",
    abilityDescription: "Powers up the Pokémon's weaker moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    moveset: [
      { name: "FAKE OUT", type: "NORMAL", category: "PHYSICAL", power: 40, accuracy: 100, level: 1 },
      { name: "BITE", type: "DARK", category: "PHYSICAL", power: 60, accuracy: 100, level: 12 },
    ]
  },
  {
    id: 53,
    name: "PERSIAN",
    types: ["NORMAL"],
    ability: "TECHNICIAN",
    abilityDescription: "Powers up the Pokémon's weaker moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    moveset: [
      { name: "SLASH", type: "NORMAL", category: "PHYSICAL", power: 70, accuracy: 100, level: 30 },
      { name: "POWER GEM", type: "ROCK", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 965,
    name: "VAROOM",
    types: ["STEEL", "POISON"],
    ability: "OVERCOAT",
    abilityDescription: "Protects the Pokémon from the weather and powder.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png",
    moveset: [
      { name: "POISON GAS", type: "POISON", category: "STATUS", level: 1 },
      { name: "GYRO BALL", type: "STEEL", category: "PHYSICAL", power: 0, accuracy: 100, level: 13 },
    ]
  },
  {
    id: 966,
    name: "REVAVROOM",
    types: ["STEEL", "POISON"],
    ability: "FILTER",
    abilityDescription: "Reduces damage from super-effective attacks.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png",
    moveset: [
      { name: "IRON HEAD", type: "STEEL", category: "PHYSICAL", power: 80, accuracy: 100, level: 40 },
      { name: "GUNK SHOT", type: "POISON", category: "PHYSICAL", power: 120, accuracy: 80, level: 1, isRelearner: true },
    ]
  },
  {
    id: 801,
    name: "MAGEARNA",
    types: ["STEEL", "FAIRY"],
    ability: "SOUL-HEART",
    abilityDescription: "Boosts its Sp. Atk stat every time a Pokémon faints.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png",
    moveset: [
      { name: "FLEUR CANNON", type: "FAIRY", category: "SPECIAL", power: 130, accuracy: 90, level: 1 },
      { name: "FLASH CANNON", type: "STEEL", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 802,
    name: "MARSHADOW",
    types: ["FIGHTING", "GHOST"],
    ability: "TECHNICIAN",
    abilityDescription: "Powers up the Pokémon's weaker moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
    moveset: [
      { name: "SPECTRAL THIEF", type: "GHOST", category: "PHYSICAL", power: 90, accuracy: 100, level: 1 },
      { name: "CLOSE COMBAT", type: "FIGHTING", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 58,
    name: "GROWLITHE",
    types: ["FIRE"],
    ability: "INTIMIDATE",
    abilityDescription: "Lowers the opposing Pokémon's Attack stat.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    moveset: [
      { name: "EMBER", type: "FIRE", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "FLAME WHEEL", type: "FIRE", category: "PHYSICAL", power: 60, accuracy: 100, level: 12 },
    ]
  },
  {
    id: 59,
    name: "ARCANINE",
    types: ["FIRE"],
    ability: "INTIMIDATE",
    abilityDescription: "Lowers the opposing Pokémon's Attack stat.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    moveset: [
      { name: "EXTREMESPEED", type: "NORMAL", category: "PHYSICAL", power: 80, accuracy: 100, level: 1 },
      { name: "FLARE BLITZ", type: "FIRE", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
      { name: "FLAMETHROWER", type: "FIRE", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "18" },
      { name: "FIRE BLAST", type: "FIRE", category: "SPECIAL", power: 110, accuracy: 85, tmNumber: "44" },
      { name: "SUNNY DAY", type: "FIRE", category: "STATUS", tmNumber: "06" },
    ]
  },
  {
    id: 816,
    name: "SOBBLE",
    types: ["WATER"],
    ability: "TORRENT",
    abilityDescription: "Powers up Water-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png",
    moveset: [
      { name: "WATER GUN", type: "WATER", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "BIND", type: "NORMAL", category: "PHYSICAL", power: 15, accuracy: 85, level: 12 },
    ]
  },
  {
    id: 817,
    name: "DRIZZILE",
    types: ["WATER"],
    ability: "TORRENT",
    abilityDescription: "Powers up Water-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png",
    moveset: [
      { name: "WATER PULSE", type: "WATER", category: "SPECIAL", power: 60, accuracy: 100, level: 16 },
      { name: "SUCKER PUNCH", type: "DARK", category: "PHYSICAL", power: 70, accuracy: 100, level: 24 },
    ]
  },
  {
    id: 818,
    name: "INTELEON",
    types: ["WATER"],
    ability: "SNIPER",
    abilityDescription: "Powers up moves if they become critical hits.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png",
    moveset: [
      { name: "SNIPE SHOT", type: "WATER", category: "SPECIAL", power: 80, accuracy: 100, level: 35 },
      { name: "AIR SLASH", type: "FLYING", category: "SPECIAL", power: 75, accuracy: 95, level: 1, isRelearner: true },
    ]
  },
  {
    id: 63,
    name: "ABRA",
    types: ["PSYCHIC"],
    ability: "SYNCHRONIZE",
    abilityDescription: "Passes a burn, poison, or paralysis to the foe.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    moveset: [
      { name: "TELEPORT", type: "PSYCHIC", category: "STATUS", level: 1 },
    ]
  },
  {
    id: 64,
    name: "KADABRA",
    types: ["PSYCHIC"],
    ability: "SYNCHRONIZE",
    abilityDescription: "Passes a burn, poison, or paralysis to the foe.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    moveset: [
      { name: "CONFUSION", type: "PSYCHIC", category: "SPECIAL", power: 50, accuracy: 100, level: 16 },
      { name: "PSYBEAM", type: "PSYCHIC", category: "SPECIAL", power: 65, accuracy: 100, level: 21 },
    ]
  },
  {
    id: 65,
    name: "ALAKAZAM",
    types: ["PSYCHIC"],
    ability: "MAGIC GUARD",
    abilityDescription: "The Pokémon only takes damage from attacks.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    moveset: [
      { name: "PSYCHIC", type: "PSYCHIC", category: "SPECIAL", power: 90, accuracy: 100, level: 1 },
      { name: "DAZZLING GLEAM", type: "FAIRY", category: "SPECIAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "PSYCHIC", type: "PSYCHIC", category: "SPECIAL", power: 90, accuracy: 100, tmNumber: "15" },
      { name: "CALM MIND", type: "PSYCHIC", category: "STATUS", tmNumber: "27" },
      { name: "SHADOW BALL", type: "GHOST", category: "SPECIAL", power: 80, accuracy: 100, tmNumber: "40" },
    ]
  },
  {
    id: 532,
    name: "TIMBURR",
    types: ["FIGHTING"],
    ability: "GUTS",
    abilityDescription: "Boosts the Attack stat if has a status condition.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png",
    moveset: [
      { name: "POUND", type: "NORMAL", category: "PHYSICAL", power: 40, accuracy: 100, level: 1 },
      { name: "LOW KICK", type: "FIGHTING", category: "PHYSICAL", power: 0, accuracy: 100, level: 12 },
    ]
  },
  {
    id: 533,
    name: "GURDURR",
    types: ["FIGHTING"],
    ability: "GUTS",
    abilityDescription: "Boosts the Attack stat if has a status condition.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png",
    moveset: [
      { name: "WAKE-UP SLAP", type: "FIGHTING", category: "PHYSICAL", power: 70, accuracy: 100, level: 25 },
      { name: "DYNAMIC PUNCH", type: "FIGHTING", category: "PHYSICAL", power: 100, accuracy: 50, level: 1, isRelearner: true },
    ]
  },
  {
    id: 534,
    name: "CONKELDURR",
    types: ["FIGHTING"],
    ability: "IRON FIST",
    abilityDescription: "Powers up punching moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png",
    moveset: [
      { name: "HAMMER ARM", type: "FIGHTING", category: "PHYSICAL", power: 100, accuracy: 90, level: 1 },
      { name: "MACH PUNCH", type: "FIGHTING", category: "PHYSICAL", power: 40, accuracy: 100, level: 1, isRelearner: true },
      { name: "DRAIN PUNCH", type: "FIGHTING", category: "PHYSICAL", power: 75, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 810,
    name: "GROOKEY",
    types: ["GRASS"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png",
    moveset: [
      { name: "BRANCH POKE", type: "GRASS", category: "PHYSICAL", power: 40, accuracy: 100, level: 1 },
      { name: "RAZOR LEAF", type: "GRASS", category: "PHYSICAL", power: 55, accuracy: 95, level: 12 },
    ]
  },
  {
    id: 811,
    name: "THWACKEY",
    types: ["GRASS"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png",
    moveset: [
      { name: "DOUBLE HIT", type: "NORMAL", category: "PHYSICAL", power: 35, accuracy: 90, level: 16 },
      { name: "SLAM", type: "NORMAL", category: "PHYSICAL", power: 80, accuracy: 75, level: 24 },
    ]
  },
  {
    id: 812,
    name: "RILLABOOM",
    types: ["GRASS"],
    ability: "GRASSY SURGE",
    abilityDescription: "Turns the ground into Grassy Terrain when the Pokémon enters a battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png",
    moveset: [
      { name: "DRUM BEATING", type: "GRASS", category: "PHYSICAL", power: 80, accuracy: 100, level: 35 },
      { name: "WOOD HAMMER", type: "GRASS", category: "PHYSICAL", power: 120, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 592,
    name: "FRILLISH",
    types: ["WATER", "GHOST"],
    ability: "WATER ABSORB",
    abilityDescription: "Restores HP if hit by a Water-type move.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png",
    moveset: [
      { name: "WATER PULSE", type: "WATER", category: "SPECIAL", power: 60, accuracy: 100, level: 1 },
      { name: "NIGHT SHADE", type: "GHOST", category: "SPECIAL", power: 0, accuracy: 100, level: 12 },
    ]
  },
  {
    id: 593,
    name: "JELLICENT",
    types: ["WATER", "GHOST"],
    ability: "WATER ABSORB",
    abilityDescription: "Restores HP if hit by a Water-type move.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png",
    moveset: [
      { name: "HEX", type: "GHOST", category: "SPECIAL", power: 65, accuracy: 100, level: 1 },
      { name: "HYDRO PUMP", type: "WATER", category: "SPECIAL", power: 110, accuracy: 80, level: 1, isRelearner: true },
    ]
  },
  {
    id: 932,
    name: "NACLI",
    types: ["ROCK"],
    ability: "PURIFYING SALT",
    abilityDescription: "Protects the Pokémon from status conditions and halves damage from Ghost-type moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png",
    moveset: [
      { name: "ROCK THROW", type: "ROCK", category: "PHYSICAL", power: 50, accuracy: 90, level: 1 },
      { name: "SALT CURE", type: "ROCK", category: "PHYSICAL", power: 40, accuracy: 100, level: 13 },
    ]
  },
  {
    id: 933,
    name: "NACLSTACK",
    types: ["ROCK"],
    ability: "PURIFYING SALT",
    abilityDescription: "Protects the Pokémon from status conditions and halves damage from Ghost-type moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png",
    moveset: [
      { name: "ROCK SLIDE", type: "ROCK", category: "PHYSICAL", power: 75, accuracy: 90, level: 24 },
      { name: "IRON DEFENSE", type: "STEEL", category: "STATUS", level: 1, isRelearner: true },
    ]
  },
  {
    id: 934,
    name: "GARGANACL",
    types: ["ROCK"],
    ability: "PURIFYING SALT",
    abilityDescription: "Protects the Pokémon from status conditions and halves damage from Ghost-type moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png",
    moveset: [
      { name: "HAMMER ARM", type: "FIGHTING", category: "PHYSICAL", power: 100, accuracy: 90, level: 38 },
      { name: "RECOVER", type: "NORMAL", category: "STATUS", level: 1, isRelearner: true },
    ]
  },
  {
    id: 619,
    name: "MIENFOO",
    types: ["FIGHTING"],
    ability: "REGENERATOR",
    abilityDescription: "Restores a little HP when withdrawn from battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png",
    moveset: [
      { name: "POUND", type: "NORMAL", category: "PHYSICAL", power: 40, accuracy: 100, level: 1 },
      { name: "FORCE PALM", type: "FIGHTING", category: "PHYSICAL", power: 60, accuracy: 100, level: 13 },
    ]
  },
  {
    id: 620,
    name: "MIENSHAO",
    types: ["FIGHTING"],
    ability: "REGENERATOR",
    abilityDescription: "Restores a little HP when withdrawn from battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png",
    moveset: [
      { name: "HIGH JUMP KICK", type: "FIGHTING", category: "PHYSICAL", power: 130, accuracy: 90, level: 50 },
      { name: "U-TURN", type: "BUG", category: "PHYSICAL", power: 70, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 79,
    name: "SLOWPOKE",
    types: ["WATER", "PSYCHIC"],
    ability: "OBLIVIOUS",
    abilityDescription: "The Pokémon is oblivious, and that keeps it from being infatuated or falling under the Taunt move's effect.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    moveset: [
      { name: "WATER GUN", type: "WATER", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "CONFUSION", type: "PSYCHIC", category: "SPECIAL", power: 50, accuracy: 100, level: 9 },
    ]
  },
  {
    id: 80,
    name: "SLOWBRO",
    types: ["WATER", "PSYCHIC"],
    ability: "REGENERATOR",
    abilityDescription: "Restores a little HP when withdrawn from battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    moveset: [
      { name: "SURF", type: "WATER", category: "SPECIAL", power: 90, accuracy: 100, level: 1 },
      { name: "PSYCHIC", type: "PSYCHIC", category: "SPECIAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 81,
    name: "MAGNEMITE",
    types: ["ELECTRIC", "STEEL"],
    ability: "STURDY",
    abilityDescription: "It cannot be knocked out with one hit.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    moveset: [
      { name: "THUNDER SHOCK", type: "ELECTRIC", category: "SPECIAL", power: 40, accuracy: 100, level: 1 },
      { name: "SONIC BOOM", type: "NORMAL", category: "SPECIAL", power: 0, accuracy: 90, level: 11 },
    ]
  },
];

export const TRAINER_DATA: Trainer[] = [
  {
    id: "01",
    name: "Roxanne",
    specialty: "ROCK SPECIALIST",
    level: 16,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10041.png", // Using a placeholder or generic trainer image if possible, but I'll stick to what was there if it worked. Actually the previous URL was quite long.
    typeIconUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/adventure-result/rock.png",
    pokemon: [
      { 
        name: "Carbink", 
        level: 15, 
        ability: "CLEAR BODY", 
        heldItem: "APICOT BERRY", 
        moves: ["MAGIC COAT", "BATON PASS", "EXPLOSION", "LIGHT SCREEN"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png"
      },
      { 
        name: "Relicanth", 
        level: 16, 
        ability: "ROCK HEAD", 
        heldItem: "CHOICE BAND", 
        moves: ["BULLDOZE", "AQUA JET", "ROCK TOMB", "DOUBLE-EDGE"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
      },
      { 
        name: "Amaura", 
        level: 16, 
        ability: "REFRIGERATE", 
        heldItem: "GANLON BERRY", 
        moves: ["THUNDER WAVE", "MUD SHOT", "ANCIENT POWER", "ICY WIND"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png"
      },
      { 
        name: "Shieldon", 
        level: 16, 
        ability: "STURDY", 
        heldItem: "BERRY JUICE", 
        moves: ["METAL SOUND", "ROCK BLAST", "PROTECT", "TOXIC"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
      },
      { 
        name: "Lycanroc", 
        level: 16, 
        isAce: true,
        ability: "TOUGH CLAWS", 
        heldItem: "SITRUS BERRY", 
        moves: ["FIRE FANG", "QUICK ATTACK", "SWORDS DANCE", "ROCK TOMB"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
      }
    ]
  },
  {
    id: "02",
    name: "Brawly",
    specialty: "FIGHT SPECIALIST",
    level: 28,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10042.png",
    typeIconUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/adventure-result/fighting.png",
    pokemon: [
      { 
        name: "Machop", 
        level: 24, 
        ability: "GUTS", 
        moves: ["KARATE CHOP", "LOW KICK", "FORESIGHT", "SEISMIC TOSS"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
      },
      { 
        name: "Makuhita", 
        level: 24, 
        ability: "THICK FAT", 
        moves: ["ARM THRUST", "FAKE OUT", "WHIRLWIND", "KNOCK OFF"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
      },
      { 
        name: "Meditite", 
        level: 25, 
        ability: "PURE POWER", 
        moves: ["CONFUSION", "DETECT", "HIDDEN POWER", "MIND READER"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
      },
      { 
        name: "Combusken", 
        level: 25, 
        ability: "SPEED BOOST", 
        moves: ["DOUBLE KICK", "PECK", "SAND ATTACK", "BULK UP"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
      },
      { 
        name: "Heracross", 
        level: 26, 
        ability: "GUTS", 
        moves: ["BRICK BREAK", "TAKE DOWN", "COUNTER", "ENDURE"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
      },
      { 
        name: "Lucario", 
        level: 28, 
        isAce: true, 
        ability: "INNER FOCUS", 
        moves: ["AURA SPHERE", "METAL CLAW", "QUICK ATTACK", "CALM MIND"],
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
      }
    ]
  }
];

export const ROUTE_DATA: Route[] = [
  {
    id: "101",
    name: "Route 101",
    description: "Lush Grassland",
    levelRange: "5-8",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTy7cfqlKM-2u8b3yLYg9do2QzVGNS58qyXsE6e0jPFP-bvv_tP6YYwGgLyF-teFDpIU0VpAORMhDEHog2GXQyIjNx8Sryn4u-iWBl7XQmW110-cTr6ujOjzlfetSSTWpaJKoV5-Yyubpp2kWePw5BDbdB_85TYIzC_ou6atG5d9CPWDa2f3kzUBlPze_Io1nwgwJmYsYKVDuTPp3jJ0X43NestT6VowbwvI9agz2coqzvzE0NDyhxMWd0m7Q3eliybuem1B7fcg",
    encounters: [
      { pokemonName: "Poochyena", method: "Tall Grass", rarity: "45%", type: "Dark", rarityLabel: "Common" },
      { pokemonName: "Zigzagoon", method: "Tall Grass", rarity: "45%", type: "Normal", rarityLabel: "Common" },
      { pokemonName: "Wurmple", method: "Tall Grass", rarity: "10%", type: "Bug", rarityLabel: "Rare" }
    ]
  },
  {
    id: "102",
    name: "Route 102",
    description: "Riverside Path",
    levelRange: "8-12",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5UlcViNUEbEpzNqXXK_lG9TVvy3I0cWE1tmxs8zghuZlvC0NiYER71Jp4Rcxs4y0Or4QKVfWMHBuUlgxhkSDTJrdzlV8Kw5GuYFUR7HtBnlcAy-wBbSlLhiiyLy4iX1kzDi9a0kTvHodvhrHpBIl8stnjYOT0g7CN8rJKJgEjqyrnLF9IBpjlyecY7H_bof41we75vkhrd5TfMNfdkJnTdkb5IgWULozw8nEkCGGsrX7Whlioj-tWkd2nZ6Y6OLct9ZILtuZreQ",
    encounters: []
  }
];
