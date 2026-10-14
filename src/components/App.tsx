import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

// Each page is loaded only when visited, keeping the initial bundle small.
const About = lazy(() => import('../pages/About'));
const BreakChainTag = lazy(() => import('../pages/projects/BreakChainTag'));
const Home = lazy(() => import('../pages/Home'));
const PerfDebugger = lazy(() => import('../pages/projects/PerfDebugger'));
const PerfDebuggerPrivacyPolicy = lazy(
  () => import('../pages/projects/PerfDebugger/PrivacyPolicy'),
);
const Projects = lazy(() => import('../pages/Projects'));
const TheProxyMagician = lazy(
  () => import('../pages/projects/TheProxyMagician'),
);
const TheProxyMagicianPrivacyPolicy = lazy(
  () => import('../pages/projects/TheProxyMagician/PrivacyPolicy'),
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/break-chain-tag" element={<BreakChainTag />} />
          <Route
            path="projects/the-proxy-magician"
            element={<TheProxyMagician />}
          />
          <Route
            path="projects/the-proxy-magician/privacy"
            element={<TheProxyMagicianPrivacyPolicy />}
          />
          <Route path="projects/perf-debugger" element={<PerfDebugger />} />
          <Route
            path="projects/perf-debugger/privacy-policy"
            element={<PerfDebuggerPrivacyPolicy />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
