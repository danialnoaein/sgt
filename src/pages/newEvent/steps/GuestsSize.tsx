import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

enum GUESTS_SIZE_TYPE {
  Small,
  Medium,
  Large,
}
const GuestsSize = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: number) => {
    console.log(value);
    setIsSelected(true);
  };
  const onClickSubmit = () => {
    navigate("/new/2");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={25} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        What is the size of the guest list?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"GUESTS_SIZE_TYPE"}
          onChoose={onRadioChoose}
          value={GUESTS_SIZE_TYPE.Small}
          label={"Small"}
        />
        <RadioButton
          name={"GUESTS_SIZE_TYPE"}
          onChoose={onRadioChoose}
          value={GUESTS_SIZE_TYPE.Medium}
          label={"Medium"}
        />
        <RadioButton
          name={"GUESTS_SIZE_TYPE"}
          onChoose={onRadioChoose}
          value={GUESTS_SIZE_TYPE.Large}
          label={"Large"}
        />
      </div>

      <Button disabled={!isSelected} onClick={onClickSubmit}>
        Next
      </Button>
    </div>
  );
};

export default GuestsSize;
