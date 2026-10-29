import { mp4ToMp3 } from './audio/mp4ToMp3';
import { heicToJpg } from './image/heicToJpg';
import { pngToJpg } from './image/pngToJpg';
import { jpgToPng } from './image/jpgToPng';
import { wavToMp3 } from './audio/wavToMp3';
import { txtToPdf } from './document/txtToPdf';
import { pdfToWord } from './document/pdfToWord';
import { svgToPng } from './image/svgToPng';
import { webpToJpg } from './image/webpToJpg';


export const CONVERTERS = {
  'mp4-to-mp3': mp4ToMp3,
  'heic-to-jpg': heicToJpg,
  'png-to-jpg': pngToJpg,
  'jpg-to-png': jpgToPng,
  'wav-to-mp3': wavToMp3,
  'txt-to-pdf': txtToPdf,
  'pdf-to-word': pdfToWord,
  'webp-to-jpg': webpToJpg,
  'svg-to-png': svgToPng,


};