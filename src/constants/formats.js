export const FORMATS = {
  // Documents
  pdf:  { mime: 'application/pdf', ext: '.pdf', category: 'document' },
  docx: { mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', ext: '.docx' },
  txt:  { mime: 'text/plain', ext: '.txt' },
  odt:  { mime: 'application/vnd.oasis.opendocument.text', ext: '.odt' },
  rtf:  { mime: 'application/rtf', ext: '.rtf' },
  md:   { mime: 'text/markdown', ext: '.md' },

  // Images
  jpg:  { mime: 'image/jpeg', ext: '.jpg' },
  png:  { mime: 'image/png', ext: '.png' },
  webp: { mime: 'image/webp', ext: '.webp' },
  heic: { mime: 'image/heic', ext: '.heic' },
  svg:  { mime: 'image/svg+xml', ext: '.svg' },
  gif:  { mime: 'image/gif', ext: '.gif' },
  bmp:  { mime: 'image/bmp', ext: '.bmp' },
  tiff: { mime: 'image/tiff', ext: '.tiff' },
  avif: { mime: 'image/avif', ext: '.avif' },
  ico:  { mime: 'image/x-icon', ext: '.ico' },

  // Audio
  mp3:  { mime: 'audio/mpeg', ext: '.mp3' },
  wav:  { mime: 'audio/wav', ext: '.wav' },
  flac: { mime: 'audio/flac', ext: '.flac' },
  aac:  { mime: 'audio/aac', ext: '.aac' },
  ogg:  { mime: 'audio/ogg', ext: '.ogg' },
  m4a:  { mime: 'audio/mp4', ext: '.m4a' },
  wma:  { mime: 'audio/x-ms-wma', ext: '.wma' },

  // Video
  mp4:  { mime: 'video/mp4', ext: '.mp4' },
  avi:  { mime: 'video/x-msvideo', ext: '.avi' },
  mov:  { mime: 'video/quicktime', ext: '.mov' },
  mkv:  { mime: 'video/x-matroska', ext: '.mkv' },
  webm: { mime: 'video/webm', ext: '.webm' },
  wmv:  { mime: 'video/x-ms-wmv', ext: '.wmv' },
  flv:  { mime: 'video/x-flv', ext: '.flv' },
  '3gp':{ mime: 'video/3gpp', ext: '.3gp' },

  // Ebooks
  epub: { mime: 'application/epub+zip', ext: '.epub' },
  mobi: { mime: 'application/x-mobipocket-ebook', ext: '.mobi' },
  azw:  { mime: 'application/vnd.amazon.ebook', ext: '.azw' },

  // Archives
  zip:  { mime: 'application/zip', ext: '.zip' },
  rar:  { mime: 'application/vnd.rar', ext: '.rar' },
  '7z': { mime: 'application/x-7z-compressed', ext: '.7z' },
  tar:  { mime: 'application/x-tar', ext: '.tar' },

  // Data
  json: { mime: 'application/json', ext: '.json' },
  xml:  { mime: 'application/xml', ext: '.xml' },
  csv:  { mime: 'text/csv', ext: '.csv' },
  xlsx: { mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', ext: '.xlsx' },

  // CAD / 3D
  dwg:  { mime: 'application/acad', ext: '.dwg' },
  dxf:  { mime: 'application/dxf', ext: '.dxf' },
  stl:  { mime: 'model/stl', ext: '.stl' },
  obj:  { mime: 'model/obj', ext: '.obj' },
};