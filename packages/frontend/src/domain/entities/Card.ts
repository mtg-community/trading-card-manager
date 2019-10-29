import {
  Color,
  ForeignData,
  Layout,
  Maybe,
  Rarity,
  Ruling,
  Scalars,
} from '../../../types/graphql-api';

export type Card = {
  id: string;
  uuid: string;
  artist: string;
  colorIdentities: Array<Color>;
  colors: Array<Color>;
  layout: Layout;
  name: string;
  number: string;
  power?: Maybe<string>;
  toughness?: Maybe<string>;
  text?: Maybe<string>;
  type: string;
  watermark?: Maybe<string>;
  convertedManaCost: number;
  flavorText?: Maybe<string>;
  foreignData?: Maybe<Array<ForeignData>>;
  manaCost: string;
  multiverseId: Scalars['Int'];
  rarity: Rarity;
  rulings?: Maybe<Array<Ruling>>;
  printings: Array<string>;
  subTypes?: Maybe<Array<string>>;
  superTypes?: Maybe<Array<string>>;
  types?: Maybe<Array<string>>;
};
