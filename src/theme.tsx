import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#34495E',
    },
    primary: {
      main: '#311b92',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fc03ad',
    },
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: ['Varela', 'sans-serif'].join(','),
  },
});

export default theme;
