import styles from "./Button.module.css";

interface IButton {
  text: string;
  fullWidth?: boolean;
}

const Button: React.FC<IButton> = ({ text, fullWidth }) => {
  return (
    <div className={`${styles.button} ${fullWidth && styles.fullWidth}`}>
      {text}
    </div>
  );
};

export default Button;
