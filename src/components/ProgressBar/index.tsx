interface IProgress {
  progress: number;
}

const ProgressBar: React.FC<IProgress> = ({ progress }) => {
  return (
    <div>
      <div
        style={{
          height: "4px",
          margin: "0.5rem 0",
          background: "var(--primary-color)",
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
