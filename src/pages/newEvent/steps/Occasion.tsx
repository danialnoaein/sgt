import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";

const Occasion = () => {
  const [isSelected, setIsSelected] = useState(false);
  const onRadioChoose = (value: string) => {
    console.log(value);
    setIsSelected(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={20} />

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

      <Button disabled={!isSelected}>ddd</Button>
    </div>
  );
};

export default Occasion;
