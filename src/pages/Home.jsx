import { Link } from 'react-router';
import { getActiveTools } from '../constants/toolRegistry';

export default function Home() {
  const tools = getActiveTools();
  const grouped = tools.reduce((acc, t) => {
    (acc[t.category] ||= []).push(t);
    return acc;
  }, {});

  return (
    <>
      <div className="home-hero">
        <h1>Free Online File Converters</h1>
        <p>Fast, private, and 100% free — running entirely in your browser.</p>
      </div>

      {Object.entries(grouped).map(([cat, list]) => (
        <section key={cat} className="category-section">
          <h2>{cat}</h2>
          <div className="tool-grid">
            {list.map(tool => (
              <Link key={tool.slug} to={`/tools/${tool.slug}`} className="tool-card">
                <div className="tool-card__title">
                  {tool.from.toUpperCase()} → {tool.to.toUpperCase()}
                </div>
                <div className="tool-card__cat">{tool.category}</div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}