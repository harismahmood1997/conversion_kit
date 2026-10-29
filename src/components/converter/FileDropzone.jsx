import { useRef, useState } from 'react';

export default function FileDropzone({ accept, onFile, maxSizeMB = 300 }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
      onFile(null, `File too large. Max ${maxSizeMB} MB.`);
      return;
    }
    onFile(file, null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      className={`dropzone ${dragging ? 'dropzone--active' : ''}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <div className="dropzone__icon">📁</div>
      <p className="dropzone__text">Drag &amp; drop your {accept.toUpperCase()} here</p>
      <p className="dropzone__hint">or click to browse · max {maxSizeMB} MB</p>
      <input
        ref={inputRef}
        type="file"
        accept={`.${accept}`}
        hidden
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}