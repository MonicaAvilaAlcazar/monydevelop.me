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
import { IoArrowBack } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';

const LAST_UPDATED = 'October 14, 2026';
const CONTACT_EMAIL = 'support@monydevelop.me';
const GITHUB_URL = 'https://github.com/MonicaAvilaAlcazar/PerfDebugger';
const LIMITED_USE_URL =
  'https://developer.chrome.com/docs/webstore/program-policies/limited-use';

const processedData: { label: string; text: string }[] = [
  {
    label: 'Performance metrics:',
    text: 'LCP, FCP, CLS, INP, TTFB and JavaScript heap (memory) usage.',
  },
  {
    label: 'Page addresses:',
    text: 'the hostname and path of pages you visit, used only to group metrics per page. The full URL of the last visit is kept so you can reopen it from the dashboard.',
  },
  {
    label: 'Slow network requests:',
    text: 'the address, duration, size and type of requests slower than your configured threshold.',
  },
  {
    label: 'Component names:',
    text: 'when re-render detection is on and a page uses React, Vue or Angular, the names of components that re-rendered and how many times.',
  },
];

const permissions: { permission: React.ReactNode; reason: string }[] = [
  {
    permission: <code>storage</code>,
    reason: 'Save metrics and history locally, and save your settings.',
  },
  {
    permission: <code>alarms</code>,
    reason:
      'Run an hourly cleanup that deletes data older than your retention period.',
  },
  {
    permission: 'Host access to all sites',
    reason:
      "Run the measurement script on the pages you visit, and show the current page's address in the popup. The script only reads performance data.",
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

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <Box component="ul" sx={{ mt: 0, mb: 2, color: 'text.secondary' }}>
      {items.map((item, index) => (
        <Typography component="li" variant="body1" key={index} sx={{ mb: 0.5 }}>
          {item}
        </Typography>
      ))}
    </Box>
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
        <Link
          component={RouterLink}
          to="/projects/perf-debugger"
          underline="hover"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 4 }}
        >
          <IoArrowBack /> PerfDebugger
        </Link>

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
          PerfDebugger · Last updated: {LAST_UPDATED} · Applies to version 1.0
          and later
        </Typography>

        <Paragraph>
          PerfDebugger (&quot;the extension&quot;) is a free Chrome extension
          that measures the web performance of the pages you visit, to help
          developers debug performance issues. This policy explains what the
          extension processes, where it is stored and how you can control it.
        </Paragraph>

        <Box
          sx={{
            my: 4,
            p: 2.5,
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.1)',
            borderLeft: 4,
            borderLeftColor: '#10b981',
            backgroundColor: 'rgba(255,255,255,0.02)',
          }}
        >
          <Typography variant="body1" color="text.secondary">
            <strong>The short version:</strong> PerfDebugger does{' '}
            <strong>not</strong> collect, transmit, sell or share any data.
            Everything it measures stays in your browser on your device, and you
            can delete it at any time.
          </Typography>
        </Box>

        <Heading>Data we collect</Heading>
        <Paragraph>
          <strong>None.</strong> The developer of PerfDebugger does not collect
          any data. The extension has no servers or backend. It includes no
          analytics, telemetry, advertising or third-party SDKs, and it never
          sends anything over the network. The extension is open source, so you
          can verify this in the{' '}
          <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            source code
          </Link>
          .
        </Paragraph>

        <Heading>Data processed locally on your device</Heading>
        <Paragraph>
          To show you performance information, the extension processes the
          following in your browser:
        </Paragraph>
        <List
          items={processedData.map((item) => (
            <>
              <strong>{item.label}</strong> {item.text}
            </>
          ))}
        />
        <Paragraph>
          The extension does not read form inputs, passwords, cookies, page text
          or any other page content.
        </Paragraph>

        <Heading>Where data is stored</Heading>
        <List
          items={[
            <>
              <strong>Metrics and history</strong> are stored with{' '}
              <code>chrome.storage.local</code>, on your device only.
            </>,
            <>
              <strong>Settings</strong> (thresholds, slow-request cutoff,
              retention period and the re-render toggle) are stored with{' '}
              <code>chrome.storage.sync</code>. If you have turned on Chrome
              Sync, Chrome syncs these settings between your own signed-in
              browsers, as it does for any extension. They contain no browsing
              data, and the developer has no access to them.
            </>,
          ]}
        />

        <Heading>Data retention and deletion</Heading>
        <List
          items={[
            'Metrics older than your retention period (7 days by default, adjustable from 1 to 30 days in Settings) are deleted automatically.',
            <>
              You can delete one page&apos;s data with <strong>Clear</strong> in
              the popup, or everything with <strong>Delete all data</strong> in
              the dashboard.
            </>,
            'Uninstalling the extension removes all of its stored data.',
          ]}
        />

        <Heading>Exports</Heading>
        <Paragraph>
          The <strong>JSON</strong> and <strong>CSV</strong> export buttons
          create a file that your browser saves to your device. Nothing is
          uploaded. You decide whether and where to share these files.
        </Paragraph>

        <Heading>Permissions explained</Heading>
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

        <Heading>Third parties</Heading>
        <Paragraph>
          PerfDebugger does not share data with anyone, and it doesn&apos;t use
          third-party analytics, tracking, advertising or remote code. All code
          is packaged inside the extension.
        </Paragraph>

        <Heading>Chrome Web Store User Data Policy</Heading>
        <Paragraph>
          The use of information processed by PerfDebugger complies with the{' '}
          <Link
            href={LIMITED_USE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chrome Web Store User Data Policy
          </Link>
          , including the Limited Use requirements. Data is used only to provide
          the extension&apos;s single purpose, measuring and displaying web
          performance, and is never transferred, sold or used for advertising,
          creditworthiness or any unrelated purpose.
        </Paragraph>

        <Heading>Children&apos;s privacy</Heading>
        <Paragraph>
          PerfDebugger is a developer tool. It is not directed at children and
          collects no personal information from anyone.
        </Paragraph>

        <Heading>Changes to this policy</Heading>
        <Paragraph>
          If this policy changes, the updated version will be published on this
          page with a new &quot;Last updated&quot; date. Any change that affects
          how data is handled will also be noted in the extension&apos;s release
          notes.
        </Paragraph>

        <Heading>Contact</Heading>
        <Paragraph>
          Questions about this policy or your data? Email{' '}
          <Link href={`mailto:${CONTACT_EMAIL}?subject=PerfDebugger%20privacy`}>
            {CONTACT_EMAIL}
          </Link>
          .
        </Paragraph>
      </Box>
    </Fade>
  );
}
