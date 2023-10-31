import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../2_pages/home";
import { Register } from "../2_pages/signup";
import { Login } from "../2_pages/signin";

import "../6_shared/style/style.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/signin' element={<Login />} />
				<Route path='/signup' element={<Register />} />
				<Route path='/' element={<HomePage />} />
				{/* <Route path="/" element={<Login />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
