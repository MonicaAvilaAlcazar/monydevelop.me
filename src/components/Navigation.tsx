import { AppBar, Grid, Link, Toolbar } from '@mui/material';

const pages = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/MonicaAvilaAlcazar',
  },
];

const Navigation = () => {
  return (
    <AppBar color="transparent" position="sticky" sx={{ boxShadow: 'none' }}>
      <Toolbar>
        <Grid
          container
          justifyContent="right"
          alignItems="center"
          columnSpacing={'30px'}
        >
          {pages.map((page) => {
            return (
              <Grid item key={page.label}>
                <Link
                  color="inherit"
                  href={page.link}
                  underline="none"
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontFamily: "'Source Code Pro', monospace",
                    margin: 'auto',
                    '::after': {
                      content: '""',
                      display: 'block',
                      margin: 'auto',
                      height: '3px',
                      width: '0px',
                      background: 'transparent',
                      transition: 'width .5s ease, background-color .5s ease',
                    },
                    ':hover::after': {
                      width: '100%',
                      background: '#bdccdb',
                    },
                  }}
                >
                  {page.label}
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
