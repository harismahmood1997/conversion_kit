import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="ad-container" style={{ margin: 'var(--space-6) auto', textAlign: 'center', overflow: 'hidden', minHeight: '90px' }}>
      {/* Notice: className instead of class, and style={{ display: 'none' }} instead of style="display:none" */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'none' }}
        data-ad-client="ca-pub-1090578791798523"
        data-ad-slot="1596505232"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}