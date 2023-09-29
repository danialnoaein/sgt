import { useEffect, useState } from "react";
import PreviousPartyCard from "./PreviousPartyCard";
import { useSelector } from "react-redux";
import { IParty } from "../../../store/slices/partySlice";
import { RootState } from "../../../store/store";
import { getPreviousParties } from "../../../utlis/partyArray";

const PreviousParties = () => {
  const parties = useSelector((state: RootState) => state.party.parties);
  const [previousParties, setPreviousParties] = useState<IParty[]>([]);

  useEffect(() => {
    const preParties = getPreviousParties(parties);
    setPreviousParties(preParties);
  }, [parties]);
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Previous House Parties</div>
      {previousParties.length === 0 && <div>There is no previous event!</div>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {previousParties.map((party: IParty) => (
          <PreviousPartyCard
            party={party}
            key={party.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviousParties;
