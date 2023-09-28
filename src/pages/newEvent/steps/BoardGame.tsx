import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import gamesImage from "../../../../public/games.svg";

enum BOARD_GAME_TYPE {
  Yes,
  No,
  IHave,
}

const BoardGame = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: number) => {
    console.log(value);
    setIsSelected(true);
  };
  const onClickSubmit = () => {
    navigate("/");
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
        />
        <RadioButton
          name={"BOARD_GAME_TYPE"}
          onChoose={onRadioChoose}
          value={BOARD_GAME_TYPE.No}
          label={"No"}
        />
        <RadioButton
          name={"BOARD_GAME_TYPE"}
          onChoose={onRadioChoose}
          value={BOARD_GAME_TYPE.IHave}
          label={"I have board games at home"}
        />
      </div>

      <Button
        disabled={!isSelected}
        onClick={onClickSubmit}
        className='pageSubmit'
      >
        Next
      </Button>
    </div>
  );
};

export default BoardGame;
