import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import glassesImage from "../../../../public/glasses.svg";

enum ALCOHOL_TYPE {
  YesINeed,
  YesIHave,
  BringYourOwnBottle,
  No,
}
const Alcohol = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: number) => {
    console.log(value);
    setIsSelected(true);
  };
  const onClickSubmit = () => {
    navigate("/new/6");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={75} />

      <div style={{ margin: "1rem auto" }}>
        <img
          src={glassesImage}
          alt='glasses'
        />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        Will there be alcohol?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"ALCOHOL_TYPE"}
          onChoose={onRadioChoose}
          value={ALCOHOL_TYPE.YesINeed}
          label={"Yes, I need to order it"}
        />
        <RadioButton
          name={"ALCOHOL_TYPE"}
          onChoose={onRadioChoose}
          value={ALCOHOL_TYPE.YesIHave}
          label={"Yes, I have it"}
        />
        <RadioButton
          name={"ALCOHOL_TYPE"}
          onChoose={onRadioChoose}
          value={ALCOHOL_TYPE.BringYourOwnBottle}
          label={"Bring your own bottle"}
        />
        <RadioButton
          name={"ALCOHOL_TYPE"}
          onChoose={onRadioChoose}
          value={ALCOHOL_TYPE.No}
          label={"No"}
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

export default Alcohol;
