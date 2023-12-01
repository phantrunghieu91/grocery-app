import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type GroceryItem = {
  id: number;
  name: string;
  quantity: number;
};

export type GroceryList = GroceryItem[];

export interface GroceryState {
  count: number;
  groceryList: GroceryList;
}

const initialState: GroceryState = {
  count: 0,
  groceryList: [],
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<GroceryItem>) => {
      state.count++;
      state.groceryList = [...state.groceryList, payload];
    },
    update: (state, { payload }: PayloadAction<GroceryItem>) => {
      state.groceryList = state.groceryList.map(item => {
        if (item.id === payload.id) item = payload;
        return item;
      });
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.groceryList.filter(item => item.id !== payload);
    },
  },
});

export const { add, update, remove } = grocerySlice.actions;
export const selectCount: (state: RootState) => number = state => state.grocery.count;
export default grocerySlice.reducer;
