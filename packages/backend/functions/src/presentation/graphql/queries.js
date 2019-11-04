const { teferiHeroOfDominaria } = require('../../data/fixtures/teferi');
const { ajaniInspiringLeader } = require('../../data/fixtures/ajaniInspiringLeader');
const { chandraFlameFury } = require('../../data/fixtures/chandraFlameFury');
const { sorinsGuide } = require('../../data/fixtures/sorinsGuide');

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
  sampleCardList: () => [teferiHeroOfDominaria, chandraFlameFury, sorinsGuide, ajaniInspiringLeader],
};

module.exports = {
  queries,
  QueryTypeDef,
};
