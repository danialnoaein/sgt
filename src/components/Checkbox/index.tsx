import styles from "./Checkbox.module.css";

interface ICheckboxProps<T> {
  name: string;
  label: string;
  subLabel?: string;
  value: T;
  onCheck: (value: T) => void;
}
const Checkbox = <T extends any>({
  name,
  label,
  subLabel,
  value,
  onCheck,
}: ICheckboxProps<T>) => {
  return (
    <label className={`${styles.container}`}>
      <input
        onChange={() => onCheck(value)}
        type='checkbox'
        name={name}
      />
      <div>
        <span>{label}</span>
        {subLabel && <span className={`${styles.subLabel}`}>{subLabel}</span>}
      </div>
    </label>
  );
};

export default Checkbox;
