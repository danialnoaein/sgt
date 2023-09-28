import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import bubblesImage from "../../../../public/bubbles.svg";

enum DECORATION_TYPE {
  Yes,
  No,
  IWill,
}
const Decorator = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: number) => {
    console.log(value);
    setIsSelected(true);
  };
  const onClickSubmit = () => {
    navigate("/new/7");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={87.5} />

      <div style={{ margin: "1rem auto" }}>
        <img
          src={bubblesImage}
          alt='bubbles'
        />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        Do you wish to hire a decorator?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"DECORATION_TYPE"}
          onChoose={onRadioChoose}
          value={DECORATION_TYPE.Yes}
          label={"Yes"}
        />
        <RadioButton
          name={"DECORATION_TYPE"}
          onChoose={onRadioChoose}
          value={DECORATION_TYPE.No}
          label={"No"}
        />
        <RadioButton
          name={"DECORATION_TYPE"}
          onChoose={onRadioChoose}
          value={DECORATION_TYPE.IWill}
          label={"I will decorate myself"}
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

export default Decorator;
