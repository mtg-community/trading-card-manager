const CardRepository = require("../../data/repositories/card.repository");

const sampleCardListFiltered = (_, { cardName, supertype, subtype, colors, colorIdentity }) => {
  return CardRepository.findWithFilters({ cardName, supertype, subtype, colors, colorIdentity })
}

module.exports = {
  sampleCardListFiltered,
}
