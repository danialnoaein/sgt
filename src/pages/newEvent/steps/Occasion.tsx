import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDraftParty } from "../../../store/slices/partySlice";
import { RootState } from "../../../store/store";
import { OCCASION_TYPE } from "../../../constants/enums";

const Occasion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);
  const [isSelected, setIsSelected] = useState(
    draftParty.hasOwnProperty("type")
  );
  const [selected, setSelected] = useState<any>(draftParty.type);

  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    setSelected(value);
  };
  const onClickSubmit = () => {
    dispatch(dispatch(updateDraftParty({ type: selected })));
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
          defaultValue={selected}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Anniversary}
          label={"Anniversary"}
          defaultValue={selected}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Dinner}
          label={"Dinner"}
          defaultValue={selected}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Meetup}
          label={"Meetup"}
          defaultValue={selected}
        />
        <RadioButton
          name={"OCCASION_TYPE"}
          onChoose={onRadioChoose}
          value={OCCASION_TYPE.Other}
          label={"Other"}
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

export default Occasion;
