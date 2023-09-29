import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import gamesImage from "../../../../public/games.svg";
import {
  addParty,
  updateDraftPartyCheckList,
} from "../../../store/slices/partySlice";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { BOARD_GAME_TYPE } from "../../../constants/enums";

const BoardGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);
  const [isSelected, setIsSelected] = useState(
    draftParty.checkList?.hasOwnProperty("boardGame")
  );
  const [selected, setSelected] = useState<any>(
    draftParty.checkList && draftParty.checkList.boardGame
  );

  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    setSelected(value);
  };
  const onClickSubmit = () => {
    dispatch(updateDraftPartyCheckList({ key: "boardGame", value: selected }));
    dispatch(addParty());

    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={100} />

      <div style={{ margin: "1rem auto" }}>
        <img
          src={gamesImage}
          alt='games'
        />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        What is the size of the guest list?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"BOARD_GAME_TYPE"}
          onChoose={onRadioChoose}
          value={BOARD_GAME_TYPE.Yes}
          label={"Yes"}
          defaultValue={selected}
        />
        <RadioButton
          name={"BOARD_GAME_TYPE"}
          onChoose={onRadioChoose}
          value={BOARD_GAME_TYPE.No}
          defaultValue={selected}
          label={"No"}
        />
        <RadioButton
          name={"BOARD_GAME_TYPE"}
          onChoose={onRadioChoose}
          value={BOARD_GAME_TYPE.IHave}
          defaultValue={selected}
          label={"I have board games at home"}
        />
      </div>

      <Button
        disabled={!isSelected}
        onClick={onClickSubmit}
        variant='newEventSubmit'
      >
        Next
      </Button>
    </div>
  );
};

export default BoardGame;
