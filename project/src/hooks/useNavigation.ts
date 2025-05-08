import { useState, useEffect, useCallback } from 'react';

export type PageType = 'home' | 'simulator' | 'comparison' | 'resources';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  // Update URL hash when page changes
  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);
  
  // Set page from URL hash on initial load and handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'simulator', 'comparison', 'resources'].includes(hash)) {
        setCurrentPage(hash as PageType);
      }
    };
    
    // Set initial page
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const navigateTo = useCallback((page: PageType) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return { currentPage, navigateTo };
};