import { Box, Typography } from '@mui/material';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      <Navigation />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Outlet />
      </Box>
      <Box component="footer" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          &copy; {new Date().getFullYear()} Monica Avila
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
