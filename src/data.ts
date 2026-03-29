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
    id: 257,
    name: "BLAZIKEN",
    types: ["FIRE", "FIGHTING"],
    ability: "SPEED BOOST",
    abilityDescription: "Its Speed stat is boosted every turn.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
    moveset: [
      { name: "BLAZE KICK", type: "FIRE", category: "PHYSICAL", power: 85, accuracy: 90, level: 36 },
      { name: "SKY UPPERCUT", type: "FIGHTING", category: "PHYSICAL", power: 85, accuracy: 90, level: 59 },
      { name: "SWORDS DANCE", type: "NORMAL", category: "STATUS", level: 1, isRelearner: true },
      { name: "FLARE BLITZ", type: "FIRE", category: "PHYSICAL", power: 120, accuracy: 100, level: 66 },
    ]
  },
  {
    id: 254,
    name: "SCEPTILE",
    types: ["GRASS"],
    ability: "OVERGROW",
    abilityDescription: "Powers up Grass-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    moveset: [
      { name: "LEAF BLADE", type: "GRASS", category: "PHYSICAL", power: 90, accuracy: 100, level: 29 },
      { name: "DRAGON CLAW", type: "DRAGON", category: "PHYSICAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "GIGA DRAIN", type: "GRASS", category: "SPECIAL", power: 75, accuracy: 100, level: 43 },
    ]
  },
  {
    id: 260,
    name: "SWAMPERT",
    types: ["WATER", "GROUND"],
    ability: "TORRENT",
    abilityDescription: "Powers up Water-type moves when HP is low.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
    moveset: [
      { name: "EARTHQUAKE", type: "GROUND", category: "PHYSICAL", power: 100, accuracy: 100, level: 52 },
      { name: "MUDDY WATER", type: "WATER", category: "SPECIAL", power: 90, accuracy: 85, level: 36 },
      { name: "ICE BEAM", type: "ICE", category: "SPECIAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 289,
    name: "SLAKING",
    types: ["NORMAL"],
    ability: "TRUANT",
    abilityDescription: "The Pokémon can't use a move if it used one last turn.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png",
    moveset: [
      { name: "HAMMER ARM", type: "FIGHTING", category: "PHYSICAL", power: 100, accuracy: 90, level: 36 },
      { name: "SLACK OFF", type: "NORMAL", category: "STATUS", level: 1, isRelearner: true },
      { name: "GIGA IMPACT", type: "NORMAL", category: "PHYSICAL", power: 150, accuracy: 90, level: 68 },
    ]
  },
  {
    id: 310,
    name: "MANECTRIC",
    types: ["ELECTRIC"],
    ability: "STATIC",
    abilityDescription: "The Pokémon is charged with static electricity.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
    moveset: [
      { name: "THUNDERBOLT", type: "ELECTRIC", category: "SPECIAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
      { name: "DISCHARGE", type: "ELECTRIC", category: "SPECIAL", power: 80, accuracy: 100, level: 30 },
      { name: "CRUNCH", type: "DARK", category: "PHYSICAL", power: 80, accuracy: 100, level: 42 },
    ]
  },
  {
    id: 365,
    name: "WALREIN",
    types: ["ICE", "WATER"],
    ability: "THICK FAT",
    abilityDescription: "Boosts resistance to Fire- and Ice-type moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png",
    moveset: [
      { name: "ICE BEAM", type: "ICE", category: "SPECIAL", power: 90, accuracy: 100, level: 1, isRelearner: true },
      { name: "SURF", type: "WATER", category: "SPECIAL", power: 90, accuracy: 100, level: 32 },
      { name: "SHEER COLD", type: "ICE", category: "SPECIAL", power: 0, accuracy: 30, level: 65 },
    ]
  },
  {
    id: 286,
    name: "BRELOOM",
    types: ["GRASS", "FIGHTING"],
    ability: "TECHNICIAN",
    abilityDescription: "Powers up the Pokémon's weaker moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png",
    moveset: [
      { name: "MACH PUNCH", type: "FIGHTING", category: "PHYSICAL", power: 40, accuracy: 100, level: 23 },
      { name: "SPORE", type: "GRASS", category: "STATUS", level: 1, isRelearner: true },
      { name: "BULLET SEED", type: "GRASS", category: "PHYSICAL", power: 25, accuracy: 100, level: 33 },
    ]
  },
  {
    id: 169,
    name: "CROBAT",
    types: ["POISON", "FLYING"],
    ability: "INNER FOCUS",
    abilityDescription: "The Pokémon's intense focus prevents it from flinching.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png",
    moveset: [
      { name: "CROSS POISON", type: "POISON", category: "PHYSICAL", power: 70, accuracy: 100, level: 1, isRelearner: true },
      { name: "AIR SLASH", type: "FLYING", category: "SPECIAL", power: 75, accuracy: 95, level: 35 },
      { name: "BRAVE BIRD", type: "FLYING", category: "PHYSICAL", power: 120, accuracy: 100, level: 58 },
    ]
  },
  {
    id: 330,
    name: "FLYGON",
    types: ["GROUND", "DRAGON"],
    ability: "LEVITATE",
    abilityDescription: "By floating in the air, the Pokémon receives full immunity to all Ground-type moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png",
    moveset: [
      { name: "DRAGON CLAW", type: "DRAGON", category: "PHYSICAL", power: 80, accuracy: 100, level: 45 },
      { name: "EARTHQUAKE", type: "GROUND", category: "PHYSICAL", power: 100, accuracy: 100, level: 1, isRelearner: true },
      { name: "DRAGON DANCE", type: "DRAGON", category: "STATUS", level: 1, isRelearner: true },
    ]
  },
  {
    id: 373,
    name: "SALAMENCE",
    types: ["DRAGON", "FLYING"],
    ability: "INTIMIDATE",
    abilityDescription: "The Pokémon intimidates opposing Pokémon upon entering battle, lowering their Attack stat.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png",
    moveset: [
      { name: "DRAGON CLAW", type: "DRAGON", category: "PHYSICAL", power: 80, accuracy: 100, level: 50 },
      { name: "FLY", type: "FLYING", category: "PHYSICAL", power: 90, accuracy: 95, level: 1, isRelearner: true },
      { name: "OUTRAGE", type: "DRAGON", category: "PHYSICAL", power: 120, accuracy: 100, level: 70 },
    ]
  },
  {
    id: 282,
    name: "GARDEVOIR",
    types: ["PSYCHIC", "FAIRY"],
    ability: "TRACE",
    abilityDescription: "When it enters a battle, the Pokémon copies an opposing Pokémon's Ability.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    moveset: [
      { name: "PSYCHIC", type: "PSYCHIC", category: "SPECIAL", power: 90, accuracy: 100, level: 40 },
      { name: "MOONBLAST", type: "FAIRY", category: "SPECIAL", power: 95, accuracy: 100, level: 1, isRelearner: true },
      { name: "CALM MIND", type: "PSYCHIC", category: "STATUS", level: 30 },
    ]
  },
  {
    id: 348,
    name: "ARMALDO",
    types: ["ROCK", "BUG"],
    ability: "BATTLE ARMOR",
    abilityDescription: "Hard armor protects the Pokémon from critical hits.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png",
    moveset: [
      { name: "X-SCISSOR", type: "BUG", category: "PHYSICAL", power: 80, accuracy: 100, level: 46 },
      { name: "ROCK BLAST", type: "ROCK", category: "PHYSICAL", power: 25, accuracy: 90, level: 25 },
      { name: "SWORDS DANCE", type: "NORMAL", category: "STATUS", level: 1, isRelearner: true },
    ]
  },
  {
    id: 306,
    name: "AGGRON",
    types: ["STEEL", "ROCK"],
    ability: "ROCK HEAD",
    abilityDescription: "Protects the Pokémon from recoil damage.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png",
    moveset: [
      { name: "IRON HEAD", type: "STEEL", category: "PHYSICAL", power: 80, accuracy: 100, level: 1, isRelearner: true },
      { name: "HEAD SMASH", type: "ROCK", category: "PHYSICAL", power: 150, accuracy: 80, level: 65 },
      { name: "AUTOMOTIZE", type: "STEEL", category: "STATUS", level: 35 },
    ]
  },
  {
    id: 302,
    name: "SABLEYE",
    types: ["DARK", "GHOST"],
    ability: "PRANKSTER",
    abilityDescription: "Gives priority to a status move.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png",
    moveset: [
      { name: "SHADOW BALL", type: "GHOST", category: "SPECIAL", power: 80, accuracy: 100, level: 36 },
      { name: "WILL-O-WISP", type: "FIRE", category: "STATUS", level: 1, isRelearner: true },
      { name: "RECOVER", type: "NORMAL", category: "STATUS", level: 44 },
    ]
  },
  {
    id: 334,
    name: "ALTARIA",
    types: ["DRAGON", "FLYING"],
    ability: "NATURAL CURE",
    abilityDescription: "All status conditions heal when the Pokémon withdraws from battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png",
    moveset: [
      { name: "DRAGON PULSE", type: "DRAGON", category: "SPECIAL", power: 85, accuracy: 100, level: 40 },
      { name: "ROOST", type: "FLYING", category: "STATUS", level: 1, isRelearner: true },
      { name: "DRAGON DANCE", type: "DRAGON", category: "STATUS", level: 30 },
    ]
  },
  {
    id: 376,
    name: "METAGROSS",
    types: ["STEEL", "PSYCHIC"],
    ability: "CLEAR BODY",
    abilityDescription: "Prevents other Pokémon from lowering its stats.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png",
    moveset: [
      { name: "METEOR MASH", type: "STEEL", category: "PHYSICAL", power: 90, accuracy: 90, level: 50 },
      { name: "ZEN HEADBUTT", type: "PSYCHIC", category: "PHYSICAL", power: 80, accuracy: 90, level: 1, isRelearner: true },
      { name: "BULLET PUNCH", type: "STEEL", category: "PHYSICAL", power: 40, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 303,
    name: "MAWILE",
    types: ["STEEL", "FAIRY"],
    ability: "SHEER FORCE",
    abilityDescription: "Removes additional effects to increase the power of moves when attacking.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
    moveset: [
      { name: "PLAY ROUGH", type: "FAIRY", category: "PHYSICAL", power: 90, accuracy: 90, level: 45 },
      { name: "IRON HEAD", type: "STEEL", category: "PHYSICAL", power: 80, accuracy: 100, level: 35 },
      { name: "SUCKER PUNCH", type: "DARK", category: "PHYSICAL", power: 70, accuracy: 100, level: 1, isRelearner: true },
    ]
  },
  {
    id: 359,
    name: "ABSOL",
    types: ["DARK"],
    ability: "SUPER LUCK",
    abilityDescription: "Heightens the critical-hit ratio of moves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    moveset: [
      { name: "NIGHT SLASH", type: "DARK", category: "PHYSICAL", power: 70, accuracy: 100, level: 35 },
      { name: "SWORDS DANCE", type: "NORMAL", category: "STATUS", level: 1, isRelearner: true },
      { name: "PSYCHO CUT", type: "PSYCHIC", category: "PHYSICAL", power: 70, accuracy: 100, level: 45 },
    ]
  },
];

export const TRAINER_DATA: Trainer[] = [
  {
    id: "01",
    name: "Roxanne",
    specialty: "ROCK SPECIALIST",
    level: 22,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrp1eTX54BtQimALRywyEdcNYSi7Soq663DMGQIaGdeVsMllFrTLlh1FTPl5agHO2x0WzN2jn9sJ9j-7rQHrMmXvh3AaceJ6QYrqk8bM-Lwl04CavkEMi9itf6pwYkkElJ3qTiBwART5yYmQCkD-7C5YQTyvgzMiT7ExfvjpnMrwYTtrG94D05gsnwOpuHMhAByEyYdBUBuINOM45WOprgn4-GnYPcRCYo3cuZcMSmOM3V5qQrPNHHl620JW_WzarRcgSIL32cuA",
    typeIconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJUNaZPReBTs0eMJYQv90P6_K2P_tz_s4hSC6W28EnucZMLYwmX5Q2rjXUw9oTbYXbyOGn0H4GpmbQANYa7BSOinlt3D_-iyxdqvCSKPkKgfAhvg_0WYP9nXQOkWgmRviZBWLhacJgqGQJSrSmEmythZRlO9jGdiMP2svcRDwIU2cznf_g7NRZvUKkCOwDtHmfCvEMCB2RQJLFHurXvCHD5LKy-p0PwLQ1ZqtHTjpN-DiiIqBlPHGwHVtU3t9xqV7-1l0zld77-g",
    pokemon: [
      { name: "Geodude", level: 18 },
      { name: "Nosepass", level: 18 },
      { name: "Lileep", level: 19 },
      { name: "Anorith", level: 19 },
      { name: "Onix", level: 20 },
      { name: "Aerodactyl", level: 22, isAce: true }
    ]
  },
  {
    id: "02",
    name: "Brawly",
    specialty: "FIGHT SPECIALIST",
    level: 28,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxq1c4l56hYwtPN6CgpTeGdkEPMFY9JYt-SaZlOo4vf2QCgI5Gx7xiI7_7qthiaAunEUUuIxB-rs7_5C4xfi-zX3_T4Ky0gTal1zbsp3hBopmCgH8knVW589FR_ZEJmwFiKgfl7_yXcjJ2IeyX0F_wG65n43nJTnuHLOPT_K0wQDkNSGH0Hn1bF4o2TTLJidCgxkB8m3anStSuO1m6VzJbkPl-_K87LuoPneEibBN0MC43yAWPHtZTsIuDRls6RMMksZyZOb-ObA",
    typeIconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF0nJHMuhaJrq7NKLXlNvfY7AnrXtmpcusI8ZAqlidJeYTM1kdfc8HK2PCCbSA3iMw32d95LVfrVp5lvf2ciojOZHoe66TgwW4eoJb4ph8HIb_RGzt6mpvGbTpbpHeVbU5rBqqt3zlLoECJtAytBhalSqA2GJz-AJbSfIAyx1qVsFa2dLT-whIi8Zb_2fcSQSYddsydpQSyIbBYFsAIqBLETPnemnuAzmTeQKJP9gDggY6Vtrg7Mx4YfY53-3LN8iz5hsM8lZzMw",
    pokemon: [
      { name: "Machop", level: 24 },
      { name: "Makuhita", level: 24 },
      { name: "Meditite", level: 25 },
      { name: "Combusken", level: 25 },
      { name: "Heracross", level: 26 },
      { name: "Lucario", level: 28, isAce: true }
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
