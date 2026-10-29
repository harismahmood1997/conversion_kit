import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

let ffmpegInstance = null;
let loading = false;

const CORE_BASE = 'https://unpkg.com/@ffmpeg/core@0.12.10/dist/esm';

export async function getFFmpeg(onLog) {
  if (ffmpegInstance) return ffmpegInstance;
  if (loading) {
    while (loading) await new Promise(r => setTimeout(r, 100));
    return ffmpegInstance;
  }

  loading = true;
  const ffmpeg = new FFmpeg();

  if (onLog) ffmpeg.on('log', ({ message }) => onLog(message));

  await ffmpeg.load({
    coreURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.wasm`, 'application/wasm'),
  });

  ffmpegInstance = ffmpeg;
  loading = false;
  return ffmpeg;
}