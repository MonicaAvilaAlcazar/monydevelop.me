import { Box, Button, Divider, Fade, Stack, Typography } from '@mui/material';
import { IoCafe, IoGameController, IoSparkles } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/karmesi';

type Project = {
  slug: string;
  name: string;
  description: string;
  icon: IconType;
  brand: string;
};

const projects: Project[] = [
  {
    slug: 'break-chain-tag',
    name: 'Break Chain Tag',
    description:
      'TCG Game project. A multiplayer fantasy game, full of lore and adventure. Built for modern browsers and mobile devices.',
    icon: IoGameController,
    brand: '#062a4d',
  },
  {
    slug: 'the-proxy-magician',
    name: 'The Proxy Magician',
    description:
      'A free, privacy-first Chrome extension to save up to 10 proxy servers and switch between them in one click.',
    icon: IoSparkles,
    brand: '#4419c4',
  },
];

export default function Projects() {
  return (
    <Fade in timeout={800}>
      <Box sx={{ py: { xs: 4, md: 8 }, maxWidth: 800, mx: 'auto', px: 3 }}>
        <Typography variant="h1">Projects</Typography>
        <Divider
          sx={{
            width: 60,
            borderColor: 'secondary.main',
            borderWidth: 1,
            my: 3,
          }}
        />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          A selection of things I&apos;ve been working on.
        </Typography>

        <Box
          sx={{
            mb: 6,
            p: 2.5,
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
            My projects are free, with no ads and no tracking. If any of them
            saves you time, you can support my work with a coffee.
          </Typography>
          <Button
            variant="contained"
            href={BUY_ME_A_COFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<IoCafe />}
            sx={{
              flexShrink: 0,
              backgroundColor: '#ffdd00',
              color: '#000',
              fontWeight: 600,
              '&:hover': { backgroundColor: '#ffe53b' },
            }}
          >
            Buy me a coffee
          </Button>
        </Box>

        <Stack spacing={3}>
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Box
                key={project.slug}
                component={RouterLink}
                to={`/projects/${project.slug}`}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 3,
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    borderColor: project.brand,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: project.brand,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color="#fff" />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Source Code Pro', monospace",
                      mb: 1,
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Fade>
  );
}
