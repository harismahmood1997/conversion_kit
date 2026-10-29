import { jsPDF } from 'jspdf';

export async function txtToPdf(file) {
  const text = await file.text();
  
  const doc = new jsPDF();
  
  const splitText = doc.splitTextToSize(text, 180);
  
  doc.text(splitText, 15, 15);
  
  return doc.output('blob');
}