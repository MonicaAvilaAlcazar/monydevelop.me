import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Layout from './Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
