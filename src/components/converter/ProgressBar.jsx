export default function ProgressBar({ progress, label = 'Converting...' }) {
  return (
    <div className="progress">
      <p className="progress__label">{label} {progress}%</p>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}