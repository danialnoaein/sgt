import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDraftParty } from "../../../store/slices/partySlice";
import { RootState } from "../../../store/store";

const EventInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);

  console.log(draftParty);

  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const [title, setTitle] = useState(draftParty.title);
  const [date, setDate] = useState(draftParty.date);
  const [time, setTime] = useState(draftParty.time);
  const [budget, setBudget] = useState(`${draftParty.budget}`);

  const onClickSubmit = () => {
    dispatch(updateDraftParty({ date, time, title, budget: parseInt(budget) }));
    navigate("/new/3");
  };

  useEffect(() => {
    if (title && date && time && budget) {
      if (
        title!.length > 2 &&
        date!.length > 0 &&
        date!.length > 0 &&
        budget!.length > 0
      ) {
        setIsFormCompleted(true);
      }
    }
  }, [title, date, time, budget]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={37.5} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>Event Name</div>
      <div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          value={title}
        />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>Date</div>
      <div>
        <input
          type='date'
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>Time</div>
      <div>
        <input
          type='time'
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>Budget</div>

      <div>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          type='number'
        />
      </div>

      <Button
        onClick={onClickSubmit}
        className='pageSubmit'
        variant='newEventSubmit'
        disabled={!isFormCompleted}
      >
        Next
      </Button>
    </div>
  );
};

export default EventInfo;
