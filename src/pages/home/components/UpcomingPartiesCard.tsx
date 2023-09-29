import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import calendarImage from "../../../../public/calendar.png";
import checkListImage from "../../../../public/checkList.png";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDaysToEvent, getNearestParty } from "../../../utlis/partyArray";
import { IParty } from "../../../store/slices/partySlice";

const UpcomingPartiesCard = () => {
  const parties = useSelector((state: RootState) => state.party.parties);

  const [upcomingEvent, setUpcomingEvent] = useState<IParty | null>(null);
  const [daysToNextEvent, setDaysToNextEvent] = useState(0);

  console.log(parties);

  useEffect(() => {
    if (parties.length > 0) {
      const nearestParty = getNearestParty(parties);
      console.log("nearestParty", nearestParty);

      setDaysToNextEvent(getDaysToEvent(nearestParty));
      setUpcomingEvent(nearestParty);
    }
  }, [parties]);

  const navigate = useNavigate();
  const onClickNewEvent = () => {
    navigate("/new");
  };

  const onCardClick = () => {
    if (upcomingEvent) navigate(`/party/${upcomingEvent.id}`);
  };

  return (
    <>
      {upcomingEvent && (
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
            {upcomingEvent ? upcomingEvent.title : "No Upcoming House Party"}
          </div>
          <div
            className='lightText'
            style={{ margin: "0.5rem 0" }}
          >
            {!upcomingEvent && "Plan your house party"}
            {upcomingEvent && `${daysToNextEvent} Days to go`}
          </div>

          {!upcomingEvent && (
            <Button
              onClick={onClickNewEvent}
              variant='cta'
            >
              Create a new event
            </Button>
          )}

          {upcomingEvent && (
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
            src={upcomingEvent ? calendarImage : checkListImage}
            style={{ width: "68px" }}
          />
        </div>
      </div>
    </>
  );
};

export default UpcomingPartiesCard;
