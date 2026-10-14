import { Box, Typography } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Navigation from './Navigation';

const Layout = () => {
  const { pathname, hash } = useLocation();

  // Start each new page at the top, unless the link targets a section.
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

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
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
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
