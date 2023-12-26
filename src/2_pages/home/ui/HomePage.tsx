import React, { useState } from "react";
import { YMaps, Map, Placemark, Polygon } from "react-yandex-maps";
import "./HomePage.css";
import UserIcon from './UserIcon';
import MenuIcon from './MenuIcon';
import MyDevicesIcon from './MyDevicesIcon';
import { useNavigate } from "react-router-dom";
import AddDeviceModal from './AddDeviceModal';
import DeviceItem from './DeviceItem';
import EditDeviceModal from './EditDeviceModal';
import { Device } from './types';


export const HomePage: React.FC = () => {
	const [showAddDeviceModal, setShowAddDeviceModal] = useState<boolean>(false);
	const toggleAddDeviceModal = () => setShowAddDeviceModal(!showAddDeviceModal);
	const navigate = useNavigate();
	const goToHome = () => {
		navigate('/');
	  };
	const goToAccount = () => {
	  navigate('/myaccount');
	};
	const onGoToStatistics = (device: Device) => {
		navigate(`/statistics/${device.id}`, { state: { name: device.name } });
	  };
	const [devices, setDevices] = useState<Device[]>([
    { id: '9034183092 owfu9jfwef0f', name: 'Устройство 1' },
		// other devices...etc
	  ]);

	const addDevice = (newDeviceId: string) => {
		const newDevice: Device = {
		  id: newDeviceId,
		  name: `Устройство ${devices.length + 1}`
		};
		setDevices([...devices, newDevice]);
	  };

	  const [editModalVisible, setEditModalVisible] = useState(false);
	  const [currentDevice, setCurrentDevice] = useState<Device | null>(null);
	  const openEditModal = (device: Device) => {
		setCurrentDevice(device);
		setEditModalVisible(true);
	  };
	
	  const closeEditModal = () => {
		setEditModalVisible(false);
	  };

	  const handleDeleteDevice = () => {
		if (currentDevice) {
		  setDevices(devices.filter(device => device.id !== currentDevice.id));
		  closeEditModal();
		}
	  };
	  const handleGoToStatistics = () => {
		if (currentDevice) {
		  navigate(`/statistics/${currentDevice.id}`);
		  closeEditModal();
		}
	  };

	return (
		<div className='container'>
			<div className='header'  onClick={goToHome}><UserIcon /> {''}</div>
			<div className='sideTab'>
				<button className='menuButton'>
										<MenuIcon />
				</button>
				<button onClick={goToAccount} className='menuButton'>
					<MyDevicesIcon />
				</button>
			</div>
			<div className='sideMenu'>
			{devices.map((device) => (
          <DeviceItem
            key={device.id}
            id={device.id}
            name={device.name}
            onEdit={() => openEditModal(device)} // передаем openEditModal как callback
          />
        ))}
        <button onClick={toggleAddDeviceModal} className='addButton'>
          Добавить устройство
        </button>    
        {showAddDeviceModal && <AddDeviceModal onAdd={addDevice} onClose={toggleAddDeviceModal} />}</div>
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
			{editModalVisible && currentDevice && (
      <EditDeviceModal
	  device={currentDevice}
	  onClose={closeEditModal}
	  onDelete={handleDeleteDevice}
	  onGoToStatistics={() => onGoToStatistics(currentDevice)}
	/>
    )}
		</div>
	);
};
