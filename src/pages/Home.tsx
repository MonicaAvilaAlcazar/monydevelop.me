import { Chip, Container } from '@mui/material';
import { useEffect, useState } from 'react';

const emojis = ['✨', '🎉', '👋🏼', '🔥', '💥', '🦄', '🌈', '🤠', '🦁', '🐯'];

export default function Home() {
  const [location, setLocation] = useState({ top: 0, left: 0 });
  const [emoji, setEmoji] = useState(emojis[0]);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setLocation({ top: clientY, left: clientX });
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
      setOpacity(1);
      const timer = setTimeout(() => {
        setOpacity(0);
        clearTimeout(timer);
      }, 1000);
    };

    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <Container>
      <h1>Welcome to my personal site.</h1>
      <Chip variant="outlined" label={`Click on the page ${emoji}`} />
      <span
        style={{
          transition: 'opacity 1s',
          opacity,
          position: 'absolute',
          top: `${location.top}px`,
          left: `${location.left}px`,
          fontSize: '3rem',
        }}
      >
        {emoji}
      </span>
    </Container>
  );
}
