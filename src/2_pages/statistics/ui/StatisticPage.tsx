import React, { useState } from "react";
import UserIcon from './UserIcon';
import MenuIcon from './MenuIcon';
import MyDevicesIcon from './MyDevicesIcon';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./StatisticPage.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useLocation } from "react-router-dom";

export const StatisticPage: React.FC = () => {
	const location = useLocation();
	const deviceName = location.state?.name;
	const data = [
		{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
		// ...другие точки данных...
	  ];
	const { deviceId } = useParams();
	const navigate = useNavigate();
	const goToHome = () => {
		navigate('/');
	  };
	  const goToPersonalAccount = () => {
		navigate('/myaccount');
	  };

	return (
		<div className='container'>
			<div className='header' onClick={goToHome}><UserIcon /> {''}</div>
			<div className='sideTab'>
				<button  className='menuButton'>
										<MenuIcon />
				</button>
				<button onClick={goToPersonalAccount} className='menuButton'>
					<MyDevicesIcon />
				</button>
			</div>
			<div className="statisticPageContainer">
      {}
	  <div className="deviceHeader">
      <span className="deviceName">{deviceName}</span>
          <span className="deviceId">{`id: ${deviceId}`}</span></div>
	  	<LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
		</LineChart>
      {}
    </div>
			</div>
	);
};
