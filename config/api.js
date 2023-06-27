export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;
// `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

export const totalValue = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=364&interval=daily&precision=2`;

export const OHLC = (id, days) =>
  `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&${days}=1&precision=2`;

// https://api.coingecko.com/api/v3/coins/${id}/contract/${address}
