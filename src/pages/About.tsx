import { Container, Grid } from '@mui/material';
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

export default function About() {
  const year = new Date().getFullYear() - 2016;
  return (
    <Container>
      <h1 className="content-transition-text">About</h1>
      <p>
        Hello, my name is Monica and I am a software developer with over {year}{' '}
        years of experience working with PHP, JavaScript, React, HTML and CSS,
        WordPress. Proven efficiency with the ability to quickly learn
        programming languages. Able to effectively self-manage during
        independent projects as well as collaborate as part of a productive
        team. With a positive attitude, the willingness and motivation to learn
        new technologies.
      </p>
      <Grid container>
        <Grid item>
          <DiGithubBadge size={'3em'} />
        </Grid>
        <Grid item>
          <DiHtml5 size={'3em'} />
        </Grid>
        <Grid item>
          <DiJava size={'3em'} />
        </Grid>
        <Grid item>
          <DiJsBadge size={'3em'} />
        </Grid>
        <Grid item>
          <DiLaravel size={'3em'} />
        </Grid>
        <Grid item>
          <DiMysql size={'3em'} />
        </Grid>
        <Grid item>
          <DiPhp size={'3em'} />
        </Grid>
        <Grid item>
          <DiReact size={'3em'} />
        </Grid>
        <Grid item>
          <DiSass size={'3em'} />
        </Grid>
        <Grid item>
          <DiWordpress size={'3em'} />
        </Grid>
      </Grid>
    </Container>
  );
}
