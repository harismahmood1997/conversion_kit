import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FileDropzone from './FileDropzone';
import ProgressBar from './ProgressBar';
import DownloadButton from './DownloadButton';
import AdBanner from '../ads/AdBanner';

export default function ConverterShell({ tool, converter }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);

  const fromLabel = tool.from.toUpperCase();
  const toLabel = tool.to.toUpperCase();
  // Fixed the &amp; issue here
  const title = `${fromLabel} to ${toLabel} Converter — Free & Private`;

  const handleFile = (f, err) => {
    setError(err);
    setFile(f);
    setResult(null);
    setProgress(0);
  };

  const handleConvert = async () => {
    if (!file) return;
    setBusy(true);
    setError(null);
    setProgress(0);
    try {
      const blob = await converter(file, setProgress);
      setResult(blob);
      setProgress(100);
    } catch (e) {
      setError(e.message || 'Conversion failed.');
    } finally {
      setBusy(false);
    }
  };

  const downloadName = `converted.${tool.to}`;

  return (
    <>
      <Helmet>
        <title>{`${fromLabel} to ${toLabel} Converter — ConvertKit`}</title>
        <meta name="description" content={`Convert ${fromLabel} to ${toLabel} free, in your browser. No upload, no signup, no limits.`} />
      </Helmet>

      <div className="tool-header">
        <h1>{fromLabel} to {toLabel} Converter</h1>
        <p>Fast, free, and 100% private — files never leave your browser.</p>
      </div>

      <div className="converter-card">
        {!file && (
          <FileDropzone accept={tool.from} onFile={handleFile} maxSizeMB={200} />
        )}

        {file && (
          <div className="file-preview">
            <span>📄</span>
            <span className="file-preview__name">{file.name}</span>
            <span className="file-preview__size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
            <button className="file-preview__remove" onClick={() => { setFile(null); setResult(null); }}>
              ✕
            </button>
          </div>
        )}

        {error && <div className="error-msg">{error}</div>}

        {busy && <ProgressBar progress={progress} />}

        {file && !result && (
          <button className="btn btn--primary" disabled={busy} onClick={handleConvert}>
            {busy ? 'Converting...' : `Convert to ${toLabel}`}
          </button>
        )}

        {result && <DownloadButton blob={result} filename={downloadName} />}
      </div>

      {/* AD BANNER PLACED HERE - Between tool and SEO content */}
      <AdBanner />

      <div className="seo-content">
        <h2>How to convert {fromLabel} to {toLabel}</h2>
        <ol>
          <li>Upload your {fromLabel} file using the box above.</li>
          <li>Click the <strong>Convert</strong> button.</li>
          <li>Download your {toLabel} file instantly.</li>
        </ol>

        <h2>Why use ConvertKit?</h2>
        <ul>
          <li>Works entirely in your browser — no file uploads.</li>
          <li>100% free, no signup, no watermark.</li>
          <li>Fast and private.</li>
        </ul>
      </div>
    </>
  );
}