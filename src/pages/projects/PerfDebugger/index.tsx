import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Divider,
  Fade,
  Grid,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {
  IoBug,
  IoChevronDown,
  IoConstruct,
  IoDownload,
  IoFlash,
  IoLockClosed,
  IoLogoChrome,
  IoLogoGithub,
  IoMail,
  IoNotifications,
  IoOptions,
  IoRepeat,
  IoShieldCheckmark,
  IoTrendingUp,
  IoWarning,
} from 'react-icons/io5';
import {
  ProjectBreadcrumbs,
  ProjectPager,
} from '../../../components/ProjectNav';
import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';
import comparisonScreenshot from '../../../assets/images/PD/screenshot-3-comparison.png';
import dashboardScreenshot from '../../../assets/images/PD/screenshot-5-dashboard.png';
import featuresScreenshot from '../../../assets/images/PD/screenshot-2-features.png';
import heroScreenshot from '../../../assets/images/PD/screenshot-1-hero.png';
import rerendersScreenshot from '../../../assets/images/PD/screenshot-4-rerenders.png';

// Replace with the Chrome Web Store URL once the extension is published.
const CHROME_WEB_STORE_URL = '#';
const GITHUB_URL = 'https://github.com/MonicaAvilaAlcazar/PerfDebugger';
const PRIVACY_POLICY_PATH = '/projects/perf-debugger/privacy-policy';
const SUPPORT_EMAIL = 'support@monydevelop.me';
const GOOD = '#10b981';

const cardSx = {
  borderRadius: 2,
  border: '1px solid rgba(255,255,255,0.1)',
  backgroundColor: 'rgba(255,255,255,0.02)',
};

const tags = [
  'Chrome Extension',
  'Core Web Vitals',
  'React · Vue · Angular',
  'Free & open source',
];

const facts = [
  { value: '5', label: 'Core Web Vitals: LCP, FCP, CLS, INP, TTFB' },
  { value: '3', label: 'frameworks for re-render detection' },
  { value: '0 s', label: 'waiting: metrics stream in live' },
  { value: '0', label: 'servers, accounts or trackers' },
];

const features: {
  icon: IconType;
  title: string;
  text: string;
  chips?: string[];
}[] = [
  {
    icon: IoFlash,
    title: 'Real-time Core Web Vitals',
    text: 'Live values from your real browser, color-coded green / yellow / red.',
    chips: ['LCP', 'FCP', 'CLS', 'INP', 'TTFB'],
  },
  {
    icon: IoRepeat,
    title: 'Re-render detection',
    text: 'See which components re-render and how often, live as you interact. No code changes, and no conflicts with framework DevTools.',
    chips: ['React', 'Vue 2/3', 'Angular'],
  },
  {
    icon: IoWarning,
    title: 'Slow-resource detection',
    text: 'Network requests slower than your cutoff (1 s by default) are flagged and sorted by impact.',
  },
  {
    icon: IoNotifications,
    title: 'Memory & leak alerts',
    text: 'Tracks JS heap usage and warns you when it keeps growing over a two-minute window.',
  },
  {
    icon: IoTrendingUp,
    title: 'Dashboard & history',
    text: "Every page you've tested in one place: per-URL trends with median and p75, sortable and filterable.",
  },
  {
    icon: IoDownload,
    title: 'CSV & JSON export',
    text: 'Export one page or everything. Drop it into a spreadsheet, a ticket or a performance review.',
  },
  {
    icon: IoOptions,
    title: 'Configurable thresholds',
    text: "Defaults follow Google's official thresholds. Tighten them to your team's performance budget.",
  },
  {
    icon: IoConstruct,
    title: 'Framework-agnostic',
    text: 'Works on any site: Next.js, Nuxt, SvelteKit, Angular, static sites, SPAs, SSR, or no framework at all.',
  },
];

const screenshots = [
  {
    src: rerendersScreenshot,
    alt: 'PerfDebugger popup showing Core Web Vitals, React re-render counts per component, slow resources and history charts',
    caption:
      'The popup: live vitals, the components that re-render most, slow requests and recent history.',
  },
  {
    src: dashboardScreenshot,
    alt: 'PerfDebugger dashboard with summary tiles and a table of six tracked pages with their metrics',
    caption:
      'The dashboard: every tracked page with its metrics, filters and CSV/JSON export.',
  },
  {
    src: featuresScreenshot,
    alt: 'Six feature cards: Core Web Vitals, re-render detection, slow resources, memory alerts, dashboard and privacy',
    caption: 'Everything you need. Nothing you don’t.',
  },
  {
    src: comparisonScreenshot,
    alt: 'Side-by-side comparison of Lighthouse for formal audits and PerfDebugger for daily debugging',
    caption: 'Lighthouse and PerfDebugger: different tools for different jobs.',
  },
];

const comparison = [
  {
    label: 'Speed',
    lighthouse: '30–60 seconds per run',
    perfDebugger: 'Instant, always on',
  },
  {
    label: 'Data',
    lighthouse: 'Simulated device & throttling',
    perfDebugger: 'Your real browser',
  },
  {
    label: 'Interactions (INP)',
    lighthouse: 'Not measured in navigation mode',
    perfDebugger: 'Measured as you click and type',
  },
  {
    label: 'Re-renders',
    lighthouse: '—',
    perfDebugger: 'React, Vue, Angular',
  },
  {
    label: 'Best for',
    lighthouse: 'CI/CD, formal audits',
    perfDebugger: 'Daily development',
  },
];

const steps: { title: string; text: string }[] = [
  {
    title: 'Install',
    text: 'PerfDebugger from the Chrome Web Store and pin it to your toolbar.',
  },
  {
    title: 'Open any page,',
    text: "whether it's your local dev server, staging or production.",
  },
  {
    title: 'Click the ⚡ icon',
    text: 'to see metrics stream in. Interact with the page to measure INP and re-renders.',
  },
  {
    title: 'Open the dashboard',
    text: '(📈) to compare pages over time, or export CSV/JSON.',
  },
];

const privacyPoints = [
  'All metrics stored locally',
  'No analytics or tracking',
  'No account required',
  'Auto-deleted after 7 days (configurable)',
];

const releases: {
  version: string;
  note?: string;
  items: string[];
  upcoming?: boolean;
}[] = [
  {
    version: 'v1.0',
    note: 'current',
    items: [
      'Re-render detection for React, Vue and Angular',
      'Dashboard with every tracked page, trends, median and p75',
      'CSV export (per page and all pages)',
      'Configurable thresholds, slow-request cutoff and data retention',
      'Published on the Chrome Web Store',
    ],
  },
  {
    version: 'v0.2',
    items: [
      'Per-URL history with sparkline charts',
      'Memory-leak alerts',
      'JSON export',
    ],
  },
  {
    version: 'v0.1',
    items: ['Core Web Vitals, slow resources, memory monitoring'],
  },
  {
    version: 'Coming next',
    note: 'separate extension',
    items: ['AI-powered performance suggestions, as a separate free extension'],
    upcoming: true,
  },
];

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Is it really free?',
    answer: (
      <>
        Yes. Every feature is free, with no account, trial or paywall. It&apos;s
        also open source under the MIT license, so you can read every line of
        code on{' '}
        <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Why does it ask to "read and change data on all websites"?',
    answer:
      "To measure performance, PerfDebugger has to run a small script on the pages you visit. That's how Chrome describes this access. The script only reads performance data, never page content, and nothing is sent anywhere.",
  },
  {
    question: 'Does re-render detection work in production builds?',
    answer: (
      <>
        For React and Vue, yes. Component names may be minified in production,
        so they&apos;re most readable on a dev build. Angular needs a
        development build (<code>ng serve</code>), because production builds
        remove the profiling hooks.
      </>
    ),
  },
  {
    question: 'Will it conflict with React DevTools or Vue DevTools?',
    answer:
      'No. PerfDebugger reads framework internals without installing its own DevTools hook, so the official DevTools keep working normally.',
  },
  {
    question: 'Why is the Memory metric empty?',
    answer: (
      <>
        Memory uses Chrome&apos;s <code>performance.memory</code> API. It&apos;s
        available in Chrome and most Chromium browsers, but some pages and
        browsers restrict it.
      </>
    ),
  },
  {
    question: 'How do I delete my data?',
    answer:
      'Use 🗑️ Clear in the popup for a single page, or "Delete all data" in the dashboard. Uninstalling the extension also removes everything.',
  },
];

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Box component="section" id={id} sx={{ mt: 10 }}>
      <Typography variant="h2" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {subtitle}
      </Typography>
      {children}
    </Box>
  );
}

export default function PerfDebugger() {
  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          maxWidth: 800,
          mx: 'auto',
          px: 3,
          '& code': {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: '0.88em',
            backgroundColor: 'rgba(255,255,255,0.08)',
            px: 0.75,
            borderRadius: 1,
          },
        }}
      >
        <ProjectBreadcrumbs slug="perf-debugger" />
        <Typography variant="h1">PerfDebugger</Typography>
        <Divider
          sx={{
            width: 60,
            borderColor: 'secondary.main',
            borderWidth: 1,
            my: 3,
          }}
        />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A free Chrome extension that shows Core Web Vitals, component
          re-renders, slow requests and memory leaks for the page you&apos;re
          on, instantly. No 60-second audits. No simulated devices.
        </Typography>

        <Stack direction="row" sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Button
            variant="contained"
            href={CHROME_WEB_STORE_URL}
            startIcon={<IoLogoChrome />}
          >
            Add to Chrome
          </Button>
          <Button
            variant="outlined"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<IoLogoGithub />}
          >
            View on GitHub
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to={PRIVACY_POLICY_PATH}
            startIcon={<IoShieldCheckmark />}
          >
            Privacy policy
          </Button>
        </Stack>

        <Stack direction="row" sx={{ mb: 6, flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Stack>

        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            background:
              'radial-gradient(circle at 12% 18%, rgba(16,185,129,0.35), transparent 40%), radial-gradient(circle at 88% 92%, rgba(124,77,255,0.3), transparent 40%), linear-gradient(135deg, #1f2a3a 0%, #141625 60%, #0d0f1a 100%)',
          }}
        >
          <Box
            component="img"
            src={heroScreenshot}
            alt="PerfDebugger popup showing live Core Web Vitals and a slow resource for github.com"
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 1.5,
              boxShadow:
                '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.15)',
            }}
          />
        </Box>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {facts.map((fact) => (
            <Grid size={{ xs: 6, md: 3 }} key={fact.label}>
              <Box sx={{ ...cardSx, p: 2.5, height: '100%' }}>
                <Typography
                  sx={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.2 }}
                >
                  {fact.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {fact.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Section
          id="features"
          title="What it does"
          subtitle="Everything a frontend developer checks daily, one click away in the toolbar."
        >
          <Grid container spacing={2}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Grid size={{ xs: 12, sm: 6 }} key={feature.title}>
                  <Box sx={{ ...cardSx, p: 3, height: '100%' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        display: 'grid',
                        placeItems: 'center',
                        backgroundColor: 'rgba(16,185,129,0.15)',
                        color: GOOD,
                        mb: 2,
                      }}
                    >
                      <Icon size={22} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.text}
                    </Typography>
                    {feature.chips && (
                      <Stack
                        direction="row"
                        sx={{ mt: 1.5, flexWrap: 'wrap', gap: 0.75 }}
                      >
                        {feature.chips.map((chip) => (
                          <Chip
                            key={chip}
                            label={chip}
                            size="small"
                            sx={{ fontFamily: "'Source Code Pro', monospace" }}
                          />
                        ))}
                      </Stack>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Section>

        <Section
          id="screenshots"
          title="Screenshots"
          subtitle="The popup is for the page you're on. The dashboard is where you compare every page you've tested."
        >
          <Stack spacing={3}>
            {screenshots.map((shot) => (
              <Box
                component="figure"
                key={shot.src}
                sx={{ ...cardSx, m: 0, overflow: 'hidden' }}
              >
                <a href={shot.src} target="_blank" rel="noreferrer">
                  <Box
                    component="img"
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    sx={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </a>
                <Typography
                  component="figcaption"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {shot.caption}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Section>

        <Section
          id="compare"
          title="Why not just use Lighthouse?"
          subtitle="Lighthouse is for audits. PerfDebugger is for everyday debugging."
        >
          <Box sx={{ ...cardSx, overflowX: 'auto' }}>
            <Table
              sx={{
                '& td, & th': { borderColor: 'rgba(255,255,255,0.1)' },
                '& tr:last-child td': { borderBottom: 0 },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Lighthouse</TableCell>
                  <TableCell>PerfDebugger</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparison.map((row) => (
                  <TableRow key={row.label}>
                    <TableCell component="th" scope="row">
                      {row.label}
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>
                      {row.lighthouse}
                    </TableCell>
                    <TableCell sx={{ color: GOOD }}>
                      {row.perfDebugger}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Section>

        <Section
          id="how"
          title="How to use it"
          subtitle="Up and running in under a minute."
        >
          <Stack component="ol" spacing={1.5} sx={{ m: 0, p: 0 }}>
            {steps.map((step, index) => (
              <Box
                component="li"
                key={step.title}
                sx={{
                  ...cardSx,
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 2.5,
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: 30,
                    height: 30,
                    flexShrink: 0,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    fontFamily: "'Source Code Pro', monospace",
                    fontSize: '0.875rem',
                  }}
                >
                  {index + 1}
                </Box>
                <Typography variant="body1" sx={{ pt: 0.25 }}>
                  <strong>{step.title}</strong>{' '}
                  <Box component="span" sx={{ color: 'text.secondary' }}>
                    {step.text}
                  </Box>
                </Typography>
              </Box>
            ))}
          </Stack>
        </Section>

        <Section
          id="privacy"
          title="Privacy first"
          subtitle="PerfDebugger has no servers. Your browsing data never leaves your device."
        >
          <Box sx={{ ...cardSx, p: 3 }}>
            <Grid container spacing={1.5} component="ul" sx={{ m: 0, p: 0 }}>
              {privacyPoints.map((point) => (
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  key={point}
                  component="li"
                  sx={{
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ color: GOOD, display: 'flex' }}>
                    <IoLockClosed />
                  </Box>
                  <Typography variant="body1">{point}</Typography>
                </Grid>
              ))}
            </Grid>
            <Link
              component={RouterLink}
              to={PRIVACY_POLICY_PATH}
              sx={{ display: 'inline-block', mt: 3 }}
            >
              Read the full privacy policy →
            </Link>
          </Box>
        </Section>

        <Section
          id="releases"
          title="Release history"
          subtitle="Built in the open and shaped by feedback."
        >
          <Stack spacing={2}>
            {releases.map((release) => (
              <Box
                key={release.version}
                sx={{
                  ...cardSx,
                  p: 3,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '140px 1fr' },
                  gap: { xs: 1, sm: 2.5 },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Source Code Pro', monospace",
                      fontWeight: 600,
                      color: 'primary.light',
                    }}
                  >
                    {release.version}
                  </Typography>
                  {release.note && (
                    <Typography variant="caption" color="text.secondary">
                      {release.note}
                    </Typography>
                  )}
                </Box>
                <Box component="ul" sx={{ m: 0, p: 0 }}>
                  {release.items.map((item) => (
                    <Typography
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      key={item}
                      sx={{
                        listStyle: 'none',
                        py: 0.25,
                        '&::before': {
                          content: release.upcoming ? '"○  "' : '"✓  "',
                          color: release.upcoming ? 'text.secondary' : GOOD,
                          whiteSpace: 'pre',
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Stack>
        </Section>

        <Section id="faq" title="FAQ" subtitle="Quick answers.">
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              disableGutters
              elevation={0}
              sx={{
                ...cardSx,
                mb: 1.25,
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<IoChevronDown />}>
                <Typography variant="body1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Section>

        <Section
          id="contact"
          title="Feedback & support"
          subtitle="Found a bug or have an idea? I read every message."
        >
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="outlined"
              href={`mailto:${SUPPORT_EMAIL}?subject=PerfDebugger%20feedback`}
              startIcon={<IoMail />}
            >
              {SUPPORT_EMAIL}
            </Button>
            <Button
              variant="outlined"
              href={`${GITHUB_URL}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<IoBug />}
            >
              Open an issue
            </Button>
          </Stack>
        </Section>

        <Typography
          variant="caption"
          color="text.secondary"
          component="p"
          sx={{ mt: 10 }}
        >
          Version 1.0 · MIT License ·{' '}
          <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>{' '}
          ·{' '}
          <Link component={RouterLink} to={PRIVACY_POLICY_PATH}>
            Privacy policy
          </Link>
        </Typography>

        <ProjectPager slug="perf-debugger" />
      </Box>
    </Fade>
  );
}
