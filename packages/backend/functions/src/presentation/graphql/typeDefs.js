const { QueryTypeDef } = require('./queries');

const typeDefs = `
${QueryTypeDef}

  type ForeignData {
    multiverseId: Int!
    flavorText: String
    language: String!
    name: String!
    text: String
    type: String
    layout: Layout
  }

  type Ruling {
    date: String!
    text: String!
  }

  enum Color {
    G,
    R,
    W,
    B,
    U
  }

  enum Layout {
    NORMAL,
  }

  enum BorderColor {
    BLACK,
  }

  enum SetType {
    EXPANSION,
  }

  enum Rarity {
    COMMON,
    UNCOMMON,
    RARE,
    MYTHIC
  }

  type Card {
    id: String!
    uuid: String!
    artist: String!
    colorIdentities: [Color!]!
    colors: [Color!]!
    layout: Layout!
    name: String!
    number: String!
    power: String
    toughness: String
    text: String
    type: String!
    watermark: String
    convertedManaCost: Float!
    flavorText: String
    foreignData: [ForeignData!]
    manaCost: String!
    multiverseId: Int!
    rarity: Rarity!
    rulings: [Ruling!]
    printings: [String!]!
    subtypes: [String!]
    supertypes: [String!]
    types: [String!]
    loyalty: String
  }
`;

module.exports = {
  typeDefs,
};
