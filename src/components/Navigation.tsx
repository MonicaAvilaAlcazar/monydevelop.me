import { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { HiMenu, HiX } from 'react-icons/hi';

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
  const [drawerOpen, setDrawerOpen] = useState(false);

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

        {/* Desktop links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
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

        {/* Mobile hamburger */}
        <IconButton
          color="inherit"
          aria-label="open menu"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <HiMenu size={24} />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: 'background.default',
              width: 240,
              pt: 1,
            },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
            <IconButton
              color="inherit"
              aria-label="close menu"
              onClick={() => setDrawerOpen(false)}
            >
              <HiX size={24} />
            </IconButton>
          </Box>
          <List>
            {pages.map((page) => (
              <ListItemButton
                key={page.label}
                component="a"
                href={page.link}
                onClick={() => setDrawerOpen(false)}
                {...(page.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                <ListItemText
                  primary={page.label}
                  primaryTypographyProps={{
                    fontFamily: "'Source Code Pro', monospace",
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
