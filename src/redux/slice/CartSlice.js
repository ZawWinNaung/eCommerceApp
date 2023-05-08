import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  productList: [],
};

export const CartSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productList.push(action.payload);
    },
  },
});

export const {addToCart} = CartSlice.actions;

export default CartSlice.reducer;
