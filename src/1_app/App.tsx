import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '../2_pages/home';
import { Register } from '../2_pages/signup';
import { Login } from '../2_pages/signin';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<HomePage />} /> 
                {/* <Route path="/" element={<Login />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
