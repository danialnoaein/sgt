import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import styled from "styled-components";

// interface IButton extends ButtonHTMLAttributes{
//   text: string;
//   fullWidth?: boolean;
//   disabled?: boolean;
// }

// const Button: React.FC<IButton> = ({ text, fullWidth, disabled }) => {
//   return (
//     <button
//       disabled={disabled}
//       className={`${styles.button} ${fullWidth && styles.fullWidth}`}
//     >
//       {text}
//     </button>
//   );
// };

const Button = styled.button`
  border-radius: 0.5rem;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  margin-top: 0.25rem;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  background-color: #76a9ff;
  outline: 0;
  border: 0;
  text-align: center;
  color: #ffffff;
  font-size: 1rem;
  &.fullWidth {
    display: block;
    width: 100%;
  }
  &[disabled] {
    opacity: 0.5;
  }
`;

export default Button;
