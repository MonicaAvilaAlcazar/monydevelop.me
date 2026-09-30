import { Box, Divider, Fade, Stack, Typography } from '@mui/material';
import { IconType } from 'react-icons';
import { IoGameController } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';

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
      'TGC Game project. A multiplayer fantasy game, full of lore and adventure. Built for modern browsers.',
    icon: IoGameController,
    brand: '#062a4d',
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
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          A selection of things I&apos;ve been working on.
        </Typography>

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
