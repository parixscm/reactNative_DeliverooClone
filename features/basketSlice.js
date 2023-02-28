import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const idx = state.items.findIndex(item => item.id === action.payload.id);
      let newBasket = [...state.items];
      if (idx >= 0) {
        newBasket.splice(idx, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in the basket`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = state => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter(item => item.id === id);

export const selectBasketTotalPrice = state =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
