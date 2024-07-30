import { QueryClientProvider } from '@sparcs/api';
import { ChakraProvider } from '@sparcs/ui';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import RouterLayout from '@/components/RouterLayout';
import { PATH } from '@/constants/routes';
import LandingPage from '@/pages/Landing';
import OrderPage from '@/pages/Order';

const publicRoutes = [
  {
    element: <RouterLayout />,
    children: [
      {
        path: PATH.INDEX,
        element: <LandingPage />,
      },
      {
        path: PATH.ORDER,
        element: <OrderPage />,
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
  // useScreenSize();

  return (
    <ChakraProvider>
      <QueryClientProvider>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
