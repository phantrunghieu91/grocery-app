import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type GroceryItemType = {
  id: number;
  name: string;
  quantity: number;
};

export type GroceryList = GroceryItemType[];

export interface GroceryState {
  count: number;
  groceryList: GroceryList;
  updatingItem: GroceryItemType | undefined;
  formAction: 'add' | 'edit';
}

const initialState: GroceryState = {
  count: 0,
  groceryList: [],
  updatingItem: undefined,
  formAction: 'add',
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<GroceryItemType>) => {
      state.count++;
      state.groceryList = [...state.groceryList, payload];
    },
    update: (state, { payload }: PayloadAction<GroceryItemType>) => {
      state.groceryList = state.groceryList.map(item => {
        if (item.id === payload.id) item = payload;
        return item;
      });
      state.formAction = 'add';
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.groceryList = state.groceryList.filter(item => item.id !== payload);
    },
    prepareUpdate: (state, { payload }: PayloadAction<number>) => {
      state.updatingItem = state.groceryList.find(item => (item.id = payload));
    },
  },
});

export const { add, update, remove, prepareUpdate } = grocerySlice.actions;
export const selectGroceryList: (state: RootState) => GroceryList = state => state.grocery.groceryList;
export const selectCount: (state: RootState) => number = state => state.grocery.count;
export const selectFormAction: (state: RootState) => 'add' | 'edit' = state => state.grocery.formAction;
export const selectUpdatingItem: (state: RootState) => GroceryItemType | undefined = state => state.grocery.updatingItem;
export default grocerySlice.reducer;
