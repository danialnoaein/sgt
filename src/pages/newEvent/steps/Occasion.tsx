import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

enum OCCASION_TYPE {
  Birthday,
  Anniversary,
  Dinner,
  Meetup,
  Other,
}
const Occasion = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    console.log(value);
  };
  const onClickSubmit = () => {
    navigate("/new/1");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={12.5} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        What is the occasion?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Birthday}
          label={"Birthday"}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Anniversary}
          label={"Anniversary"}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Dinner}
          label={"Dinner"}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Meetup}
          label={"Meetup"}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Other}
          label={"Other"}
        />
      </div>

      <Button disabled={!isSelected} onClick={onClickSubmit}>
        Next
      </Button>
    </div>
  );
};

export default Occasion;
