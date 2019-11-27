const CardRepository = require("../../data/repositories/card.repository");

const sampleCardListFiltered = (_, { cardName, supertype, subtype, colors, colorIdentities }) => {
  return CardRepository.searchWithFilters({ cardName, supertype, subtype, colors, colorIdentities })
}

module.exports = {
  sampleCardListFiltered,
}
