import styles from "./RadioButton.module.css";

interface IRadioButton {
  name: string;
  value: string;
  onChoose: (value: string) => void;
}
const RadioButton: React.FC<IRadioButton> = ({ name, value, onChoose }) => {
  return (
    <label className={`${styles.container}`}>
      <input onChange={() => onChoose(value)} type="radio" name={name} />
      <span className={`${styles.radiobtn}`}>{value}</span>
    </label>
  );
};

export default RadioButton;
