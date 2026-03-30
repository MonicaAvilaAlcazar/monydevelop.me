import { Box, Typography } from '@mui/material';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Box component="main" sx={{ margin: 'auto' }}>
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
