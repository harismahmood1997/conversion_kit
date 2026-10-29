import { Link, useLocation } from 'react-router';
import { getActiveCategories } from '../../constants/toolRegistry';

export default function Navbar() {
  const location = useLocation();
  const categories = getActiveCategories();

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          Convert<span>Kit</span>
        </Link>
        
        <ul className="navbar__links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <Link 
                to={`/${cat}`} 
                className={location.pathname === `/${cat}` ? 'active' : ''}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}