import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ALCOHOL_TYPE,
  BOARD_GAME_TYPE,
  DECORATION_TYPE,
  FOOD_ARRANGEMENTS,
  GUESTS_SIZE_TYPE,
  OCCASION_TYPE,
} from "../../constants/enums";

export interface IParty {
  id: number;
  title: string;
  date: string;
  time: string;
  fullDate: string;
  budget: number;
  type: OCCASION_TYPE;
  guestSize: GUESTS_SIZE_TYPE;
  checkList: {
    eInvite?: boolean;
    food?: FOOD_ARRANGEMENTS;
    alcohol?: ALCOHOL_TYPE;
    decorator?: DECORATION_TYPE;
    boardGame?: BOARD_GAME_TYPE;
  };
}

export interface IPartySlice {
  parties: Partial<IParty>[];
  draftParty: Partial<IParty>;
}

const initialState: IPartySlice = {
  parties: [],
  draftParty: {},
};

export const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    addParty: (state) => {
      let newParty = state.draftParty;
      newParty = { ...newParty, fullDate: `${newParty.date} ${newParty.time}` };
      state.parties.push(newParty);
      state.draftParty = {};
    },
    updateDraftParty: (state, action: PayloadAction<Partial<IParty>>) => {
      state.draftParty = { ...state.draftParty, ...action.payload };
    },
    updateDraftPartyCheckList: (state, action: PayloadAction<any>) => {
      state.draftParty.checkList = {
        ...state.draftParty.checkList,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const { addParty, updateDraftParty, updateDraftPartyCheckList } =
  partySlice.actions;
export default partySlice.reducer;
