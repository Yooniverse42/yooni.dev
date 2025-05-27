import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/layouts/RootLayout';
import { About, Project, Resume, NotFound } from '@/pages';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/project',
        element: <Project />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
  { path: '*', element: <NotFound /> },
];

const router = createBrowserRouter(routes, {
  basename: '/',
});

export default router;
