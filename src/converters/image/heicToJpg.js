import heic2any from 'heic2any';

export async function heicToJpg(file, onProgress) {
  if (onProgress) onProgress(10);

  const result = await heic2any({
    blob: file,
    toType: 'image/jpeg',
    quality: 0.9,
  });

  if (onProgress) onProgress(100);

  return Array.isArray(result) ? result[0] : result;
}