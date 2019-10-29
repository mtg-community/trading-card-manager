export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export enum BorderColor {
  Black = 'BLACK'
}

export type Card = {
   __typename?: 'Card',
  id: Scalars['String'],
  uuid: Scalars['String'],
  artist: Scalars['String'],
  colorIdentities: Array<Color>,
  colors: Array<Color>,
  layout: Layout,
  name: Scalars['String'],
  number: Scalars['String'],
  power?: Maybe<Scalars['String']>,
  toughness?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  type: Scalars['String'],
  watermark?: Maybe<Scalars['String']>,
  convertedManaCost: Scalars['Float'],
  flavorText?: Maybe<Scalars['String']>,
  foreignData?: Maybe<Array<ForeignData>>,
  manaCost: Scalars['String'],
  multiverseId: Scalars['Int'],
  rarity: Rarity,
  rulings?: Maybe<Array<Ruling>>,
  printings: Array<Scalars['String']>,
  subTypes?: Maybe<Array<Scalars['String']>>,
  superTypes?: Maybe<Array<Scalars['String']>>,
  types?: Maybe<Array<Scalars['String']>>,
};

export enum Color {
  G = 'G',
  R = 'R',
  W = 'W',
  B = 'B',
  U = 'U'
}

export type ForeignData = {
   __typename?: 'ForeignData',
  id: Scalars['String'],
  multiverseId: Scalars['Int'],
  flavorText?: Maybe<Scalars['String']>,
  language: Scalars['String'],
  name: Scalars['String'],
  text?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  layout?: Maybe<Layout>,
};

export enum Layout {
  Normal = 'NORMAL'
}

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  sampleCard: Card,
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>
};

export enum Rarity {
  Common = 'COMMON',
  Uncommon = 'UNCOMMON',
  Rare = 'RARE',
  Mythic = 'MYTHIC'
}

export type Ruling = {
   __typename?: 'Ruling',
  id: Scalars['String'],
  date: Scalars['String'],
  text: Scalars['String'],
};

export enum SetType {
  Expansion = 'EXPANSION'
}
