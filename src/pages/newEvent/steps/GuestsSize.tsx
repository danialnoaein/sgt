import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDraftParty } from "../../../store/slices/partySlice";
import { GUESTS_SIZE_TYPE } from "../../../constants/enums";
import { RootState } from "../../../store/store";

const GuestsSize = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);
  const [isSelected, setIsSelected] = useState(!!draftParty.guestSize);
  const [selected, setSelected] = useState<any>(draftParty.guestSize);

  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    setSelected(value);
  };
  const onClickSubmit = () => {
    dispatch(dispatch(updateDraftParty({ guestSize: selected })));
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
          defaultValue={selected}
        />
        <RadioButton
          name={"GUESTS_SIZE_TYPE"}
          onChoose={onRadioChoose}
          value={GUESTS_SIZE_TYPE.Medium}
          label={"Medium"}
          defaultValue={selected}
        />
        <RadioButton
          name={"GUESTS_SIZE_TYPE"}
          onChoose={onRadioChoose}
          value={GUESTS_SIZE_TYPE.Large}
          label={"Large"}
          defaultValue={selected}
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
