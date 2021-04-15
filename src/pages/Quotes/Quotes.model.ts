export type Quote = {
  baseVolume: string;
  high24hr: string;
  highestBid: string;
  id: number;
  isFrozen: string;
  last: string;
  low24hr: string;
  lowestAsk: string;
  percentChange: string;
  postOnly: string;
  quoteVolume: string;
};

export type QuotesType = Record<string, Quote>;
