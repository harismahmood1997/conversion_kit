import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../layouts/MainLayout';

export default function LegalPage() {
  const { pathname } = useLocation();
  
  // Simple routing logic based on the URL path
  let title = "Legal Information";
  let content = null;

  if (pathname === '/privacy') {
    title = "Privacy Policy";
    content = (
      <>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Data Processing</h2>
        <p>Our file converters run entirely in your browser. This means <strong>your files are never uploaded to our servers</strong>, and we do not store, view, or share your files.</p>
        <h2>2. Analytics and Ads</h2>
        <p>We use third-party advertising companies (like Google AdSense) to serve ads. These companies may use cookies to serve ads based on your prior visits to this and other websites.</p>
        <h2>3. Contact Us</h2>
        <p>If you have questions about this policy, please contact us via our Contact page.</p>
      </>
    );
  } else if (pathname === '/terms') {
    title = "Terms of Service";
    content = (
      <>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By using ConvertKit, you agree to these terms. Our tools are provided "as is" without warranties of any kind.</p>
        <h2>2. Acceptable Use</h2>
        <p>You agree to use our tools only for lawful purposes. You must own the rights to any files you convert. You may not use our tools to process illegal, copyrighted, or harmful content.</p>
        <h2>3. Limitation of Liability</h2>
        <p>We are not responsible for any data loss or damages resulting from the use of our tools.</p>
      </>
    );
  } else if (pathname === '/about') {
    title = "About Us";
    content = (
      <>
        <h2>Our Mission</h2>
        <p>ConvertKit was built to provide fast, secure, and 100% private file conversion tools for everyone.</p>
        <p>Unlike other websites, we don't force you to upload your private files to a server or sign up for an account. By leveraging modern browser technology (WebAssembly), all the hard work happens right on your device.</p>
      </>
    );
  } else if (pathname === '/contact') {
    title = "Contact Us";
    content = (
      <>
        <h2>Get in Touch</h2>
        <p>If you have any questions, feedback, or business inquiries, please email us at:</p>
        <p><strong>support@convertkit-demo.com</strong></p>
        <p>(Replace this email with your actual contact email before applying for AdSense).</p>
      </>
    );
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{title} — ConvertKit</title>
      </Helmet>
      <div className="tool-header" style={{ textAlign: 'left', paddingBottom: '20px' }}>
        <h1>{title}</h1>
      </div>
      <div className="seo-content" style={{ margin: '0', maxWidth: '800px' }}>
        {content}
      </div>
    </MainLayout>
  );
}