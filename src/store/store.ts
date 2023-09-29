import { configureStore } from "@reduxjs/toolkit";
import partySlice from "./slices/partySlice";

export const store = configureStore({
  reducer: {
    party: partySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
