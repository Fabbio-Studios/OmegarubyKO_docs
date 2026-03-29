export type MoveCategory = 'PHYSICAL' | 'SPECIAL' | 'STATUS';

export interface Move {
  name: string;
  type: string;
  category: MoveCategory;
  power?: number;
  accuracy?: number;
  level?: number; // For level-up moves
  isRelearner?: boolean; // For move relearner
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  ability: string;
  abilityDescription: string;
  moveset: Move[];
  imageUrl: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  level: number;
  pokemon: { name: string; level: number; isAce?: boolean }[];
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
