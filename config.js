export const config = {
  pairs: ["BTC/USDT", "ETH/USDT"],
  exchanges: {
    binance: {
      fee: 0.001, // 0.1% trading fee
      withdrawal: { BTC: 0.0005, ETH: 0.005 }, // ESTIMATED withdrawal fees
    },
    kraken: {
      fee: 0.0026, // 0.26% trading fee
      withdrawal: { BTC: 0.0005, ETH: 0.005 },
    },
  },
};

//More to come
