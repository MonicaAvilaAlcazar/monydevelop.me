import {
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
  IoDownload,
  IoFlash,
  IoGrid,
  IoLockClosed,
  IoLogoChrome,
  IoLogoGithub,
  IoShieldCheckmark,
  IoShuffle,
  IoWarning,
} from 'react-icons/io5';
import {
  ProjectBreadcrumbs,
  ProjectPager,
} from '../../../components/ProjectNav';
import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';
import screenshot1 from '../../../assets/images/TPM/screenshot-1.png';
import screenshot2 from '../../../assets/images/TPM/screenshot-2.png';
import screenshot3 from '../../../assets/images/TPM/screenshot-3.png';

// Replace with the Chrome Web Store URL once the extension is published.
const CHROME_WEB_STORE_URL = '#';
const GITHUB_URL = 'https://github.com/MonicaAvilaAlcazar/TheProxyMagician';
const PRIVACY_POLICY_PATH = '/projects/the-proxy-magician/privacy';

const cardSx = {
  borderRadius: 2,
  border: '1px solid rgba(255,255,255,0.1)',
  backgroundColor: 'rgba(255,255,255,0.02)',
};

const tags = [
  'Chrome Extension',
  'Manifest V3',
  'Vanilla JavaScript',
  'Free & open source',
];

const facts = [
  { value: '10', label: 'saved proxies' },
  { value: '4', label: 'protocols: HTTP, HTTPS, SOCKS4, SOCKS5' },
  { value: '0', label: 'dependencies, servers or trackers' },
  { value: '~58 KB', label: 'total package size' },
];

const features: { icon: IconType; title: string; text: React.ReactNode }[] = [
  {
    icon: IoFlash,
    title: 'One-click switching',
    text: 'Pick any saved proxy from the toolbar popup, or turn the proxy off with System or Direct mode.',
  },
  {
    icon: IoGrid,
    title: 'Up to 10 profiles',
    text: "Each proxy gets its own name and color. The badge shows the first letters of the active proxy's name in its color.",
  },
  {
    icon: IoLockClosed,
    title: 'Automatic sign-in',
    text: 'Saved usernames and passwords are entered for you when an HTTP or HTTPS proxy asks for them.',
  },
  {
    icon: IoShuffle,
    title: 'Bypass rules',
    text: (
      <>
        Each proxy has its own list of addresses that skip it, such as{' '}
        <code>localhost</code>, <code>*.internal.com</code> or{' '}
        <code>192.168.0.0/16</code>.
      </>
    ),
  },
  {
    icon: IoWarning,
    title: 'Clear warnings',
    text: 'It tells you when another extension or a policy controls your proxy, and when the proxy fails to connect.',
  },
  {
    icon: IoDownload,
    title: 'Import & export',
    text: 'Back up your proxies to a JSON file and move them to another computer. Passwords are only included if you ask.',
  },
];

const screenshots = [
  {
    src: screenshot2,
    alt: 'Settings page listing five saved proxies with Use, Edit and Delete buttons',
    caption:
      'The settings page: saved proxies, the active one marked, and backup tools.',
  },
  {
    src: screenshot3,
    alt: 'Edit proxy dialog with name, color, type, host, port, sign-in and bypass list fields',
    caption:
      'Editing a proxy: name, color, type, host, port, optional sign-in and bypass list, all checked before saving.',
  },
];

const notes: { title: string; text: React.ReactNode }[] = [
  {
    title: 'Asking for less permission',
    text: "Answering a proxy's login request needs access to all sites, which shows Chrome's strongest install warning. The Proxy Magician makes that access optional. It only asks when you save a proxy with a username, and it re-registers its sign-in listeners as soon as you grant it. People who don't use proxy passwords never see the warning.",
  },
  {
    title: 'A badge that never lags behind',
    text: 'Testing in a real browser showed the badge was always one switch behind. Changing the proxy fired a settings-change event that read the saved state before the new state had been written. Now the state is saved first, then the proxy changes, and the old state is restored if Chrome rejects the change.',
  },
  {
    title: 'No sign-in loops',
    text: 'If a saved password is wrong, a careless extension can keep sending it forever. The Proxy Magician counts attempts per request and stops after two, so Chrome shows its own login prompt instead.',
  },
  {
    title: 'Edits apply right away',
    text: 'The service worker watches storage. Editing the active proxy applies the change immediately, and deleting it switches back to system settings, so Chrome is never left pointing at a proxy that no longer exists.',
  },
  {
    title: 'Screenshots made from the real interface',
    text: (
      <>
        The store screenshots and promo tiles are made by a script. It loads the
        real popup and settings pages into headless Chrome with a fake{' '}
        <code>chrome.*</code> API, so the images always match the shipped
        interface.
      </>
    ),
  },
];

const permissions: { permission: React.ReactNode; usage: string }[] = [
  {
    permission: <code>proxy</code>,
    usage: "Setting Chrome's proxy to the profile you pick.",
  },
  {
    permission: <code>storage</code>,
    usage: 'Saving your proxies locally on your device.',
  },
  {
    permission: (
      <>
        <code>webRequest</code> + <code>webRequestAuthProvider</code>
      </>
    ),
    usage: 'Answering proxy login requests with your saved credentials.',
  },
  {
    permission: (
      <>
        All sites <em>(optional)</em>
      </>
    ),
    usage:
      'Requested only when a proxy has a username. Chrome needs it to answer proxy logins. No page content is read or changed.',
  },
];

const stack = [
  'Chrome Extensions Manifest V3',
  'Vanilla JavaScript',
  'HTML & CSS (custom properties, light/dark)',
  'chrome.proxy',
  'chrome.webRequest (async auth)',
  'chrome.storage',
  'chrome.permissions',
  'Headless Chrome for asset generation',
  'Bash build scripts',
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

export default function TheProxyMagician() {
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
        <ProjectBreadcrumbs slug="the-proxy-magician" />
        <Typography variant="h1">The Proxy Magician</Typography>
        <Divider
          sx={{
            width: 60,
            borderColor: 'secondary.main',
            borderWidth: 1,
            my: 3,
          }}
        />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A free Chrome extension that saves up to 10 proxy servers and switches
          between them in one click.
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
              'radial-gradient(circle at 12% 18%, rgba(255,194,46,0.22), transparent 35%), radial-gradient(circle at 88% 92%, rgba(0,184,212,0.25), transparent 40%), linear-gradient(135deg, #7a4dff 0%, #4419c4 60%, #2a0e86 100%)',
          }}
        >
          <Box
            component="img"
            src={screenshot1}
            alt="The Proxy Magician popup with five saved proxies, Work Office active"
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 1.5,
              boxShadow:
                '0 30px 80px rgba(15,5,50,0.5), 0 0 0 1px rgba(255,255,255,0.15)',
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
          id="overview"
          title="Overview"
          subtitle="Developers, testers and people who move between networks often need to change Chrome's proxy many times a day. Chrome sends you to your operating system's settings to do it. The Proxy Magician puts it one click away in the toolbar, and the badge always shows how you're connected."
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
                        backgroundColor: 'rgba(124,77,255,0.18)',
                        color: 'primary.light',
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
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Section>

        <Section
          id="screenshots"
          title="Screenshots"
          subtitle="The popup is for quick switching. The settings page is where you add, edit and back up proxies. It supports light and dark mode."
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
          id="architecture"
          title="How it works"
          subtitle="Built on Manifest V3 with no frameworks or build step. One service worker owns every change to the browser's proxy setting. The pages only send it requests."
        >
          <Box
            sx={{
              ...cardSx,
              p: 3,
              '& svg': { display: 'block', width: '100%', height: 'auto' },
              '& .box': {
                fill: 'rgba(255,255,255,0.05)',
                stroke: 'rgba(255,255,255,0.15)',
              },
              '& .box-accent': {
                fill: 'rgba(124,77,255,0.18)',
                stroke: '#7c4dff',
              },
              '& text': {
                fill: '#fff',
                font: '600 14px Varela, sans-serif',
              },
              '& text.small': {
                fill: 'rgba(255,255,255,0.7)',
                fontWeight: 400,
                fontSize: '12px',
              },
              '& .line': {
                stroke: 'rgba(255,255,255,0.5)',
                strokeWidth: 1.5,
                fill: 'none',
              },
              '& .arrow': { fill: 'rgba(255,255,255,0.5)' },
            }}
          >
            <svg
              viewBox="0 0 900 300"
              role="img"
              aria-label="Architecture: popup and options page send messages to the background service worker, which reads chrome.storage and controls chrome.proxy, the toolbar badge and proxy sign-in"
            >
              <defs>
                <marker
                  id="arr"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path className="arrow" d="M0 0 10 5 0 10z" />
                </marker>
              </defs>
              <rect
                className="box"
                x="20"
                y="40"
                width="190"
                height="70"
                rx="12"
              />
              <text x="115" y="70" textAnchor="middle">
                Popup
              </text>
              <text className="small" x="115" y="90" textAnchor="middle">
                quick switch
              </text>

              <rect
                className="box"
                x="20"
                y="190"
                width="190"
                height="70"
                rx="12"
              />
              <text x="115" y="220" textAnchor="middle">
                Options page
              </text>
              <text className="small" x="115" y="240" textAnchor="middle">
                add · edit · import
              </text>

              <rect
                className="box-accent"
                x="340"
                y="105"
                width="220"
                height="90"
                rx="12"
              />
              <text x="450" y="142" textAnchor="middle">
                Service worker
              </text>
              <text className="small" x="450" y="164" textAnchor="middle">
                background.js
              </text>

              <rect
                className="box"
                x="690"
                y="20"
                width="190"
                height="56"
                rx="12"
              />
              <text x="785" y="54" textAnchor="middle">
                chrome.proxy
              </text>
              <rect
                className="box"
                x="690"
                y="96"
                width="190"
                height="56"
                rx="12"
              />
              <text x="785" y="130" textAnchor="middle">
                Toolbar badge
              </text>
              <rect
                className="box"
                x="690"
                y="172"
                width="190"
                height="56"
                rx="12"
              />
              <text x="785" y="206" textAnchor="middle">
                Proxy sign-in
              </text>
              <rect
                className="box"
                x="690"
                y="248"
                width="190"
                height="44"
                rx="12"
              />
              <text x="785" y="276" textAnchor="middle">
                chrome.storage
              </text>

              <path
                className="line"
                d="M210 75 C 280 75, 280 135, 338 135"
                markerEnd="url(#arr)"
              />
              <path
                className="line"
                d="M210 225 C 280 225, 280 165, 338 165"
                markerEnd="url(#arr)"
              />
              <text className="small" x="275" y="152" textAnchor="middle">
                setState
              </text>
              <path
                className="line"
                d="M560 130 C 620 130, 620 48, 688 48"
                markerEnd="url(#arr)"
              />
              <path
                className="line"
                d="M560 145 L 688 124"
                markerEnd="url(#arr)"
              />
              <path
                className="line"
                d="M560 160 L 688 200"
                markerEnd="url(#arr)"
              />
              <path
                className="line"
                d="M560 175 C 620 175, 620 270, 688 270"
                markerEnd="url(#arr)"
              />
            </svg>
          </Box>
        </Section>

        <Section
          id="engineering"
          title="Engineering notes"
          subtitle="A few problems that took more than one try."
        >
          <Box sx={{ ...cardSx, px: 3 }}>
            {notes.map((note, index) => (
              <Box
                key={note.title}
                sx={{
                  py: 2.5,
                  borderTop:
                    index === 0 ? 0 : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {note.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {note.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Section>

        <Section
          id="privacy"
          title="Permissions & privacy"
          subtitle={
            <>
              Your proxies are stored only on your device. The extension makes
              no network requests of its own and collects nothing.{' '}
              <Link component={RouterLink} to={PRIVACY_POLICY_PATH}>
                Read the full privacy policy.
              </Link>
            </>
          }
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
                  <TableCell>Permission</TableCell>
                  <TableCell>Used for</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {permissions.map((row) => (
                  <TableRow key={row.usage}>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.permission}
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>
                      {row.usage}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Section>

        <Section
          id="stack"
          title="Tech stack"
          subtitle="Small and easy to review, with no build step and no third-party code."
        >
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {stack.map((item) => (
              <Chip key={item} label={item} variant="outlined" />
            ))}
          </Stack>
        </Section>

        <Typography
          variant="caption"
          color="text.secondary"
          component="p"
          sx={{ mt: 10 }}
        >
          Version 1.0.0 · MIT License ·{' '}
          <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>{' '}
          ·{' '}
          <Link component={RouterLink} to={PRIVACY_POLICY_PATH}>
            Privacy policy
          </Link>
        </Typography>

        <ProjectPager slug="the-proxy-magician" />
      </Box>
    </Fade>
  );
}
