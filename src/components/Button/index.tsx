import styled from "styled-components";

const Button = styled.button`
  border-radius: 0.5rem;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  margin-top: 0.25rem;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  background-color: #76a9ff;
  outline: 0;
  border: 0;
  text-align: center;
  color: #ffffff;
  font-size: 0.9rem;
  &.fullWidth {
    display: block;
    width: 100%;
  }
  &.pageSubmit {
    position: fixed;
    bottom: 1rem;
    width: calc(100vw - 2rem);
    left: 1rem;
  }
  &[disabled] {
    opacity: 0.5;
  }
`;

export default Button;
