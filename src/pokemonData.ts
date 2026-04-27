import { Move, Pokemon, MoveCategory } from './types';
import pkmnoro from '../pkmnoro.js';

type PkmnoroEntry = {
  num: number;
  name: string;
  types: string[];
  bs?: {
    hp?: number;
    at?: number;
    df?: number;
    sp?: number;
    sa?: number;
    sd?: number;
  };
  abs?: Array<string | null>;
  learnset_info?: {
    learnset?: Array<[number, string]>;
    tms?: string[];
    tutors?: string[];
  };
  evos?: string[];
  evoMethods?: string[];
  evoParams?: Array<string | number | null>;
};

const normalizeType = (type?: string) => (type ? type.toUpperCase() : 'NORMAL');

const MOVE_TYPE_OVERRIDES: Record<string, { type: string; category: MoveCategory }> = {
  'VINE WHIP': { type: 'GRASS', category: 'PHYSICAL' },
  'RAZOR LEAF': { type: 'GRASS', category: 'PHYSICAL' },
  'SEED BOMB': { type: 'GRASS', category: 'PHYSICAL' },
  'GIGA DRAIN': { type: 'GRASS', category: 'SPECIAL' },
  'GRASS KNOT': { type: 'GRASS', category: 'SPECIAL' },
  'SOLAR BEAM': { type: 'GRASS', category: 'SPECIAL' },
  'POISON POWDER': { type: 'POISON', category: 'STATUS' },
  'SLEEP POWDER': { type: 'GRASS', category: 'STATUS' },
  'LEECH SEED': { type: 'GRASS', category: 'STATUS' },
  'TACKLE': { type: 'NORMAL', category: 'PHYSICAL' },
  'GROWL': { type: 'NORMAL', category: 'STATUS' },
  'GROWTH': { type: 'NORMAL', category: 'STATUS' },
  'TAKE DOWN': { type: 'NORMAL', category: 'PHYSICAL' },
  'SWEET SCENT': { type: 'NORMAL', category: 'STATUS' },
  'SYNTHESIS': { type: 'GRASS', category: 'STATUS' },
  'DOUBLE-EDGE': { type: 'NORMAL', category: 'PHYSICAL' },
  'OVERGROW': { type: 'GRASS', category: 'STATUS' },
  'WORK UP': { type: 'NORMAL', category: 'STATUS' },
  'TOXIC': { type: 'POISON', category: 'STATUS' },
  'HIDDEN POWER': { type: 'NORMAL', category: 'SPECIAL' },
  'SUNNY DAY': { type: 'FIRE', category: 'STATUS' },
  'OPEN COMBAT': { type: 'FIGHTING', category: 'PHYSICAL' },
  'PROTECT': { type: 'NORMAL', category: 'STATUS' },
  'FRUSTRATION': { type: 'NORMAL', category: 'PHYSICAL' },
  'DOUBLE TEAM': { type: 'NORMAL', category: 'STATUS' },
  'SLUDGE BOMB': { type: 'POISON', category: 'SPECIAL' },
  'FACADE': { type: 'NORMAL', category: 'PHYSICAL' },
  'SECRET POWER': { type: 'NORMAL', category: 'PHYSICAL' },
  'REST': { type: 'PSYCHIC', category: 'STATUS' },
  'X-CUTTER': { type: 'BUG', category: 'PHYSICAL' },
  'STRENGTH': { type: 'NORMAL', category: 'PHYSICAL' },
  'FLASH': { type: 'NORMAL', category: 'STATUS' },
  'ROCK SMASH': { type: 'FIGHTING', category: 'PHYSICAL' },
  'SWORDS DANCE': { type: 'NORMAL', category: 'STATUS' },
  'EMBER': { type: 'FIRE', category: 'SPECIAL' },
  'DRAGON BREATH': { type: 'DRAGON', category: 'SPECIAL' },
  'FLAMETHROWER': { type: 'FIRE', category: 'SPECIAL' },
  'FIRE PUNCH': { type: 'FIRE', category: 'PHYSICAL' },
  'AIR SLASH': { type: 'FLYING', category: 'SPECIAL' },
  'DRAGON PULSE': { type: 'DRAGON', category: 'SPECIAL' },
  'WATER PULSE': { type: 'WATER', category: 'SPECIAL' },
  'BITE': { type: 'DARK', category: 'PHYSICAL' },
  'SCALD': { type: 'WATER', category: 'SPECIAL' },
  'SURF': { type: 'WATER', category: 'SPECIAL' },
  'AQUA TAIL': { type: 'WATER', category: 'PHYSICAL' },
  'RAPID SPIN': { type: 'NORMAL', category: 'PHYSICAL' },
  'HYDRO PUMP': { type: 'WATER', category: 'SPECIAL' },
  'DARK PULSE': { type: 'DARK', category: 'SPECIAL' },
  'AURA SPHERE': { type: 'FIGHTING', category: 'SPECIAL' },
  'ICE BEAM': { type: 'ICE', category: 'SPECIAL' },
  'FLARE BLITZ': { type: 'FIRE', category: 'PHYSICAL' },
  'DRAGON CLAW': { type: 'DRAGON', category: 'PHYSICAL' },
  'DISCHARGE': { type: 'ELECTRIC', category: 'SPECIAL' },
  'HURRICANE': { type: 'FLYING', category: 'SPECIAL' },
  'THUNDER SHOCK': { type: 'ELECTRIC', category: 'SPECIAL' },
  'PLUCK': { type: 'FLYING', category: 'PHYSICAL' },
  'THUNDERBOLT': { type: 'ELECTRIC', category: 'SPECIAL' },
  'THUNDER': { type: 'ELECTRIC', category: 'SPECIAL' },
  'VOLT TACKLE': { type: 'ELECTRIC', category: 'PHYSICAL' },
  'ASTONISH': { type: 'GHOST', category: 'PHYSICAL' },
  'SHADOW CLAW': { type: 'GHOST', category: 'PHYSICAL' },
  'WOOD HAMMER': { type: 'GRASS', category: 'PHYSICAL' },
  'MAGICAL LEAF': { type: 'GRASS', category: 'SPECIAL' },
  'DAZZLING GLEAM': { type: 'FAIRY', category: 'SPECIAL' },
  'POISON JAB': { type: 'POISON', category: 'PHYSICAL' },
  'DRILL RUN': { type: 'GROUND', category: 'PHYSICAL' },
  'AERIAL ACE': { type: 'FLYING', category: 'PHYSICAL' },
  'STEEL WING': { type: 'STEEL', category: 'PHYSICAL' },
  'EARTHQUAKE': { type: 'GROUND', category: 'PHYSICAL' },
  'IRON DEFENSE': { type: 'STEEL', category: 'STATUS' },
  'IRON HEAD': { type: 'STEEL', category: 'PHYSICAL' },
  'METAL BURST': { type: 'STEEL', category: 'PHYSICAL' },
  'SLUDGE WAVE': { type: 'POISON', category: 'SPECIAL' },
  'DRAGON RAGE': { type: 'DRAGON', category: 'SPECIAL' },
  'DRAGON CHEER': { type: 'DRAGON', category: 'STATUS' },
};

const MOVE_TYPE_PATTERNS: Array<[RegExp, string]> = [
  [/(?:THUNDER|VOLT|DISCHARGE|ELECTRIC|SPARK|ZAP|CHARGE|SHOCK)/, 'ELECTRIC'],
  [/(?:FIRE|FLAME|BLAZE|EMBER|INFERNO|SUNNY|HEAT|SCORCH|LAVA|MOLTEN)/, 'FIRE'],
  [/(?:WATER|HYDRO|SCALD|SURF|AQUA|BUBBLE|TIDE|TIDAL)/, 'WATER'],
  [/(?:GRASS|LEAF|VINE|SEED|FLORAL|WOOD|EARTHY|PETAL|DRAIN|KNOT)/, 'GRASS'],
  [/(?:ICE|BLIZZARD|FROST|CHILL|SNOW|GLACIER|FREEZE)/, 'ICE'],
  [/(?:DRAGON|DRACO|DRAKE)/, 'DRAGON'],
  [/(?:PSYCHIC|PSYCHO|MIND|CONFUSI|PULSE)/, 'PSYCHIC'],
  [/(?:POISON|SLUDGE|VENOM|TOXIC|ACID|NIGHT SHADE)/, 'POISON'],
  [/(?:ROCK|STONE|BOULDER|CRUSH|SMASH|QUAKE|EARTH|MUD|DRILL)/, 'GROUND'],
  [/(?:FLY|AIR|WING|HURRICANE|AERIAL|SKY)/, 'FLYING'],
  [/(?:BUG|X-CUTTER|TWINEEDLE|POISON STING|STRING SHOT|FURY|WING ATTACK)/, 'BUG'],
  [/(?:DARK|SHADOW|CRUNCH|BITE|NIGHT|FOUL|SCARY)/, 'DARK'],
  [/(?:STEEL|IRON|METAL|MAGNET|FLASH CANNON|HEAVY)/, 'STEEL'],
  [/(?:FAIRY|DAZZLING|MOON|CHARM|MISTY|TWINKLE)/, 'FAIRY'],
  [/(?:GHOST|PHANTOM|SHADOW)/, 'GHOST'],
];

const STATUS_PATTERNS = /\b(?:GROWL|SCREECH|TAIL WHIP|SWEET SCENT|SUNNY DAY|PROTECT|REST|TOXIC|LEECH SEED|POISON POWDER|SLEEP POWDER|GROWTH|SYNTHESIS|SWORDS DANCE|CALM MIND|LIGHT SCREEN|REFLECT|IRON DEFENSE|WILL-O-WISP|SING|CONFUSE|CHARGE|SWAGGER|ENCORE|BARRIER|SHIELD|TRICK ROOM|NIGHT SHADE|SAFE GUARD|BULK UP|CURSE)\b/i;
const SPECIAL_PATTERNS = /\b(?:BEAM|PULSE|BLAST|BOLT|WAVE|SURF|SCALD|FIRE|ICE|FLAME|HYDRO|AQUA|PSYCHO|DRAGON|DRAIN|KNOT|CHILL|BLAZE|AURA|SHADOW|MIST|BOLT|STORM|VORTEX|BOULDER|EMBER|DISCHARGE|THUNDER|HYDRO|ICE BEAM|FLAMETHROWER|FIRE BLAST|SOLAR BEAM|DARK PULSE|AURA SPHERE|HYDRO PUMP)\b/i;

const normalizeMoveName = (name: string) => name.trim().toUpperCase();

const inferMoveMetadata = (name: string): { type: string; category: MoveCategory } => {
  const normalized = normalizeMoveName(name);
  const override = MOVE_TYPE_OVERRIDES[normalized];
  if (override) return override;

  const type = MOVE_TYPE_PATTERNS.find(([pattern]) => pattern.test(normalized))?.[1] || 'NORMAL';
  const category: MoveCategory = STATUS_PATTERNS.test(normalized)
    ? 'STATUS'
    : SPECIAL_PATTERNS.test(normalized)
    ? 'SPECIAL'
    : 'PHYSICAL';

  return { type, category };
};

const parseMoveSet = (entry: PkmnoroEntry): Move[] => {
  const moves: Move[] = [];

  (entry.learnset_info?.learnset ?? []).forEach(([level, name]) => {
    const metadata = inferMoveMetadata(name);
    moves.push({
      name,
      type: metadata.type,
      category: metadata.category,
      level,
    });
  });

  (entry.learnset_info?.tms ?? []).forEach((name) => {
    const metadata = inferMoveMetadata(name);
    moves.push({
      name,
      type: metadata.type,
      category: metadata.category,
      isTM: true,
    });
  });

  (entry.learnset_info?.tutors ?? []).forEach((name) => {
    const metadata = inferMoveMetadata(name);
    moves.push({
      name,
      type: metadata.type,
      category: metadata.category,
      isRelearner: true,
    });
  });

  return moves;
};

const rawPoks = (pkmnoro as any)?.poks ?? {};

export const POKEMON_DATA: Pokemon[] = Object.values(rawPoks)
  .map((entry: any) => ({
    id: entry.num ?? 0,
    name: entry.name ?? 'UNKNOWN',
    types: (entry.types ?? []).map(normalizeType),
    abilities: (entry.abs ?? []).filter(Boolean) as string[],
    abilityDescription: entry.abs
      ? `Abilities: ${(entry.abs ?? []).filter(Boolean).join(', ')}`
      : undefined,
    baseStats: {
      hp: entry.bs?.hp ?? 0,
      at: entry.bs?.at ?? 0,
      df: entry.bs?.df ?? 0,
      sa: entry.bs?.sa ?? 0,
      sd: entry.bs?.sd ?? 0,
      sp: entry.bs?.sp ?? 0,
    },
    evolution: (entry.evos ?? []).map((name: string, idx: number) => ({
      name,
      method: entry.evoMethods?.[idx] ?? 'unknown',
      param: entry.evoParams?.[idx] ?? null,
    })),
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entry.num}.png`,
    moveset: parseMoveSet(entry),
  }))
  .sort((a, b) => a.id - b.id);

// Extract encounters data from pkmnoro.js
const rawRoutes = (pkmnoro as any)?.encs ?? {};

type EncounterType = 'grass' | 'water' | 'surf' | 'fish';

interface RawEncounter {
  s: string; // species
  mn: number; // min level
  mx: number; // max level
}

interface RawRouteData {
  name: string;
  [key: string]: any; // grass, water, etc.
}

export interface ProcessedEncounter {
  pokemonName: string;
  method: string;
  rarity: string;
  type: string;
  rarityLabel: string;
  minLevel: number;
  maxLevel: number;
}

export interface ProcessedRoute {
  id: string;
  name: string;
  description: string;
  levelRange: string;
  imageUrl: string;
  encounters: ProcessedEncounter[];
}

const getEncounterMethod = (encounterType: string): string => {
  switch (encounterType) {
    case 'grass': return 'Tall Grass';
    case 'water': return 'Water';
    case 'surf': return 'Surfing';
    case 'fish': return 'Fishing';
    default: return encounterType;
  }
};

const getEncounterRarity = (encounterType: string): { rarity: string; rarityLabel: string } => {
  // Since the raw data doesn't have rarity info, we'll assign based on encounter type
  switch (encounterType) {
    case 'grass': return { rarity: '45%', rarityLabel: 'Common' };
    case 'water': return { rarity: '30%', rarityLabel: 'Uncommon' };
    case 'surf': return { rarity: '20%', rarityLabel: 'Rare' };
    case 'fish': return { rarity: '15%', rarityLabel: 'Very Rare' };
    default: return { rarity: '30%', rarityLabel: 'Uncommon' };
  }
};

const processRouteEncounters = (routeKey: string, routeData: RawRouteData): ProcessedRoute => {
  const encounters: ProcessedEncounter[] = [];

  // Process different encounter types
  Object.keys(routeData).forEach(encounterType => {
    if (encounterType === 'name') return; // Skip the name field

    const encounterData = routeData[encounterType];
    if (encounterData?.encs) {
      const method = getEncounterMethod(encounterType);
      const { rarity, rarityLabel } = getEncounterRarity(encounterType);

      encounterData.encs.forEach((enc: RawEncounter) => {
        // Find the Pokemon data to get its type
        const pokemonData = POKEMON_DATA.find(p => p.name.toLowerCase() === enc.s.toLowerCase());
        const type = pokemonData?.types[0] || 'Normal';

        encounters.push({
          pokemonName: enc.s,
          method,
          rarity,
          type,
          rarityLabel,
          minLevel: enc.mn,
          maxLevel: enc.mx,
        });
      });
    }
  });

  // Calculate level range
  const allLevels = encounters.flatMap(enc => [enc.minLevel, enc.maxLevel]);
  const minLevel = allLevels.length > 0 ? Math.min(...allLevels) : 1;
  const maxLevel = allLevels.length > 0 ? Math.max(...allLevels) : 10;
  const levelRange = `${minLevel}-${maxLevel}`;

  // Generate a description based on the route name
  const description = routeData.name && routeData.name.includes('Route') ? 'Wild Area' : 'Special Location';

  // Use a placeholder image URL (could be improved with actual route images)
  const imageUrl = `https://picsum.photos/seed/${routeKey}/800/400`;

  return {
    id: routeKey.replace('route', ''),
    name: routeData.name,
    description,
    levelRange,
    imageUrl,
    encounters,
  };
};

export const ROUTE_ENCOUNTERS: ProcessedRoute[] = Object.entries(rawRoutes)
  .map(([routeKey, routeData]) => processRouteEncounters(routeKey, routeData as RawRouteData))
  .filter(route => route.encounters.length > 0) // Only include routes with encounters
  .sort((a, b) => {
    // Sort by route number if it's a route, otherwise alphabetically
    const aNum = parseInt(a.id);
    const bNum = parseInt(b.id);
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    }
    return a.name.localeCompare(b.name);
  });
