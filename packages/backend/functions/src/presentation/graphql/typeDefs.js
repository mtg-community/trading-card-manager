const typeDefs = `
  type Query {
    hello(name: String): String!
    sampleCard: Card!
  }
  
  type ForeignData {
    id: String!
    multiverseId: Int!
    flavorText: String
    language: String!
    name: String!
    text: String
    type: String
    layout: Layout
  }
  
  type Ruling {
    id: String!
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
    subTypes: [String!]
    superTypes: [String!]
    types: [String!]
  }
`;

module.exports = {
  typeDefs,
};