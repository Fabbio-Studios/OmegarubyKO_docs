export type MoveCategory = 'PHYSICAL' | 'SPECIAL' | 'STATUS';

export interface Move {
  name: string;
  type: string;
  category: MoveCategory;
  power?: number;
  accuracy?: number;
  level?: number; // For level-up moves
  isRelearner?: boolean; // For move relearner
  isTM?: boolean;
  isHM?: boolean;
  tmNumber?: string; // For TM moves
  hmNumber?: string; // For HM moves
}

export interface Evolution {
  name: string;
  method: string;
  param: string | number | null;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  abilityDescription?: string;
  baseStats: {
    hp: number;
    at: number;
    df: number;
    sa: number;
    sd: number;
    sp: number;
  };
  evolution: Evolution[];
  moveset: Move[];
  imageUrl: string;
}

export interface TrainerPokemon {
  name: string;
  level: number;
  isAce?: boolean;
  ability: string;
  heldItem?: string;
  moves: string[];
  imageUrl: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  category?: 'gym' | 'elite' | 'champion';
  level: number;
  pokemon: TrainerPokemon[];
  imageUrl: string;
  typeIconUrl: string;
}

export interface Encounter {
  pokemonName: string;
  method: string;
  rarity: string;
  type: string;
  rarityLabel: string;
}

export interface Route {
  id: string;
  name: string;
  description: string;
  levelRange: string;
  imageUrl: string;
  encounters: Encounter[];
}
