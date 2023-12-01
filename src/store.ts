import { configureStore } from '@reduxjs/toolkit';
import grocery from './features/grocery/grocerySlice';

export const store = configureStore({
  reducer: {
    grocery,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
