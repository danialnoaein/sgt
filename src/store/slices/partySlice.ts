import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IParty {
  id: number;
  title: string;
  date: string;
  time: string;
  checkList: [];
}

export interface IDraftParty extends Partial<IParty> {}

export interface IPartySlice {
  parties: IParty[];
  draftParty: IDraftParty;
}

const initialState: IPartySlice = { parties: [], draftParty: {} };

export const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    addParty: (state, action: PayloadAction<IParty>) => {
      state.parties.push(action.payload);
    },
    updateDraftParty: (state, action: PayloadAction<IParty>) => {
      state.draftParty = action.payload;
    },
  },
});

export const { addParty } = partySlice.actions;
export default partySlice.reducer;
