import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import LeftArrowIcon from "../../assets/left-arrow.svg";
import Checkbox from "../../components/Checkbox";

const Party = () => {
  const params = useParams();
  const navigate = useNavigate();

  const onBackButtonClick = () => navigate(-1);

  useEffect(() => {
    if (params.id) {
      //TODO: load previous events
    }
  }, [params]);

  const onCheckTodo = (value: any) => {
    console.log(value);
  };

  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <div onClick={onBackButtonClick}>
          <img
            style={{ width: "24px", marginRight: "1rem" }}
            src={LeftArrowIcon}
            alt='Back Icon'
          />
        </div>
        <div style={{ flex: "1", fontWeight: "bold" }}>Checklist</div>
      </div>

      <div
        style={{
          margin: "0 -1rem",
          padding: "1rem",
          borderBottom: "1px solid #313131",
          display: "flex",
        }}
      >
        <div style={{ flex: "1" }}>
          <div className='boldText'>Sara’s Birthday Bash</div>
          <div className='lightText'>10 Days to go</div>
        </div>
        <div style={{ margin: "0 1rem" }}>
          <div className='boldText'>0</div>
          <div className='lightText'>Done</div>
        </div>
        <div>
          <div className='boldText'>4</div>
          <div className='lightText'>To Do</div>
        </div>
      </div>

      <div>
        <Checkbox
          label='Create an e-invite'
          value={1}
          name={"checklist"}
          onCheck={onCheckTodo}
        />

        <Checkbox
          label='Create an e-invite'
          value={1}
          name={"checklist"}
          onCheck={onCheckTodo}
          subLabel='Tap to create an e-invite'
        />
      </div>
    </PageContainer>
  );
};

export default Party;
