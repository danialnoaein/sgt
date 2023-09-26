import { Outlet, useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import LeftArrowIcon from "../../assets/left-arrow.svg";
const NewEvent = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(-1);
  };
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

      <div>
        <Outlet />
      </div>
    </PageContainer>
  );
};

export default NewEvent;
