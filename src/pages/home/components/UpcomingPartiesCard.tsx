import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import calendarImage from "../../../../public/calendar.png";
import checkList from "../../../../public/checkList.png";
const UpcomingPartiesCard = () => {
  const navigate = useNavigate();
  const onClickNewEvent = () => {
    navigate("/new/1");
  };

  return (
    <div
      style={{
        padding: "1rem",
        background:
          "linear-gradient(90deg, rgba(80,88,106,1) 0%, rgba(30,37,48,1) 100%)",
        borderRadius: "0.5rem",
        margin: "0.75rem 0",
        display: "flex",
      }}
    >
      <div style={{ flex: "1" }}>
        <div style={{ fontWeight: "bold" }}>No Upcoming House Party</div>
        <div style={{ fontSize: "0.8rem", margin: "0.5rem 0" }}>
          Plan your house party
        </div>

        <Button onClick={onClickNewEvent}>Create a new event</Button>
      </div>
      <div>
        <img
          src={checkList}
          style={{ width: "76px" }}
        />
      </div>
    </div>
  );
};

export default UpcomingPartiesCard;
