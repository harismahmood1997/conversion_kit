import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AllTools from '../pages/AllTools';
import CategoryPage from '../pages/CategoryPage';
import LegalPage from '../pages/LegalPage';
import NotFound from '../pages/NotFound';
import Sitemap from '../pages/Sitemap'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: '/tools/:slug',
    element: <AllTools />,
  },
  {
    path: '/privacy',
    element: <LegalPage />,
  },
  {
    path: '/terms',
    element: <LegalPage />,
  },
  {
    path: '/about',
    element: <LegalPage />,
  },
  {
    path: '/contact',
    element: <LegalPage />,
  },
  {
    path: '/:category',
    element: <CategoryPage />,
  },
  {
  path: '/sitemap.xml',
  element: <Sitemap />,
},
  {
    path: '*',
    element: <NotFound />, 
  },
]);