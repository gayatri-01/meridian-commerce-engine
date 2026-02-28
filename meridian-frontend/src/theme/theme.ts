import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00897B',
      light: '#26A69A',
      dark: '#00695C',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B35',
      light: '#FF8C61',
      dark: '#E55100',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0F1419',
      paper: '#1A1F2E',
    },
    text: {
      primary: '#E8EAED',
      secondary: '#B0B5BD',
    },
    divider: '#3F4857',
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#EF5350',
    },
    info: {
      main: '#00897B',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#E8EAED',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#E8EAED',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#E8EAED',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#E8EAED',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#E8EAED',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#E8EAED',
    },
    body1: {
      fontSize: '0.875rem',
      color: '#E8EAED',
    },
    body2: {
      fontSize: '0.75rem',
      color: '#B0B5BD',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          backgroundColor: '#0F1419',
        },
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#1A1F2E',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#00897B',
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#26A69A',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1A1F2E',
          color: '#E8EAED',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1F2E',
          borderColor: '#3F4857',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '8px 16px',
        },
        contained: {
          backgroundColor: '#00897B',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#00695C',
          },
        },
        outlined: {
          borderColor: '#00897B',
          color: '#00897B',
          '&:hover': {
            backgroundColor: 'rgba(0, 137, 123, 0.1)',
            borderColor: '#26A69A',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#2C3E50',
            '& fieldset': {
              borderColor: '#3F4857',
            },
            '&:hover fieldset': {
              borderColor: '#00897B',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00897B',
            },
          },
          '& .MuiOutlinedInput-input': {
            color: '#E8EAED',
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#B0B5BD',
            opacity: 1,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1F2E',
          borderBottom: '1px solid #3F4857',
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1A1F2E',
          borderRight: '1px solid #3F4857',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 137, 123, 0.1)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 137, 123, 0.15)',
            borderLeft: '3px solid #00897B',
            '&:hover': {
              backgroundColor: 'rgba(0, 137, 123, 0.2)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#2C3E50',
          color: '#E8EAED',
        },
      },
    },
  },
});

export default theme;
export { ThemeProvider };
