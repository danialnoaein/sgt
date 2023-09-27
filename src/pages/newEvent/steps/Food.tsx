import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

enum FOOD_ARRANGEMENTS {
  OrderIn,
  HomeCookedFood,
  BookACaterer,
  Potluck,
}
const Food = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: number) => {
    console.log(value);
    setIsSelected(true);
  };
  const onClickSubmit = () => {
    navigate("/new/5");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={50} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        What will be the food arrangements?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.OrderIn}
          label={"Order-in"}
        />
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.HomeCookedFood}
          label={"Home cooked food"}
        />
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.BookACaterer}
          label={"Book a caterer"}
        />
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.Potluck}
          label={"Potluck"}
        />
      </div>

      <Button disabled={!isSelected} onClick={onClickSubmit}>
        Next
      </Button>
    </div>
  );
};

export default Food;
