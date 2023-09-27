import Button from "../../../components/Button";

import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const EventInfo = () => {
  const navigate = useNavigate();

  const onClickSubmit = () => {
    navigate("/new/4");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={37.5} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>Event Name</div>
      <div>
        <input type="text" />
      </div>

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>Event Name</div>
      <div>
        <input type="text" />
      </div>

      <Button onClick={onClickSubmit}>Next</Button>
    </div>
  );
};

export default EventInfo;
