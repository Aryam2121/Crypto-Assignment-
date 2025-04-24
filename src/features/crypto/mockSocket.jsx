import { updateCrypto } from './cryptoSlice';

export const startMockSocket = (dispatch, data) => {
  setInterval(() => {
    const updates = data.map(asset => {
      const rand = (min, max) => (Math.random() * (max - min) + min).toFixed(2);
      return {
        symbol: asset.symbol,
        price: (asset.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
        change1h: rand(-1, 1),
        change24h: rand(-5, 5),
        change7d: rand(-10, 10),
        volume24h: (parseFloat(asset.volume24h) * (1 + Math.random() / 10)).toFixed(2),
      };
    });

    dispatch(updateCrypto(updates));
  }, 1500); // 1.5s update
};
