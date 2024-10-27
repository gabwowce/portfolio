import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
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
    <LoadingProvider>
      <VisibilityProvider>
      <ThemeContextProvider>
        <LanguageProvider>
        <LoadingIndicator />
          <Router> 
            <ScrollToTop />
            <Header />
            <div className="content"> 
              <Routes> 
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<About />} /> 
              </Routes>
            </div>
            <Footer />
          </Router>
        </LanguageProvider>
      </ThemeContextProvider>
    </VisibilityProvider>
    </LoadingProvider>
  );
};

// This component displays the loading indicator if loading is true
const LoadingIndicator = () => {
  const { loading } = useLoading();

  return loading ? <Loading /> : null; // Show loading component
};

export default App;
