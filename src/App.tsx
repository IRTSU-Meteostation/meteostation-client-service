import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomePage from './features/Home/HomePage';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<HomePage />} /> 
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
