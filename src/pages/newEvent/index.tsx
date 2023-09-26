import { Outlet } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import ProgressBar from "../../components/ProgressBar";
import LeftArrowIcon from "../../assets/left-arrow.svg";
const NewEvent = () => {
  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <div>
          <img
            style={{ width: "24px", marginRight: "1rem" }}
            src={LeftArrowIcon}
            alt=""
          />
        </div>
        <div style={{ flex: "1", fontWeight: "bold" }}>Create a New Event</div>
      </div>
      <ProgressBar progress={20} />

      <div>
        <Outlet />
      </div>
    </PageContainer>
  );
};

export default NewEvent;
