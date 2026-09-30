import { Box, Chip, Divider, Fade, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear() - 2016;

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return undefined;

    let rafId = 0;
    const handleMove = (event: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = spotlightRef.current;
        if (!el) return;
        el.style.setProperty('--x', `${event.clientX}px`);
        el.style.setProperty('--y', `${event.clientY}px`);
        el.style.opacity = '1';
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 3,
        py: 6,
        position: 'relative',
      }}
    >
      <Box
        ref={spotlightRef}
        aria-hidden
        sx={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0,
          transition: 'opacity 0.4s ease',
          background:
            'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(124, 77, 255, 0.18), rgba(244, 143, 177, 0.06) 30%, transparent 60%)',
        }}
      />

      <Fade in timeout={1000}>
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{ position: 'relative', zIndex: 1 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'secondary.main',
              fontFamily: "'Source Code Pro', monospace",
            }}
          >
            Hello, I&apos;m
          </Typography>
          <Typography variant="h1">Monica Avila</Typography>
          <Typography variant="h2" color="text.secondary">
            Fullstack Developer
          </Typography>
          <Divider
            sx={{
              width: 60,
              borderColor: 'secondary.main',
              borderWidth: 1,
              my: 3,
            }}
          />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            Building for the web since 2016. Over {year} years of turning ideas
            into reliable, well-crafted software.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Chip
              variant="outlined"
              label="about me"
              clickable
              onClick={() => navigate('/about')}
              sx={{
                borderColor: 'secondary.main',
                color: 'secondary.main',
                fontFamily: "'Source Code Pro', monospace",
                '&.MuiChip-clickable:hover': {
                  backgroundColor: 'rgba(244,143,177,0.1)',
                },
              }}
            />
            <Chip
              variant="outlined"
              label="github"
              clickable
              onClick={() =>
                window.open(
                  'https://github.com/MonicaAvilaAlcazar',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                fontFamily: "'Source Code Pro', monospace",
                '&.MuiChip-clickable:hover': {
                  backgroundColor: 'rgba(124,77,255,0.1)',
                },
              }}
            />
          </Stack>
        </Stack>
      </Fade>
    </Box>
  );
}
