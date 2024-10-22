import { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Tikriname naršyklės nustatymus ir nustatome pradinę temą
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (themeMode === 'light' ? lightTheme : darkTheme), [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
