import RadioButton from "../../../components/RadioButton";

const Occasion = () => {
  const onRadioChoose = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div style={{ fontWeight: "bold", margin: "0.75rem 0" }}>
        What is the occasion?
      </div>
      <div>
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"1"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"2"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"3"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"4"} />
        <RadioButton name={"occasion"} onChoose={onRadioChoose} value={"5"} />
      </div>
    </>
  );
};

export default Occasion;
