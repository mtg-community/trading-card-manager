const { teferiHeroOfDominaria } = require('../../data/fixtures/teferi');
const { liliana } = require('../../data/fixtures/liliana');
const { snapMage } = require('../../data/fixtures/snapMage');
const { lordOfAtlantis } = require('../../data/fixtures/lordOfAtlantis');

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
  sampleCardList: () => [teferiHeroOfDominaria, snapMage, lordOfAtlantis, liliana],
};

module.exports = {
  queries,
  QueryTypeDef,
};
