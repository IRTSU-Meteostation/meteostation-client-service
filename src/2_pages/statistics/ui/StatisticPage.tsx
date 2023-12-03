import React, { useState } from "react";
import UserIcon from './UserIcon';
import MenuIcon from './MenuIcon';
import MyDevicesIcon from './MyDevicesIcon';
import "./StatisticPage.css";

export const StatisticPage: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='container'>
			<div className='header'><UserIcon /> {''}</div>
			<div className='sideTab'>
				<button  className='menuButton'>
										<MenuIcon />
				</button>
				<button className='menuButton'>
					<MyDevicesIcon />
				</button>
			</div>
			</div>
	);
};
