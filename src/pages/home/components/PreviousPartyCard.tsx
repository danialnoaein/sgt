import cakeIcon from "../../../../public/cakeIcon.svg";
import dishIcon from "../../../../public/dishIcon.svg";
import glassesIcon from "../../../../public/glassesIcon.svg";
import heartsIcon from "../../../../public/heartsIcon.svg";
import starsIcon from "../../../../public/starsIcon.svg";

const PreviousPartyCard = () => {
  return (
    <div
      style={{
        background: "#1c1c1c",
        borderRadius: "0.75rem",
        padding: "1rem",
        display: "flex",
        gap: "0.25rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #D898FF",
          background: "#251B27",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
        }}
      >
        <img
          src={cakeIcon}
          style={{ width: "20px", margin: "0 auto" }}
        />
      </div>
      <div style={{ fontWeight: "bold" }}>Shravya’s Birthday</div>
      <div style={{ color: "#ADADAD" }}>14-07-2021</div>
      <div style={{ color: "#ADADAD" }}>8:00 PM</div>
    </div>
  );
};

export default PreviousPartyCard;
