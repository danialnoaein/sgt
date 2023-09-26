import { Outlet, useNavigate, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import LeftArrowIcon from "../../assets/left-arrow.svg";
import Occasion from "./steps/Occasion";
import GuestsSize from "./steps/GuestsSize";
import EventInfo from "./steps/EventInfo";
import EInvite from "./steps/EInvite";
import Food from "./steps/Food";
import Alcohol from "./steps/Alcohol";
import Decorator from "./steps/Decorator";
import BoardGame from "./steps/BoardGame";
import { useEffect, useState } from "react";

const steps = [
  {
    element: <Occasion />,
  },
  {
    element: <GuestsSize />,
  },
  {
    element: <EventInfo />,
  },
  {
    element: <EInvite />,
  },
  {
    element: <Food />,
  },
  {
    element: <Alcohol />,
  },
  {
    element: <Decorator />,
  },
  {
    element: <BoardGame />,
  },
];

const NewEvent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const onBackButtonClick = () => navigate(-1);

  useEffect(() => {
    if (params.id) {
      const stepFromIdParam = parseInt(params.id!);
      setStep(stepFromIdParam);
    }
  }, [params]);

  console.log(params);

  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <div onClick={onBackButtonClick}>
          <img
            style={{ width: "24px", marginRight: "1rem" }}
            src={LeftArrowIcon}
            alt=""
          />
        </div>
        <div style={{ flex: "1", fontWeight: "bold" }}>Create a New Event</div>
      </div>

      <div>{steps[step].element}</div>
    </PageContainer>
  );
};

export default NewEvent;
