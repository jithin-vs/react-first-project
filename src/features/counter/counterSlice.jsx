import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    value:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
        const itemExists = state.items.some(item => item.id === action.payload.id);
        if (!itemExists) {
          state.items.push(action.payload);
          state.value += 1;
        }
        else {
          console.log('Item already exists.');
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.value -= 1;
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
