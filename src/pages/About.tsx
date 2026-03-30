import { Box, Divider, Fade, Grid, Stack, Typography } from '@mui/material';
import {
  DiGithubBadge,
  DiHtml5,
  DiJava,
  DiJsBadge,
  DiLaravel,
  DiMysql,
  DiPhp,
  DiReact,
  DiSass,
  DiWordpress,
} from 'react-icons/di';
import { IconType } from 'react-icons';

const skills: { icon: IconType; label: string }[] = [
  { icon: DiReact, label: 'React' },
  { icon: DiJsBadge, label: 'JavaScript' },
  { icon: DiPhp, label: 'PHP' },
  { icon: DiLaravel, label: 'Laravel' },
  { icon: DiMysql, label: 'MySQL' },
  { icon: DiHtml5, label: 'HTML5' },
  { icon: DiSass, label: 'Sass' },
  { icon: DiWordpress, label: 'WordPress' },
  { icon: DiJava, label: 'Java' },
  { icon: DiGithubBadge, label: 'GitHub' },
];

export default function About() {
  const year = new Date().getFullYear() - 2016;

  return (
    <Fade in timeout={800}>
      <Box sx={{ py: 8, maxWidth: 800, mx: 'auto', px: 3 }}>
        <Typography variant="h1">About</Typography>
        <Divider
          sx={{
            width: 60,
            borderColor: 'secondary.main',
            borderWidth: 1,
            my: 3,
          }}
        />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
          I&apos;m Monica, a fullstack developer with over {year} years of
          experience. Since 2016, I&apos;ve worked across the stack &mdash; from
          PHP and Laravel backends to React frontends, with solid grounding in
          JavaScript, TypeScript, HTML/CSS, MySQL, and WordPress. I enjoy
          building clean, reliable software and I&apos;m always motivated to
          learn what comes next.
        </Typography>

        <Typography variant="h2" sx={{ mb: 4 }}>
          Tech Stack
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Grid item xs={4} sm={3} md={2} key={skill.label}>
                <Stack alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'border-color 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Icon size="2.5em" />
                  </Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: "'Source Code Pro', monospace" }}
                  >
                    {skill.label}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fade>
  );
}
