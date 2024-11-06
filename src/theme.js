import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FEF9F2',  // Light blue
      light: '#FEEE91',  // Light yellow (for lighter buttons/active states)
      dark: '#FFBD73',   // Light orange (for darker button states)
    },
    background: {
      default: '#EBE5DC', // Very light yellow
      paper: '#FEF9F2',   // Light yellow paper background
      paper2:'#FAF8F3',
      hover: '#e4a0b8',   // Orange for hover effects
      portfolio: `radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 60% 80%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 0% 20%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 80% 100%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 40% 60%, rgba(0, 0, 255, 0.3), transparent 30%)`
    },
    text: {
      primary: '#243642', // Dark blue for main text
      secondary: '#FF9D3D', // Orange for secondary text (e.g., in buttons or highlighted text)
      third: '#8A8A8A'
    },
    footer: {
      background: '#f0f0f0',  // Light gray footer background
      text: '#243642',         // Dark blue footer text
    },
    switch: {
        thumb: '#e4a0b8',   // color of the thumb
        track: '#F6EFBD',   // color of the track when off
      },

  },
  typography: {
    fontFamily: "PT Serif, sans-serif",
    h1: {
      fontSize: '4.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '3.5rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '3rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '2.7rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.8rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.2rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.9rem',
      },
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.95rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    subtitle2: {
      fontSize: '1.125rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.9rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.9rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    body2: {
      fontSize: '0.675rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.475rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.375rem',
      },
    },
    button: {
      fontSize: '0.975rem',  // Default size for buttons
      fontWeight: 600,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.775rem', // Size for small screens
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.675rem ',  // Size for medium screens
      }
    },
    
  }
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#45474B', // Dark brown
      light: '#3C2A21', // Medium brown (lighter buttons/active states)
      dark: '#D5CEA3',  // Light tan (for darker button states)
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1d1d1d',   // Dark paper background
      paper2: '#1F1F1F',
      hover: '#612a30',  
      portfolio: '#1d1d1d'
    },
    text: {
      primary: '#E5E5CB', // Light gray for main text
      secondary: '#D5CEA3', // Tan for secondary text (e.g., in buttons or highlighted text)
      third: 'rgba(182, 182, 154, 0.6)',
    },
    footer: {
      background: '#3C2A21',  // Medium brown footer background
      text: '#E5E5CB',         // Light gray footer text
    },
    switch: {
        thumb: '#612a30',   // light color for thumb
        track: '#1A120B',    // dark color for the track when off
      },
  },
  typography: {
    fontFamily: "PT Serif, sans-serif",
    h1: {
      fontSize: '4.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '4rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '2.8rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '3.25rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '2rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.75rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1.125rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    subtitle2: {
      fontSize: '1.125rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '1rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.865rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
    body2: {
      fontSize: '0.675rem',
      fontWeight: 400,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.575rem',
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.475rem',
      },
    },
    button: {
      fontSize: '0.975rem',  // Default size for buttons
      fontWeight: 600,
      [createTheme().breakpoints.down('md')]: {
        fontSize: '0.875rem', // Size for small screens
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: '0.775rem ',  // Size for medium screens
      }
    },
    
  },
});