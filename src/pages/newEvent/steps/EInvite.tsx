import { useState } from "react";
import Button from "../../../components/Button";
import RadioButton from "../../../components/RadioButton";
import ProgressBar from "../../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import letterImage from "../../../../public/letter.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateDraftPartyCheckList } from "../../../store/slices/partySlice";
import { RootState } from "../../../store/store";

const EInvite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const draftParty = useSelector((state: RootState) => state.party.draftParty);
  const [isSelected, setIsSelected] = useState(
    draftParty.checkList?.hasOwnProperty("eInvite")
  );
  const [selected, setSelected] = useState<any>(
    draftParty.checkList && draftParty.checkList.eInvite
  );

  const onRadioChoose = (value: boolean) => {
    setIsSelected(true);
    setSelected(value);
  };
  const onClickSubmit = () => {
    dispatch(updateDraftPartyCheckList({ key: "eInvite", value: selected }));
    navigate("/new/4");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressBar progress={50} />

      <div style={{ margin: "1rem auto" }}>
        <img
          src={letterImage}
          alt='Letter'
        />
      </div>
      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        Do you want to send e-invite?
      </div>
      <div style={{ flex: 1 }}>
        <RadioButton
          name={"SEND_E_INVITE"}
          onChoose={onRadioChoose}
          value={true}
          defaultValue={selected}
          label={"Yes"}
        />
        <RadioButton
          name={"SEND_E_INVITE"}
          onChoose={onRadioChoose}
          value={false}
          defaultValue={selected}
          label={"No"}
        />
      </div>

      <Button
        disabled={!isSelected}
        onClick={onClickSubmit}
        className='pageSubmit'
        variant='newEventSubmit'
      >
        Next
      </Button>
    </div>
  );
};

export default EInvite;
