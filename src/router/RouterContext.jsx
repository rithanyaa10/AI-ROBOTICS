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
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== to) {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
