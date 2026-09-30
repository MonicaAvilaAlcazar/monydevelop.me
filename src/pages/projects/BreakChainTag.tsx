import { Box, Divider, Fade, Typography } from '@mui/material';

export default function BreakChainTag() {
  return (
    <Fade in timeout={800}>
      <Box sx={{ py: { xs: 4, md: 8 }, maxWidth: 800, mx: 'auto', px: 3 }}>
        <Typography variant="h1">Break Chain Tag</Typography>
        <Divider
          sx={{
            width: 60,
            borderColor: 'secondary.main',
            borderWidth: 1,
            my: 3,
          }}
        />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
          TGC Game project. A multiplayer fantasy game, full of lore and
          adventure. Built for modern browsers.
        </Typography>
        <Box
          sx={{
            mb: 8,
            p: 2.5,
            borderRadius: 2,
            border: 1,
            borderColor: 'warning.main',
            color: 'warning.dark',
          }}
        >
          <Typography variant="body1" color="warning.dark">
            WORK IN PROGRESS. This project is currently under development and
            not yet available for public access. Please check back later for
            updates and the official release.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}
