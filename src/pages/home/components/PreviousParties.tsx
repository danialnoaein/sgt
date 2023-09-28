import PreviousPartyCard from "./PreviousPartyCard";

const PreviousParties = () => {
  const hasPreviousEvent = false;

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Previous House Parties</div>
      {hasPreviousEvent && <div>There is no previous event!</div>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <PreviousPartyCard />
        <PreviousPartyCard />
      </div>
    </div>
  );
};

export default PreviousParties;
