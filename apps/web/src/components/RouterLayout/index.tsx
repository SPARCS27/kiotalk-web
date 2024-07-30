import { useScreenSize } from '@sparcs/ui';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RouterLayout = () => {
  useScreenSize();

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default RouterLayout;
