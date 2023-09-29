import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDraftParty } from "../../../store/slices/partySlice";
import { GUESTS_SIZE_TYPE } from "../../../constants/guestSizeEnum";

const GuestsSize = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRadioChoose = (value: GUESTS_SIZE_TYPE) => {
    dispatch(dispatch(updateDraftParty({ guestSize: value })));
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

      <Button
        disabled={!isSelected}
        className='pageSubmit'
        onClick={onClickSubmit}
        variant='newEventSubmit'
      >
        Next
      </Button>
    </div>
  );
};

export default GuestsSize;
