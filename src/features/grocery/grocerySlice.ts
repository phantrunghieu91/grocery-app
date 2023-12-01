import { Action, createSlice } from '@reduxjs/toolkit';

type GroceryItem = {
  id: number;
  name: string;
  quantity: number;
};

const initialState = {
  groceryList: new Array<GroceryItem>(),
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.groceryList = [...state.groceryList, payload];
    },
    update: (state, { payload }) => {
      state.groceryList = state.groceryList.map(item => {
        if (item.id === payload.id) item = payload;
        return item;
      });
    },
    remove: (state, { payload }) => {
      state.groceryList.filter(item => item.id !== payload);
    },
  },
});

export default grocerySlice.reducer;
