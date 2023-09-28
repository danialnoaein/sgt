import styled, { css } from "styled-components";

const Button = styled.button<{ variant?: "cta" | "newEventSubmit" }>`
  border-radius: 0.5rem;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  margin-top: 0.25rem;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  background-color: #1c1c1c;
  ${(props) =>
    props.variant === "cta" &&
    css`
      background: #76a9ff;
    `}
  ${(props) =>
    props.variant === "newEventSubmit" &&
    css`
      background: #76a9ff;
      position: fixed;
      bottom: 1rem;
      width: calc(100vw - 2rem);
      left: 1rem;
    `}

  outline: 0;
  border: 0;
  text-align: center;
  color: #ffffff;
  font-size: 0.9rem;
  &.fullWidth {
    display: block;
    width: 100%;
  }
  &[disabled] {
    opacity: 0.5;
  }
`;

export default Button;
