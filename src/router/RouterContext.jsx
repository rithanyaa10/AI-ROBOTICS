/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const navigate = useCallback((to) => {
    if (typeof window === 'undefined') return;

    let targetId = '';
    let targetPath = to;

    if (to === '/' || to === '#home') {
      targetId = 'home';
      targetPath = '/';
    } else if (to.startsWith('#')) {
      targetId = to.slice(1);
      targetPath = `/${targetId}`;
    } else if (to.startsWith('/')) {
      targetId = to.slice(1);
      targetPath = to;
    }

    let element = document.getElementById(targetId);
    if (!element && targetId === 'events') {
      element = document.getElementById('exhibitions-demos') || document.getElementById('exhibitions');
    }

    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
      setCurrentPath(targetPath);
    } else {
      if (window.location.pathname !== to) {
        window.history.pushState({}, '', to);
      }
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      const targetId = path === '/' ? 'home' : path.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate, setCurrentPath }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
