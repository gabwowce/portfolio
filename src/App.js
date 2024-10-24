
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


const App = () => {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
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
  );
};

export default App;
