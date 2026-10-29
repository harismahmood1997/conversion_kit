import { useEffect } from 'react';
import { getActiveTools } from '../constants/toolRegistry';

export default function Sitemap() {
  useEffect(() => {
    // Get all active tools
    const tools = getActiveTools();
    
    // Create the base XML structure
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add static pages
    const staticPages = ['/', '/about', '/privacy', '/terms', '/contact'];
    staticPages.forEach(page => {
      xml += `  <url>\n    <loc>https://yourdomain.com${page}</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
    });

    // Add dynamic tool pages
    tools.forEach(tool => {
      xml += `  <url>\n    <loc>https://yourdomain.com/tools/${tool.slug}</loc>\n    <changefreq>monthly</changefreq>\n  </url>\n`;
    });
    
    xml += '</urlset>';

    document.body.innerHTML = `<pre style="word-wrap: break-word; white-space: pre-wrap;">${xml.replace(/</g, '&lt;')}</pre>`;
  }, []);

  return null;
}