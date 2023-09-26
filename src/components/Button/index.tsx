import styles from "./Button.module.css";

interface IButton {
  text: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({ text, fullWidth, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${fullWidth && styles.fullWidth}`}
    >
      {text}
    </button>
  );
};

export default Button;
