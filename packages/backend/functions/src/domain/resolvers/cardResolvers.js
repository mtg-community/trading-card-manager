const { teferiHeroOfDominaria } = require('../../data/fixtures/teferi');
const { ajaniInspiringLeader } = require('../../data/fixtures/ajaniInspiringLeader');
const { chandraFlameFury } = require('../../data/fixtures/chandraFlameFury');
const { sorinsGuide } = require('../../data/fixtures/sorinsGuide');

const sampleCardListFiltered = (_, { cardName, supertype, subtype, colors, colorIdentities }) => {
  const byCardName = (card) => {
    if (!cardName) {
      return true
    }
    return card.name.includes(cardName)
  }
  const byColors = (card) => {
    if (!colors.length) {
      return true
    }
    return card.colors.some(color => colors.includes(color))
  }
  const byColorIdentities = (card) => {
    if (!colorIdentities.length) {
      return true
    }
    return card.colorIdentities.some(colorIdentity => colorIdentities.includes(colorIdentity))
  }
  const bySupertype = (card) => {
    if (!supertype) {
      return true
    }
    return card.supertype == supertype
  }
  const bySubtype = (card) => {
    if (!subtype) {
      return true
    }
    return card.subtype == subtype
  }
  return [
    teferiHeroOfDominaria,
    ajaniInspiringLeader,
    chandraFlameFury,
    sorinsGuide
  ].filter(byCardName).filter(byColors).filter(byColorIdentities).filter(bySubtype).filter(bySupertype)
}

module.exports = {
  sampleCardListFiltered,
}
