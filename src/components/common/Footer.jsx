import { Link } from 'react-router';
import { getActiveCategories } from '../../constants/toolRegistry';

export default function Footer() {
  const categories = getActiveCategories();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
  <h4>ConvertKit</h4>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/privacy">Privacy Policy</Link></li>
    <li><Link to="/terms">Terms of Service</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</div>
        <div className="footer__col">
          <h4>Categories</h4>
          <ul>
            {categories.map(cat => (
              <li key={cat}><Link to={`/${cat}`}>{cat}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} ConvertKit. All rights reserved.
      </div>
    </footer>
  );
}