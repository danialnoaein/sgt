import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import letterImage from "../../../../public/letter.svg";

const EInvite = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const onRadioChoose = (value: boolean) => {
    console.log(value);
    setIsSelected(true);
  };
  const onClickSubmit = () => {
    navigate("/new/4");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={25} />

      <div style={{ margin: "1rem auto" }}>
        <img
          src={letterImage}
          alt='Letter'
        />
      </div>
      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        Do you want to send e-invite?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"SEND_E_INVITE"}
          onChoose={onRadioChoose}
          value={true}
          label={"Yes"}
        />
        <RadioButton
          name={"SEND_E_INVITE"}
          onChoose={onRadioChoose}
          value={false}
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

export default EInvite;
