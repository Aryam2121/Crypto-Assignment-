import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../../assets/sampleData.json';



const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    updateCrypto(state, action) {
      const updates = action.payload;
      updates.forEach(update => {
        const index = state.findIndex(asset => asset.symbol === update.symbol);
        if (index !== -1) {
          state[index] = { ...state[index], ...update };
        }
      });
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
