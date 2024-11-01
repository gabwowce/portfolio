import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeContextProvider } from './context/ThemeContext';
import About from './pages/About'; 
import Portfolio from './pages/Portfolio'; 
import Contact from './pages/Contact'; 
import ChatBot from './components/ChatBot';
import './i18n';
import ScrollToTop from './context/ScrollToTop';
import { VisibilityProvider } from './context/VisibilityContext';
import LoadingProvider, { useLoading } from './context/LoadingContext';
import Loading from './components/Loading'; 

if (typeof window !== 'undefined') {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false); 
      setAnimateHeader(true);
    }, 1000); // Pradinio įkėlimo laikas

    return () => clearTimeout(timer);
  }, []);

  // Display loading screen during initial loading
  if (initialLoading) {
    return (
      <ThemeContextProvider>
        <Loading />
      </ThemeContextProvider>
    );
  }

  return (
    <Router basename="/portfolio">
      <VisibilityProvider>
        <LoadingProvider>
          <ThemeContextProvider>
            <LanguageProvider>
              <ScrollToTop />
              <LoadingIndicator />
              <Header />
              <div className="content"> 
                <Routes> 
                  <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                  <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
                  <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                  <Route path="/" element={<PageWrapper><About /></PageWrapper>} /> 
                </Routes>
              </div>
              <Footer />
            </LanguageProvider>
          </ThemeContextProvider>
        </LoadingProvider>
      </VisibilityProvider>
    </Router>
  );
};

const LoadingIndicator = () => {
  const { loading } = useLoading();
  return loading ? <Loading /> : null; // Show loading component on navigation
};

// Wrapper for loading behavior on navigation
const PageWrapper = ({ children }) => {
  const { setLoading } = useLoading();
  const location = useLocation(); // Move useLocation here

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 20); // Shortened time

    return () => clearTimeout(timer);
  }, [location, setLoading]); // Add setLoading to dependency array

  return children;
};

export default App;
