import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C4E1F6',  // Light blue
      light: '#FEEE91',  // Light yellow (for lighter buttons/active states)
      dark: '#FFBD73',   // Light orange (for darker button states)
    },
    background: {
      default: '#FDFCEE', // Very light yellow
      paper: '#FEF9F2',   // Light yellow paper background
      hover: '#F6EFBD',   // Orange for hover effects
    },
    text: {
      primary: '#243642', // Dark blue for main text
      secondary: '#FF9D3D', // Orange for secondary text (e.g., in buttons or highlighted text)
    },
    footer: {
      background: '#f0f0f0',  // Light gray footer background
      text: '#243642',         // Dark blue footer text
    },
    switch: {
        thumb: '#FF9D3D',   // color of the thumb
        track: '#F6EFBD',   // color of the track when off
      },
  },
  typography: {
    fontFamily: "Six Caps", 'sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '3.5rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '2.5rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '2rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.75rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.5rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.25rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.125rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.25rem',
      },
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.25rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1A120B', // Dark brown
      light: '#3C2A21', // Medium brown (lighter buttons/active states)
      dark: '#D5CEA3',  // Light tan (for darker button states)
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1d1d1d',   // Dark paper background
      hover: '#3C2A21',   // Light gray for hover effects
    },
    text: {
      primary: '#E5E5CB', // Light gray for main text
      secondary: '#D5CEA3', // Tan for secondary text (e.g., in buttons or highlighted text)
    },
    footer: {
      background: '#3C2A21',  // Medium brown footer background
      text: '#E5E5CB',         // Light gray footer text
    },
    switch: {
        thumb: '#D5CEA3',   // light color for thumb
        track: '#1A120B',    // dark color for the track when off
      },
  },
  typography: {
    fontFamily: "Six Caps", 'sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '3.5rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '2.5rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '2rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.75rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.5rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.25rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.125rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.25rem',
      },
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1.25rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      [createTheme().breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
  },
});
