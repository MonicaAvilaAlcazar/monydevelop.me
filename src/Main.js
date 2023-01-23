import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    );
};

export default Main;
