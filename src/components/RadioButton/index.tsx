import styles from "./RadioButton.module.css";

interface IRadioButtonProps<T> {
  name: string;
  label: string;
  value: T;
  onChoose: (value: T) => void;
}
const RadioButton = <T extends any>({
  name,
  label,
  value,
  onChoose,
}: IRadioButtonProps<T>) => {
  return (
    <label className={`${styles.container}`}>
      <input onChange={() => onChoose(value)} type="radio" name={name} />
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
