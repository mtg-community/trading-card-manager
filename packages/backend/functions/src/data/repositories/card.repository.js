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

module.exports = {
  save: upsert,
  findAll,
};
