import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

export default function Home() {
  const [colorTitle, setColorTitle] = useState('000000');
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setColorTitle(event.clientX.toString(16));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <h1 style={{ transition: 'color 1s', color: `#${colorTitle}` }}>
        Welcome to my personal site.
      </h1>
    </Container>
  );
}
