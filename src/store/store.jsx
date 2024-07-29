import { configureStore } from '@reduxjs/toolkit';
import cartUpdate from '../features/counter/counterSlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartUpdate,
  },
});

export default store;