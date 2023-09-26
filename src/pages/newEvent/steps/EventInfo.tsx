import { useState } from "react";
import Button from "../../../components/Button";

import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const EventInfo = () => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const onClickSubmit = () => {
    navigate("/new/3");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={37.5} />

      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>Event Name</div>

      <Button disabled={!isSelected} onClick={onClickSubmit}>
        Next
      </Button>
    </div>
  );
};

export default EventInfo;
