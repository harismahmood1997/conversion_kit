import { fetchFile } from '@ffmpeg/util';
import { getFFmpeg } from '../../services/ffmpeg';

export async function mp4ToMp3(file, onProgress) {
  const ffmpeg = await getFFmpeg();

  const handleProgress = ({ progress }) => {
    if (onProgress) onProgress(Math.round(progress * 100));
  };
  ffmpeg.on('progress', handleProgress);

  const inputName = 'input.mp4';
  const outputName = 'output.mp3';

  await ffmpeg.writeFile(inputName, await fetchFile(file));
  await ffmpeg.exec(['-i', inputName, '-vn', '-ab', '192k', outputName]);

  const data = await ffmpeg.readFile(outputName);
  const blob = new Blob([data.buffer], { type: 'audio/mpeg' });

  await ffmpeg.deleteFile(inputName);
  await ffmpeg.deleteFile(outputName);
  ffmpeg.off('progress', handleProgress);

  return blob;
}