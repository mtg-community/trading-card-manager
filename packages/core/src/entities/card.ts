import { Legality } from './legality';
import { ForeignName } from './foreignName';
import { Ruling } from './ruling';


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
  types: Array<string>,
  subtypes: Array<string>,
  superTypes: Array<string>,
  colors: Array<string>,
  colorIdentity: Array<string>,
  printings: Array<string>,
  rulings: Array<Ruling>,
  legalities: Array<Legality>,
  foreignNames: Array<ForeignName>,
};
