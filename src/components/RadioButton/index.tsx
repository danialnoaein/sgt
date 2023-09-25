import styles from "./RadioButton.module.css";

interface IRadioButton {
  name: string;
}
const RadioButton: React.FC<IRadioButton> = ({ name }) => {
  return (
    <label className={`${styles.container}`}>
      One
      <input
        type='radio'
        name={name}
      />
      {/* <span className={`${styles.radiobtn}`}></span> */}
    </label>
  );
};

export default RadioButton;
