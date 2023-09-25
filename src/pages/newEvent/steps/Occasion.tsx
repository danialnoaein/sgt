import RadioButton from "../../../components/RadioButton";

const Occasion = () => {
  return (
    <>
      <div>What is the occasion?</div>
      <div>
        <RadioButton name={"occasion"} />
        <RadioButton name={"occasion"} />
        <RadioButton name={"occasion"} />
      </div>
    </>
  );
};

export default Occasion;
