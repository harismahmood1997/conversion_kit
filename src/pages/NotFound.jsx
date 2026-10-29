import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../layouts/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <Helmet>
        <title>404 Not Found — ConvertKit</title>
      </Helmet>
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '6rem', margin: 0, color: 'var(--color-primary)' }}>404</h1>
        <h2>Oops! Page not found</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
          The tool or page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary" style={{ display: 'inline-block', width: 'auto' }}>
          ← Back to Home
        </Link>
      </div>
    </MainLayout>
  );
}