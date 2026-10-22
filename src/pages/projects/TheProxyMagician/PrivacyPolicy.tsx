import {
  Box,
  Divider,
  Fade,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { ProjectBreadcrumbs } from '../../../components/ProjectNav';

const LAST_UPDATED = 'October 13, 2026';
const CONTACT_EMAIL = 'support@monydevelop.me';

const storedData = [
  'the name and color you choose for the proxy',
  'the proxy type, host and port',
  'the username and password, if you enter them',
  'your bypass list (addresses that should not use the proxy)',
  'which proxy is currently active',
];

const permissions: { permission: React.ReactNode; reason: string }[] = [
  {
    permission: <code>proxy</code>,
    reason: "To change Chrome's proxy settings to the proxy you select.",
  },
  {
    permission: <code>storage</code>,
    reason: 'To save your proxies on your device.',
  },
  {
    permission: (
      <>
        <code>webRequest</code>, <code>webRequestAuthProvider</code>
      </>
    ),
    reason:
      "To answer a proxy's login request with the username and password you saved.",
  },
  {
    permission: 'Access to all sites (optional)',
    reason:
      'Only requested if you save a proxy with a username. Chrome requires it to answer proxy login requests. The extension does not read, change or record the content of any website.',
  },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h2" sx={{ fontSize: '1.4rem', mt: 6, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
      {children}
    </Typography>
  );
}

export default function PrivacyPolicy() {
  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          maxWidth: 800,
          mx: 'auto',
          px: 3,
          '& strong': { color: 'text.primary' },
          '& code': {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: '0.88em',
            backgroundColor: 'rgba(255,255,255,0.08)',
            px: 0.75,
            borderRadius: 1,
          },
        }}
      >
        <ProjectBreadcrumbs slug="the-proxy-magician" page="Privacy Policy" />

        <Typography variant="h1">Privacy Policy</Typography>
        <Divider
          sx={{
            width: 60,
            borderColor: 'secondary.main',
            borderWidth: 1,
            my: 3,
          }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          The Proxy Magician · Last updated: {LAST_UPDATED}
        </Typography>

        <Paragraph>
          The Proxy Magician is a free Chrome extension that lets you save up to
          10 proxy servers and switch between them. This policy explains what
          the extension does with your information.
        </Paragraph>

        <Box
          sx={{
            my: 4,
            p: 2.5,
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.1)',
            borderLeft: 4,
            borderLeftColor: 'primary.main',
            backgroundColor: 'rgba(255,255,255,0.02)',
          }}
        >
          <Typography variant="body1" color="text.secondary">
            <strong>The short version:</strong> The Proxy Magician does{' '}
            <strong>not</strong> collect, sell, share or send your data
            anywhere. It has no servers, no analytics, no ads and no trackers.
          </Typography>
        </Box>

        <Heading>What is stored, and where</Heading>
        <Paragraph>
          When you save a proxy, the extension stores the following{' '}
          <strong>only on your device</strong>, in Chrome&apos;s local extension
          storage (<code>chrome.storage.local</code>):
        </Paragraph>
        <Box component="ul" sx={{ mt: 0, mb: 2, color: 'text.secondary' }}>
          {storedData.map((item) => (
            <Typography component="li" variant="body1" key={item}>
              {item}
            </Typography>
          ))}
        </Box>
        <Paragraph>
          This data is never synced to your Google account by the extension and
          never sent to the developer or any third party. Passwords are stored
          unencrypted in local extension storage, the same as most proxy
          extensions, so anyone with access to your computer account could read
          them. Uninstalling the extension deletes all of this data.
        </Paragraph>

        <Heading>Network traffic</Heading>
        <Paragraph>
          The extension makes <strong>no network requests of its own</strong>.
          When you turn on a proxy, Chrome sends your browsing traffic through
          the proxy server <em>you</em> configured. That proxy&apos;s operator
          can see your traffic according to their own policies; The Proxy
          Magician has no control over or access to it.
        </Paragraph>

        <Heading>Permissions</Heading>
        <Box
          sx={{
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.1)',
            overflowX: 'auto',
          }}
        >
          <Table
            sx={{
              '& td, & th': { borderColor: 'rgba(255,255,255,0.1)' },
              '& tr:last-child td': { borderBottom: 0 },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Permission</TableCell>
                <TableCell>Why it is needed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {permissions.map((row) => (
                <TableRow key={row.reason}>
                  <TableCell sx={{ verticalAlign: 'top' }}>
                    {row.permission}
                  </TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>
                    {row.reason}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        <Heading>Export files</Heading>
        <Paragraph>
          If you use <strong>Export to file</strong>, a JSON file with your
          proxies is saved to your computer. Passwords are left out unless you
          tick <strong>Include passwords</strong>. You are responsible for
          keeping that file safe.
        </Paragraph>

        <Heading>Children</Heading>
        <Paragraph>
          The extension does not knowingly collect any information from anyone,
          including children.
        </Paragraph>

        <Heading>Changes</Heading>
        <Paragraph>
          If this policy changes, the new version will be published at this same
          address with a new &quot;Last updated&quot; date.
        </Paragraph>

        <Heading>Contact</Heading>
        <Paragraph>
          Questions about this policy:{' '}
          <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
        </Paragraph>
      </Box>
    </Fade>
  );
}
