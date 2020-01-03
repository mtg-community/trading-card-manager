export class CardList {
  buy: string[];
  sell: string[];
  trade_want: string[];
  trade_have: string[];
  constructor(
    buy: string[] = [],
    sell: string[] = [],
    trade_want: string[] = [],
    trade_have: string[] = [],
  ) {
    this.buy = buy;
    this.sell = sell;
    this.trade_want = trade_want;
    this.trade_have = trade_have;
  }
}

export const EMPTY_IN_CARD_LIST = new CardList();
