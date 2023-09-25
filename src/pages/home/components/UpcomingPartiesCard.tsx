import Button from "../../../components/Button";

const UpcomingPartiesCard = () => {
  return (
    <div
      style={{
        padding: "1rem",
        background: "#444",
        borderRadius: "0.5rem",
        margin: "0.75rem 0",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
        No Upcoming House Party
      </div>
      <div style={{ fontSize: "0.8rem", marginBottom: "0.25rem" }}>
        Plan your house party
      </div>

      <Button text='Create a new event' />
    </div>
  );
};

export default UpcomingPartiesCard;
