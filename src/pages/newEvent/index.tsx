import { Outlet } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import ProgressBar from "../../components/ProgressBar";

const NewEvent = () => {
  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <div>back</div>
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
