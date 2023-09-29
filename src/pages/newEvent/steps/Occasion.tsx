import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { OCCASION_TYPE } from "../../../constants/occasionTypeEnum";
import { useDispatch } from "react-redux";
import { addParty } from "../../../store/slices/partySlice";

const Occasion = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    console.log(value);
  };
  const onClickSubmit = () => {
    navigate("/new/1");
    dispatch(
      addParty({
        id: Math.floor(Math.random() * 1000),
        title: "SARA " + Math.floor(Math.random() * 1000),
        date: "2024-07-04",
        time: "13:30",
        fullDate: "2024-07-04 13:30",
        checkList: [],
      })
    );
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
