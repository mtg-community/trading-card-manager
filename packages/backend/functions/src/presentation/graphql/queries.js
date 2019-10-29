const { teferiHeroOfDominaria } = require('../../data/fixtures/teferi');

const QueryTypeDef = `
  type Query {
    hello(name: String): String!
    sampleCard: Card!
    sampleCardList: [Card!]!
  }
`

const queries = {
  hello: (_, { name }) => `Hello ${name || 'World'}`,
  sampleCard: () => teferiHeroOfDominaria,
  sampleCardList: () => [teferiHeroOfDominaria],
};

module.exports = {
  queries,
  QueryTypeDef,
};
