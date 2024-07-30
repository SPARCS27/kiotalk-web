import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const setScreenSize = () => {
  const vw: number = document.documentElement.clientWidth / 100;
  const vh: number = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const useScreenSize = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => window.removeEventListener('resize', setScreenSize);
  }, [pathname]);
};

export default useScreenSize;
