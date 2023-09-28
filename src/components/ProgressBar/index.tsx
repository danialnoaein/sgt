import styled from "styled-components";

interface IProgress {
  progress: number;
}

const ProgressBarContainer = styled.div`
  margin: 0.5rem 0;
  border-radius: 4px;
  background: var(--grey-800-color);
  & > div {
    height: 2px;
    border-radius: 4px;
    background: var(--primary-color);
  }
`;

const ProgressBar: React.FC<IProgress> = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <div
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </ProgressBarContainer>
  );
};
export default ProgressBar;
