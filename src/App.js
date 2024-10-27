import React from 'react';
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
import Loading from './components/Loading'; // Your loading component

const App = () => {
  return (
    <Router>
      <VisibilityProvider>
      <LoadingProvider>
          <ThemeContextProvider>
            <LanguageProvider>
              <LoadingIndicator />
              <ScrollToTop />
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
  return loading ? <Loading /> : null; // Show loading component
};

// Wrapper for loading behavior
const PageWrapper = ({ children }) => {
  const { setLoading } = useLoading();
  const location = useLocation();

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time; adjust as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [location, setLoading]);

  return children;
};

export default App;