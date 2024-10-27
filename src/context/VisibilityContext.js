// VisibilityContext.js
import React, { createContext, useEffect, useState } from 'react';

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [visibleElements, setVisibleElements] = useState(new Set());

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
    });

    // Taikykite stebėjimą visiems elementams, kuriuos norite stebėti
    const elements = document.querySelectorAll('.track-visibility');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

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
