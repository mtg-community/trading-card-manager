// @flow strict

import type { Legality } from './legality';
import type { ForeignName } from './foreignName';
import type { Ruling } from './ruling';

type Type = String;
type SubType = String;
type SuperType = String;
type ColorIdentity = String;
type Color = String;
type Printing = String;

export type Card = {
  multiverseId: number,
  artist: string,
  id: string,
  name: string,
  number: string,
  rarity: string,
  type: string,
  cmc: number,
  power: string,
  toughness: string,
  imageName: string,
  layout: string,
  manaCost: string,
  originalText: string,
  originalType: string,
  flavor: string,
  text: string,
  types: Array<Type>,
  subtypes: Array<SubType>,
  superTypes: Array<SuperType>,
  colors: Array<Color>,
  colorIdentity: Array<ColorIdentity>,
  printings: Array<Printing>,
  rulings: Array<Ruling>,
  legalities: Array<Legality>,
  foreignNames: Array<ForeignName>,
};
