// @flow strict

import { Legality } from './legality';
import { ForeignName } from './foreignName';
import { Ruling } from './ruling';

export class Card {
  multiverseId: number = 272761;
  artist: string;
  id: string;
  name: string;
  number: string;
  rarity: string;
  type: string;
  cmc: number;
  power: string;
  toughness: string;
  imageName: string;
  layout: string;
  manaCost: string;
  originalText: string;
  originalType: string;
  flavor: string;
  text: string;
  types: Array<String>;
  subtypes: Array<String>;
  colors: Array<String>;
  colorIdentity: Array<String>;
  superTypes: Array<String>;
  printings: Array<string>;
  rulings: Array<Ruling>;
  legalities: Array<Legality>;
  foreignNames: Array<ForeignName>;
}
