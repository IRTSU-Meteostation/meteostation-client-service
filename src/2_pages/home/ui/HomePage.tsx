import React, { useState } from "react";
import { YMaps, Map, Placemark, Polygon } from "react-yandex-maps";
import "./HomePage.css";
import UserIcon from './UserIcon';
import MenuIcon from './MenuIcon';
import MyDevicesIcon from './MyDevicesIcon';
import { useNavigate } from "react-router-dom";
import AddDeviceModal from './AddDeviceModal';

export const HomePage: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [showAddDeviceModal, setShowAddDeviceModal] = useState<boolean>(false);
	const toggleAddDeviceModal = () => setShowAddDeviceModal(!showAddDeviceModal);
	const navigate = useNavigate();
	const goToAccount = () => {
		navigate('/myaccount');
	  };

	return (
		<div className='container'>
			<div className='header'><UserIcon /> {''}</div>
			<div className='sideTab'>
				<button onClick={() => setMenuOpen(!menuOpen)} className={`menuButton ${menuOpen ? 'active' : ''}`}>
					<MenuIcon />
				</button>
				<button onClick={goToAccount} className={`menuButton ${menuOpen ? 'active' : ''}`}>
					<MyDevicesIcon />
				</button>
			</div>
			{menuOpen && <div className='sideMenu'>
			<button onClick={toggleAddDeviceModal} className='addButton'>
        Добавить устройство
      </button>
      {showAddDeviceModal && <AddDeviceModal onClose={toggleAddDeviceModal} />}Содержимое меню</div>}
			<div className='mapContainer'>
				<YMaps>
					<Map
						defaultState={{ center: [47.2168, 38.9198], zoom: 9 }}
						width='100%'
						height='100%'>
						<Placemark geometry={[47.2168, 38.9198]} />
						<Polygon
							geometry={[
								[
									[47.2168, 38.9198],
									[47.3, 39.0],
								],
							]}
							fill='#FF0000'
						/>
					</Map>
				</YMaps>
			</div>
		</div>
	);
};
