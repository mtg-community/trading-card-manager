const { CardModel } = require('../mongoose/models/card.model');

const ALL = {};

const upsert = async card => {
  const options = { upsert: true, new: true };
  const query = { uuid: card.uuid };
  return CardModel.findOneAndUpdate(query, card, options);
};

const findAll = async (page = 1, pageSize = 25, sort = {}) => {
  const { docs, total, limit, pages } = await CardModel.paginate(ALL, {
    limit: pageSize,
    sort,
    page,
  });

  return {
    data: docs,
    metadata: {
      pageSize: limit,
      total,
      page,
      pages,
    },
  };
};

const findWithFilters = async (filters) => {
  const { cardName, supertype, subtype, colors, colorIdentity } = filters
  return await CardModel.find({
    $or: [
      { name: { $regex: cardName }, },
      { colors: { $in : colors } },
      { supertypes: supertype },
      { subtypes: subtype },
      { colorIdentity: { $in: colorIdentity } }
    ]
  })
}

module.exports = {
  save: upsert,
  findAll,
  findWithFilters,
}
