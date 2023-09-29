import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import glassesImage from "../../../../public/glasses.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { updateDraftPartyCheckList } from "../../../store/slices/partySlice";
import { ALCOHOL_TYPE } from "../../../constants/enums";

const Alcohol = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);
  const [isSelected, setIsSelected] = useState(
    draftParty.checkList?.hasOwnProperty("alcohol")
  );
  const [selected, setSelected] = useState<any>(
    draftParty.checkList && draftParty.checkList.alcohol
  );

  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    setSelected(value);
  };
  const onClickSubmit = () => {
    dispatch(updateDraftPartyCheckList({ key: "alcohol", value: selected }));
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
          defaultValue={selected}
        />
        <RadioButton
          name={"ALCOHOL_TYPE"}
          onChoose={onRadioChoose}
          value={ALCOHOL_TYPE.YesIHave}
          label={"Yes, I have it"}
          defaultValue={selected}
        />
        <RadioButton
          name={"ALCOHOL_TYPE"}
          onChoose={onRadioChoose}
          value={ALCOHOL_TYPE.BringYourOwnBottle}
          label={"Bring your own bottle"}
          defaultValue={selected}
        />
        <RadioButton
          name={"ALCOHOL_TYPE"}
          onChoose={onRadioChoose}
          value={ALCOHOL_TYPE.No}
          label={"No"}
          defaultValue={selected}
        />
      </div>

      <Button
        disabled={!isSelected}
        onClick={onClickSubmit}
        variant='newEventSubmit'
      >
        Next
      </Button>
    </div>
  );
};

export default Alcohol;
