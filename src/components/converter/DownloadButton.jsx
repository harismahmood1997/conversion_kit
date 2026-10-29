export default function DownloadButton({ blob, filename }) {
  const url = URL.createObjectURL(blob);
  return (
    <a href={url} download={filename} className="btn btn--success" style={{ marginTop: 'var(--space-4)' }}>
      ⬇ Download {filename.split('.').pop().toUpperCase()}
    </a>
  );
}