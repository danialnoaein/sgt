import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import bubblesImage from "../../../../public/bubbles.svg";
import { DECORATION_TYPE } from "../../../constants/enums";
import { updateDraftPartyCheckList } from "../../../store/slices/partySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Decorator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);
  const [isSelected, setIsSelected] = useState(
    draftParty.checkList?.hasOwnProperty("decorator")
  );
  const [selected, setSelected] = useState<any>(
    draftParty.checkList && draftParty.checkList.decorator
  );

  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    setSelected(value);
  };
  const onClickSubmit = () => {
    dispatch(updateDraftPartyCheckList({ key: "decorator", value: selected }));
    navigate("/new/7");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={87.5} />

      <div style={{ margin: "1rem auto" }}>
        <img
          src={bubblesImage}
          alt='bubbles'
        />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        Do you wish to hire a decorator?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"DECORATION_TYPE"}
          onChoose={onRadioChoose}
          value={DECORATION_TYPE.Yes}
          label={"Yes"}
          defaultValue={selected}
        />
        <RadioButton
          name={"DECORATION_TYPE"}
          onChoose={onRadioChoose}
          value={DECORATION_TYPE.No}
          label={"No"}
          defaultValue={selected}
        />
        <RadioButton
          name={"DECORATION_TYPE"}
          onChoose={onRadioChoose}
          value={DECORATION_TYPE.IWill}
          label={"I will decorate myself"}
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

export default Decorator;
