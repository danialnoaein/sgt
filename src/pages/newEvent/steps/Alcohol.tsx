import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const Alcohol = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: string) => {
    console.log(value);
    setIsSelected(true);
  };
  const onClickSubmit = () => {
    navigate("/new/3");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={75} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        Will there be alcohol?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton name={"GuestsSize"} onChoose={onRadioChoose} value={"1"} />
        <RadioButton name={"GuestsSize"} onChoose={onRadioChoose} value={"2"} />
        <RadioButton name={"GuestsSize"} onChoose={onRadioChoose} value={"3"} />
        <RadioButton name={"GuestsSize"} onChoose={onRadioChoose} value={"4"} />
        <RadioButton name={"GuestsSize"} onChoose={onRadioChoose} value={"5"} />
      </div>

      <Button disabled={!isSelected} onClick={onClickSubmit}>
        Next
      </Button>
    </div>
  );
};

export default Alcohol;
