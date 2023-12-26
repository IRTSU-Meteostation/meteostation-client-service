import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../2_pages/home";
import { Register } from "../2_pages/signup";
import { Login } from "../2_pages/signin";
import { PersonalAccount} from "../2_pages/account";
import { StatisticPage } from "../2_pages/statistics/ui/StatisticPage";

import "../6_shared/style/style.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/signin' element={<Login />} />
				<Route path='/signup' element={<Register />} />
				<Route path='/' element={<HomePage />} />
				<Route path="/statistics/:deviceId" element={<StatisticPage />} />
				<Route path='/myaccount' element={<PersonalAccount/>}/>
				{/* <Route path="/" element={<Login />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
