import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import calendarImage from "../../../../public/calendar.png";
import checkListImage from "../../../../public/checkList.png";
import { RootState } from "../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addParty } from "../../../store/slices/partySlice";

const UpcomingPartiesCard = () => {
  const parties = useSelector((state: RootState) => state.party.parties);
  const dispatch = useDispatch();

  console.log(parties);

  const hasUpcomingEvent = false;
  const nextEventTitle = "Sara’s Birthday Bash";
  const daysToNextEvent = 10;

  const navigate = useNavigate();
  const onClickNewEvent = () => {
    navigate("/new");
    dispatch(
      addParty({
        id: Math.random() * 1000,
        title: "SARA",
        date: "none",
        time: "none",
        checkList: [],
      })
    );
  };

  const onCardClick = () => {
    if (hasUpcomingEvent) navigate("/party");
  };

  return (
    <>
      {hasUpcomingEvent && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: "1", fontWeight: "bold" }}>Upcoming</div>
          <Button onClick={onClickNewEvent}>Create new</Button>
        </div>
      )}
      <div
        style={{
          padding: "1rem",
          background:
            "linear-gradient(90deg, rgba(80,88,106,1) 0%, rgba(30,37,48,1) 100%)",
          borderRadius: "0.5rem",
          margin: "0.75rem 0",
          display: "flex",
        }}
        onClick={onCardClick}
      >
        <div style={{ flex: "1" }}>
          <div style={{ fontWeight: "bold" }}>
            {hasUpcomingEvent ? nextEventTitle : "No Upcoming House Party"}
          </div>
          <div
            className='lightText'
            style={{ margin: "0.5rem 0" }}
          >
            {!hasUpcomingEvent && "Plan your house party"}
            {hasUpcomingEvent && `${daysToNextEvent} Days to go`}
          </div>

          {!hasUpcomingEvent && (
            <Button
              onClick={onClickNewEvent}
              variant='cta'
            >
              Create a new event
            </Button>
          )}

          {hasUpcomingEvent && (
            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <div style={{ fontWeight: "bold" }}>0</div>
                <div className='lightText'>Done</div>
              </div>

              <div>
                <div style={{ fontWeight: "bold" }}>0</div>
                <div className='lightText'>To Do</div>
              </div>
            </div>
          )}
        </div>
        <div>
          <img
            src={hasUpcomingEvent ? calendarImage : checkListImage}
            style={{ width: "68px" }}
          />
        </div>
      </div>
    </>
  );
};

export default UpcomingPartiesCard;
