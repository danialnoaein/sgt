import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const Occasion = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: string) => {
    setIsSelected(true);
    console.log(value);
  };
  const onClickSubmit = () => {
    navigate("/new/2");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={12.5} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        What is the occasion?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"1"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"2"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"3"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"4"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"5"} />
      </div>

      <Button disabled={!isSelected} onClick={onClickSubmit}>
        Next
      </Button>
    </div>
  );
};

export default Occasion;
