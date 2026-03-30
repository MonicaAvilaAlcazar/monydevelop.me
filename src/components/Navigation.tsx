import { AppBar, Link, Stack, Toolbar, Typography } from '@mui/material';

const pages = [
  {
    label: 'home',
    link: '/',
  },
  {
    label: 'about',
    link: '/about',
  },
  {
    label: 'github',
    link: 'https://github.com/MonicaAvilaAlcazar',
    external: true,
  },
];

const linkSx = {
  fontWeight: 600,
  fontFamily: "'Source Code Pro', monospace",
  fontSize: '0.95rem',
  letterSpacing: '0.05em',
  '::after': {
    content: '""',
    display: 'block',
    margin: 'auto',
    height: '2px',
    width: '0px',
    background: 'transparent',
    transition: 'width .4s ease, background-color .4s ease',
  },
  ':hover::after': {
    width: '100%',
    background: (theme: any) => theme.palette.secondary.main,
  },
};

const Navigation = () => {
  return (
    <AppBar color="transparent" position="sticky" sx={{ boxShadow: 'none' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "'Source Code Pro', monospace",
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          {'<MonyDevelop />'}
        </Typography>
        <Stack direction="row" spacing={4}>
          {pages.map((page) => (
            <Link
              key={page.label}
              color="inherit"
              href={page.link}
              underline="none"
              sx={linkSx}
              {...(page.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {page.label}
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
