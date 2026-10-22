import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';
import { projects } from '../pages/projects/projectList';

function findProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    throw new Error(`Unknown project: ${slug}`);
  }
  return index;
}

// "Projects / Name", or "Projects / Name / Page" for a sub-page such as a
// privacy policy.
export function ProjectBreadcrumbs({
  slug,
  page,
}: {
  slug: string;
  page?: string;
}) {
  const project = projects[findProject(slug)];
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
      <Link component={RouterLink} to="/projects" underline="hover">
        Projects
      </Link>
      {page ? (
        <Link
          component={RouterLink}
          to={`/projects/${project.slug}`}
          underline="hover"
        >
          {project.name}
        </Link>
      ) : (
        <Typography color="text.secondary" aria-current="page">
          {project.name}
        </Typography>
      )}
      {page && (
        <Typography color="text.secondary" aria-current="page">
          {page}
        </Typography>
      )}
    </Breadcrumbs>
  );
}

// Links to the previous and next projects, wrapping around the list, so
// visitors can move between projects without going back to the list.
export function ProjectPager({ slug }: { slug: string }) {
  const index = findProject(slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const linkSx = {
    flex: 1,
    p: 2.5,
    borderRadius: 2,
    border: '1px solid rgba(255,255,255,0.1)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.3s ease',
  };

  return (
    <Box
      component="nav"
      aria-label="More projects"
      sx={{
        mt: 10,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
      }}
    >
      <Box
        component={RouterLink}
        to={`/projects/${previous.slug}`}
        sx={{ ...linkSx, '&:hover': { borderColor: previous.brand } }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <IoArrowBack /> Previous project
        </Typography>
        <Typography variant="h6">{previous.name}</Typography>
      </Box>
      <Box
        component={RouterLink}
        to={`/projects/${next.slug}`}
        sx={{
          ...linkSx,
          textAlign: 'right',
          '&:hover': { borderColor: next.brand },
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 0.5,
          }}
        >
          Next project <IoArrowForward />
        </Typography>
        <Typography variant="h6">{next.name}</Typography>
      </Box>
    </Box>
  );
}
