import * as pdfjsLib from 'pdfjs-dist';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';


//pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export async function pdfToWord(file, onProgress) {
  if (onProgress) onProgress(10);

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  
  let allText = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    
    const pageText = textContent.items.map(item => item.str).join(' ');
    allText += pageText + '\n\n';

    if (onProgress) {
      const percent = Math.round((i / pdf.numPages) * 80) + 10;
      onProgress(percent);
    }
  }

  const paragraphs = allText.split('\n').map(line => 
    new Paragraph({
      children: [new TextRun(line)],
    })
  );

  const doc = new Document({
    sections: [{ properties: {}, children: paragraphs }],
  });

  const blob = await Packer.toBlob(doc);
  
  if (onProgress) onProgress(100);
  return blob;
}