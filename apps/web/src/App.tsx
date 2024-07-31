import { QueryClientProvider } from '@kiotalk/api';
import { ChakraProvider } from '@kiotalk/ui';
import { useEffect } from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';

import { audioInstanceState, userInteractedState } from '@/atoms/audioState.ts';
import { PATH } from '@/constants/routes';
import LandingPage from '@/pages/Landing';
import VoiceOrderPage from '@/pages/VoiceOrderPage';

const RouterPage = () => {
  const [userInteracted, setUserInteracted] = useRecoilState(userInteractedState);
  const setAudioInstance = useSetRecoilState(audioInstanceState);

  useEffect(() => {
    const handleInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        const audio = new Audio();
        setAudioInstance(audio);
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [userInteracted, setUserInteracted, setAudioInstance]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const publicRoutes = [
  {
    element: <RouterPage />,
    children: [
      {
        path: PATH.INDEX,
        element: <LandingPage />,
      },
      {
        path: PATH.VOICE_ORDER,
        element: <VoiceOrderPage />,
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
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
