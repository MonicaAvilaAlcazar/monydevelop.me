import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import BreakChainTag from '../pages/projects/BreakChainTag';
import Home from '../pages/Home';
import Layout from './Layout';
import Projects from '../pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/break-chain-tag" element={<BreakChainTag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
