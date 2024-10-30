import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importuojame useLocation iš react-router-dom

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const location = useLocation(); // Naudojame useLocation norint sekti kelio pasikeitimus

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => new Set(prev).add(entry.target.id));
        } else {
          setVisibleElements((prev) => {
            const newSet = new Set(prev);
            newSet.delete(entry.target.id);
            return newSet;
          });
        }
      });
    }, {
      //rootMargin: "0px 0px -100px 0px", // Galima koreguoti papildomai
      threshold: 0.2 // 20% elemento turi būti matoma
    });

    const elements = document.querySelectorAll('.track-visibility');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [location.pathname]);


  return (
    <VisibilityContext.Provider value={{ visibleElements }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  const context = React.useContext(VisibilityContext);
  if (!context) {
    throw new Error('useVisibility must be used within a VisibilityProvider');
  }
  return context;
};
