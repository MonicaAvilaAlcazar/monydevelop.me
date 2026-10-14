import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
    },
    background: {
      default: '#1a1a2e',
    },
    primary: {
      main: '#7c4dff',
      // Lighter shade for purple text on the dark background (WCAG AA).
      light: '#9b7bff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f48fb1',
    },
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: ['Varela', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '0.95rem',
      fontWeight: 600,
      fontFamily: "'Source Code Pro', monospace",
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: 'primary.light',
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            color: '#9b7bff',
            borderColor: 'rgba(155,123,255,0.7)',
          },
        },
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            color: '#9b7bff',
          },
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});

export default theme;
