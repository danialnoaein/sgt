import { configureStore } from "@reduxjs/toolkit";
import partySlice from "./slices/partySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedPartySlice = persistReducer(persistConfig, partySlice);

export const store = configureStore({
  reducer: {
    party: persistedPartySlice,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
