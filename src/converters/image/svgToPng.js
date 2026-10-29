export async function svgToPng(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      // SVGs can sometimes have a 0 width/height, so we default to 800x600 if missing
      canvas.width = img.width || 800;
      canvas.height = img.height || 600;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Conversion failed'));
      }, 'image/png');
    };
    img.onerror = () => reject(new Error('Invalid SVG file'));
    
    // Convert the SVG file to a data URL so the Image object can read it
    const reader = new FileReader();
    reader.onload = (e) => { img.src = e.target.result; };
    reader.readAsDataURL(file);
  });
}