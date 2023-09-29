import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import cakeImage from "../../../../public/cake.svg";
import { updateDraftPartyCheckList } from "../../../store/slices/partySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { FOOD_ARRANGEMENTS } from "../../../constants/enums";

const Food = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);
  const [isSelected, setIsSelected] = useState(
    draftParty.checkList?.hasOwnProperty("food")
  );
  const [selected, setSelected] = useState<any>(
    draftParty.checkList && draftParty.checkList.food
  );

  const onRadioChoose = (value: number) => {
    setIsSelected(true);
    setSelected(value);
  };
  const onClickSubmit = () => {
    dispatch(updateDraftPartyCheckList({ key: "food", value: selected }));
    navigate("/new/5");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={62.5} />

      <div style={{ margin: "1rem auto" }}>
        <img
          src={cakeImage}
          alt='cake'
        />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        What will be the food arrangements?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.OrderIn}
          label={"Order-in"}
          defaultValue={selected}
        />
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.HomeCookedFood}
          label={"Home cooked food"}
          defaultValue={selected}
        />
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.BookACaterer}
          label={"Book a caterer"}
          defaultValue={selected}
        />
        <RadioButton
          name={"FOOD_ARRANGEMENTS"}
          onChoose={onRadioChoose}
          value={FOOD_ARRANGEMENTS.Potluck}
          label={"Potluck"}
          defaultValue={selected}
        />
      </div>

      <Button
        disabled={!isSelected}
        onClick={onClickSubmit}
        className='pageSubmit'
        variant='newEventSubmit'
      >
        Next
      </Button>
    </div>
  );
};

export default Food;
