import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../layouts/MainLayout';
import ConverterShell from '../components/converter/ConverterShell';
import { getToolBySlug } from '../constants/toolRegistry';
import { CONVERTERS } from '../converters';
import NotFound from './NotFound';

export default function AllTools() {
  const { slug } = useParams();
  const tool = getToolBySlug(slug);

  if (!tool || tool.status !== 'active') {
    return (
      <MainLayout>
        <NotFound />
      </MainLayout>
    );
  }

  const converter = CONVERTERS[slug];

  if (!converter) {
    return (
      <MainLayout>
        <Helmet>
          <title>Coming Soon — ConvertKit</title>
        </Helmet>
        <div className="tool-header">
          <h1>{tool.from.toUpperCase()} to {tool.to.toUpperCase()}</h1>
          <p>This converter is coming soon.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ConverterShell tool={tool} converter={converter} />
    </MainLayout>
  );
}