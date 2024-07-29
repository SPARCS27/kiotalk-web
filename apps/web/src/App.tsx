import { QueryClientProvider } from '@sparcs/api';
import { ChakraProvider } from '@sparcs/ui';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

import { PATH } from '@/constants/routes';
import LandingPage from '@/pages/Landing';

const publicRoutes = [
  {
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      {
        path: PATH.INDEX,
        element: <LandingPage />,
      },
      {
        path: '*',
        element: <Navigate to={PATH.INDEX} replace />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes]);

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
