import { Box, Chip, Divider, Fade, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const emojis = ['✨', '🎉', '👋🏼', '🔥', '💥', '🦄', '🌈', '🤠', '🦁', '🐯'];

export default function Home() {
  const navigate = useNavigate();
  const [location, setLocation] = useState({ top: 0, left: 0 });
  const [emoji, setEmoji] = useState(emojis[0]);
  const [opacity, setOpacity] = useState(0);
  const year = new Date().getFullYear() - 2016;

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setLocation({ top: clientY, left: clientX });
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
      setOpacity(1);
      const timer = setTimeout(() => {
        setOpacity(0);
        clearTimeout(timer);
      }, 500);
    };

    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <Box>
      <Fade in timeout={1000}>
        <Stack spacing={2} alignItems="center" textAlign="center">
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
          <Typography
            variant="caption"
            sx={{
              mt: 6,
              opacity: 0.4,
              fontFamily: "'Source Code Pro', monospace",
            }}
          >
            click anywhere {emoji}
          </Typography>
        </Stack>
      </Fade>
      <span
        style={{
          transition: 'opacity 1s',
          opacity,
          position: 'fixed',
          top: `${location.top}px`,
          left: `${location.left}px`,
          fontSize: '3rem',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        {emoji}
      </span>
    </Box>
  );
}
