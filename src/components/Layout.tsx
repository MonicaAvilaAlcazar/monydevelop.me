import Container from '@mui/material/Container';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container maxWidth="xl">
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Layout;
