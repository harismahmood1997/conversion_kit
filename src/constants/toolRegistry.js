
export const TOOL_REGISTRY = [

  // ═══════════════════════════════════════════════════════════
  // 📄 DOCUMENT CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'docx-to-pdf',  category: 'document', from: 'docx', to: 'pdf',  status: 'disabled'   },
  { slug: 'pdf-to-word',  category: 'document', from: 'pdf',  to: 'docx', status: 'active'   },
  { slug: 'pdf-to-docx',  category: 'document', from: 'pdf',  to: 'docx', status: 'disabled' },
  { slug: 'txt-to-pdf',   category: 'document', from: 'txt',  to: 'pdf',  status: 'active'   },
  { slug: 'pdf-to-txt',   category: 'document', from: 'pdf',  to: 'txt',  status: 'disabled' },
  { slug: 'pdf-to-jpg',   category: 'document', from: 'pdf',  to: 'jpg',  status: 'disabled' },
  { slug: 'jpg-to-pdf',   category: 'document', from: 'jpg',  to: 'pdf',  status: 'disabled' },
  { slug: 'odt-to-pdf',   category: 'document', from: 'odt',  to: 'pdf',  status: 'disabled' },
  { slug: 'pdf-to-odt',   category: 'document', from: 'pdf',  to: 'odt',  status: 'disabled' },
  { slug: 'rtf-to-pdf',   category: 'document', from: 'rtf',  to: 'pdf',  status: 'disabled' },
  { slug: 'pdf-to-rtf',   category: 'document', from: 'pdf',  to: 'rtf',  status: 'disabled' },
  { slug: 'md-to-pdf',    category: 'document', from: 'md',   to: 'pdf',  status: 'disabled' },
  { slug: 'pdf-to-md',    category: 'document', from: 'pdf',  to: 'md',   status: 'disabled' },

  // ═══════════════════════════════════════════════════════════
  // 🖼️ IMAGE CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'heic-to-jpg',  category: 'image', from: 'heic', to: 'jpg',  status: 'active'   },
  { slug: 'jpg-to-heic',  category: 'image', from: 'jpg',  to: 'heic', status: 'disabled' },
  { slug: 'jpg-to-png',   category: 'image', from: 'jpg',  to: 'png',  status: 'active'   },
  { slug: 'png-to-jpg',   category: 'image', from: 'png',  to: 'jpg',  status: 'active'   },
  { slug: 'webp-to-jpg',  category: 'image', from: 'webp', to: 'jpg',  status: 'active'   },
  { slug: 'jpg-to-webp',  category: 'image', from: 'jpg',  to: 'webp', status: 'active'   },
  { slug: 'png-to-webp',  category: 'image', from: 'png',  to: 'webp', status: 'disabled' },
  { slug: 'webp-to-png',  category: 'image', from: 'webp', to: 'png',  status: 'disabled' },
  { slug: 'svg-to-png',   category: 'image', from: 'svg',  to: 'png',  status: 'active' },
  { slug: 'png-to-svg',   category: 'image', from: 'png',  to: 'svg',  status: 'disabled' },
  { slug: 'gif-to-png',   category: 'image', from: 'gif',  to: 'png',  status: 'disabled' },
  { slug: 'png-to-gif',   category: 'image', from: 'png',  to: 'gif',  status: 'disabled' },
  { slug: 'bmp-to-jpg',   category: 'image', from: 'bmp',  to: 'jpg',  status: 'disabled' },
  { slug: 'jpg-to-bmp',   category: 'image', from: 'jpg',  to: 'bmp',  status: 'disabled' },
  { slug: 'tiff-to-jpg',  category: 'image', from: 'tiff', to: 'jpg',  status: 'disabled' },
  { slug: 'jpg-to-tiff',  category: 'image', from: 'jpg',  to: 'tiff', status: 'disabled' },
  { slug: 'avif-to-jpg',  category: 'image', from: 'avif', to: 'jpg',  status: 'disabled' },
  { slug: 'jpg-to-avif',  category: 'image', from: 'jpg',  to: 'avif', status: 'disabled' },
  { slug: 'ico-to-png',   category: 'image', from: 'ico',  to: 'png',  status: 'disabled' },
  { slug: 'png-to-ico',   category: 'image', from: 'png',  to: 'ico',  status: 'disabled' },

  // ═══════════════════════════════════════════════════════════
  // 🎵 AUDIO CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'mp4-to-mp3',   category: 'audio', from: 'mp4',  to: 'mp3',  status: 'active'   },
  { slug: 'wav-to-mp3',   category: 'audio', from: 'wav',  to: 'mp3',  status: 'active'   },
  { slug: 'mp3-to-wav',   category: 'audio', from: 'mp3',  to: 'wav',  status: 'disabled' },
  { slug: 'flac-to-mp3',  category: 'audio', from: 'flac', to: 'mp3',  status: 'disabled' },
  { slug: 'mp3-to-flac',  category: 'audio', from: 'mp3',  to: 'flac', status: 'disabled' },
  { slug: 'm4a-to-mp3',   category: 'audio', from: 'm4a',  to: 'mp3',  status: 'disabled' },
  { slug: 'mp3-to-m4a',   category: 'audio', from: 'mp3',  to: 'm4a',  status: 'disabled' },
  { slug: 'aac-to-mp3',   category: 'audio', from: 'aac',  to: 'mp3',  status: 'disabled' },
  { slug: 'ogg-to-mp3',   category: 'audio', from: 'ogg',  to: 'mp3',  status: 'disabled' },
  { slug: 'mp3-to-ogg',   category: 'audio', from: 'mp3',  to: 'ogg',  status: 'disabled' },
  { slug: 'wma-to-mp3',   category: 'audio', from: 'wma',  to: 'mp3',  status: 'disabled' },

  // ═══════════════════════════════════════════════════════════
  // 🎬 VIDEO CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'mov-to-mp4',   category: 'video', from: 'mov',  to: 'mp4',  status: 'active'   },
  { slug: 'mkv-to-mp4',   category: 'video', from: 'mkv',  to: 'mp4',  status: 'disabled' },
  { slug: 'webm-to-mp4',  category: 'video', from: 'webm', to: 'mp4',  status: 'disabled' },
  { slug: 'avi-to-mp4',   category: 'video', from: 'avi',  to: 'mp4',  status: 'disabled' },
  { slug: 'mp4-to-avi',   category: 'video', from: 'mp4',  to: 'avi',  status: 'disabled' },
  { slug: 'mp4-to-mov',   category: 'video', from: 'mp4',  to: 'mov',  status: 'disabled' },
  { slug: 'mp4-to-webm',  category: 'video', from: 'mp4',  to: 'webm', status: 'disabled' },
  { slug: 'wmv-to-mp4',   category: 'video', from: 'wmv',  to: 'mp4',  status: 'disabled' },
  { slug: 'flv-to-mp4',   category: 'video', from: 'flv',  to: 'mp4',  status: 'disabled' },
  { slug: '3gp-to-mp4',   category: 'video', from: '3gp',  to: 'mp4',  status: 'disabled' },
  { slug: 'mkv-to-mp3',   category: 'video', from: 'mkv',  to: 'mp3',  status: 'disabled' },
  { slug: 'mov-to-mp3',   category: 'video', from: 'mov',  to: 'mp3',  status: 'disabled' },
  { slug: 'avi-to-mp3',   category: 'video', from: 'avi',  to: 'mp3',  status: 'disabled' },

  // ═══════════════════════════════════════════════════════════
  // 📚 E-BOOK CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'epub-to-pdf',  category: 'ebook', from: 'epub', to: 'pdf',  status: 'disabled' },
  { slug: 'pdf-to-epub',  category: 'ebook', from: 'pdf',  to: 'epub', status: 'disabled' },
  { slug: 'mobi-to-pdf',  category: 'ebook', from: 'mobi', to: 'pdf',  status: 'disabled' },
  { slug: 'pdf-to-mobi',  category: 'ebook', from: 'pdf',  to: 'mobi', status: 'disabled' },
  { slug: 'epub-to-mobi', category: 'ebook', from: 'epub', to: 'mobi', status: 'disabled' },
  { slug: 'mobi-to-epub', category: 'ebook', from: 'mobi', to: 'epub', status: 'disabled' },
  { slug: 'azw-to-pdf',   category: 'ebook', from: 'azw',  to: 'pdf',  status: 'disabled' },

  // ═══════════════════════════════════════════════════════════
  // 🗜️ ARCHIVE CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'zip-to-rar',   category: 'archive', from: 'zip', to: 'rar', status: 'disabled' },
  { slug: 'rar-to-zip',   category: 'archive', from: 'rar', to: 'zip', status: 'disabled' },
  { slug: 'zip-to-7z',    category: 'archive', from: 'zip', to: '7z',  status: 'disabled' },
  { slug: '7z-to-zip',    category: 'archive', from: '7z',  to: 'zip', status: 'disabled' },
  { slug: 'tar-to-zip',   category: 'archive', from: 'tar', to: 'zip', status: 'disabled' },

  // ═══════════════════════════════════════════════════════════
  // 📊 DATA CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'json-to-csv',  category: 'data', from: 'json', to: 'csv',  status: 'active'   },
  { slug: 'csv-to-json',  category: 'data', from: 'csv',  to: 'json', status: 'active'   },
  { slug: 'xml-to-json',  category: 'data', from: 'xml',  to: 'json', status: 'disabled' },
  { slug: 'json-to-xml',  category: 'data', from: 'json', to: 'xml',  status: 'disabled' },
  { slug: 'csv-to-excel', category: 'data', from: 'csv',  to: 'xlsx', status: 'disabled' },
  { slug: 'excel-to-csv', category: 'data', from: 'xlsx', to: 'csv',  status: 'disabled' },
  { slug: 'xml-to-csv',   category: 'data', from: 'xml',  to: 'csv',  status: 'disabled' },

  // ═══════════════════════════════════════════════════════════
  // 🏗️ CAD / 3D CONVERSIONS
  // ═══════════════════════════════════════════════════════════
  { slug: 'dwg-to-dxf',   category: 'cad', from: 'dwg', to: 'dxf', status: 'disabled' },
  { slug: 'dxf-to-dwg',   category: 'cad', from: 'dxf', to: 'dwg', status: 'disabled' },
  { slug: 'stl-to-obj',   category: 'cad', from: 'stl', to: 'obj', status: 'disabled' },
  { slug: 'obj-to-stl',   category: 'cad', from: 'obj', to: 'stl', status: 'disabled' },

];


// ═══════════════════════════════════════════════════════════
// 🔧 HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

/** Get only tools ready to launch */
export const getActiveTools = () =>
  TOOL_REGISTRY.filter(t => t.status === 'active');

/** Get all tools in a category (regardless of status) */
export const getToolsByCategory = (category) =>
  TOOL_REGISTRY.filter(t => t.category === category);

/** Get only active tools in a category */
export const getActiveToolsByCategory = (category) =>
  TOOL_REGISTRY.filter(t => t.category === category && t.status === 'active');

/** Find a single tool by slug */
export const getToolBySlug = (slug) =>
  TOOL_REGISTRY.find(t => t.slug === slug);

/** Get all categories that have at least one active tool */
export const getActiveCategories = () =>
  [...new Set(getActiveTools().map(t => t.category))];

/** Count tools by status */
export const getToolStats = () => ({
  total: TOOL_REGISTRY.length,
  active: TOOL_REGISTRY.filter(t => t.status === 'active').length,
  disabled: TOOL_REGISTRY.filter(t => t.status === 'disabled').length,
});