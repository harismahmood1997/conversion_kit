import { useParams, Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../layouts/MainLayout';
import NotFound from './NotFound';
import { getActiveToolsByCategory } from '../constants/toolRegistry';

export default function CategoryPage() {
  const { category } = useParams();
  const tools = getActiveToolsByCategory(category);

  if (tools.length === 0) {
    return (
      <MainLayout>
        <NotFound />
      </MainLayout>
    );
  }

  const catLabel = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <MainLayout>
      <Helmet>
        <title>{`${catLabel} Converters — ConvertKit`}</title>
        <meta
          name="description"
          content={`All free ${category} converters — fast, private, and browser-based.`}
        />
      </Helmet>

      <div className="tool-header">
        <h1>{catLabel} Converters</h1>
        <p>All free, browser-based {category} conversion tools.</p>
      </div>

      <div className="tool-grid">
        {tools.map((tool) => (
          <Link key={tool.slug} to={`/tools/${tool.slug}`} className="tool-card">
            <div className="tool-card__title">
              {tool.from.toUpperCase()} → {tool.to.toUpperCase()}
            </div>
            <div className="tool-card__cat">{tool.category}</div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}