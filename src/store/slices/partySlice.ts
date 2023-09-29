import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { OCCASION_TYPE } from "../../constants/occasionTypeEnum";
import { GUESTS_SIZE_TYPE } from "../../constants/guestSizeEnum";

export interface IParty {
  id: number;
  title: string;
  date: string;
  time: string;
  fullDate: string;
  type: OCCASION_TYPE;
  guestSize: GUESTS_SIZE_TYPE;
  checkList: [];
}

export interface IPartySlice {
  parties: IParty[];
  draftParty: Partial<IParty>;
}

const initialState: IPartySlice = { parties: [], draftParty: {} };

export const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    addParty: (state, action: PayloadAction<IParty>) => {
      state.parties.push(action.payload);
    },
    updateDraftParty: (state, action: PayloadAction<Partial<IParty>>) => {
      state.draftParty = { ...state.draftParty, ...action.payload };
    },
  },
});

export const { addParty, updateDraftParty } = partySlice.actions;
export default partySlice.reducer;
