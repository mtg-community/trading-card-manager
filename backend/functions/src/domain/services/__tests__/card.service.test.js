const CardService = require('../card.service');

const CardRepository = require('../../../data/repositories/card.repository');
jest.mock('../../../data/repositories/card.repository');

describe("Card Service", () => {
  it('exposes card repository save', async () => {
    const cardMock = {};
    await CardService.save(cardMock);
    expect(CardRepository.save).toHaveBeenCalledWith(cardMock);
  });
});
