const { teferiHeroOfDominaria } = require('../../data/fixtures/teferi');

const queries = {
  hello: (_, { name }) => `Hello ${name || 'World'}`,
  sampleCard: () => teferiHeroOfDominaria,
};

module.exports = {
  queries,
};
