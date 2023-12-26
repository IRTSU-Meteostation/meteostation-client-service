import React, { useState } from "react";
import UserIcon from './UserIcon';
import UserIcon2 from './UserIcon2';
import MenuIcon from './MenuIcon';
import MyDevicesIcon from './MyDevicesIcon';
import DeviceItem from '../../home/ui/DeviceItem';
import EditDeviceModal from '../../home/ui/EditDeviceModal';
import { useNavigate } from "react-router-dom";
import { Device } from '../../home/ui/types';
import "./PersonalAccount.css";


export const PersonalAccount: React.FC = () => {
	const [editModalVisible, setEditModalVisible] = useState(false);
	const [currentDevice, setCurrentDevice] = useState<Device | null>(null);

	const onEditDevice = (device: Device) => {
		setCurrentDevice(device);
		setEditModalVisible(true);
	  };

	const onCloseEditModal = () => {
		setEditModalVisible(false);
	  };

	const onDeleteDevice = () => {
		setUser(prev => ({
		  ...prev,
		  devices: prev.devices.filter(d => d.id !== currentDevice?.id)
		}));
		setEditModalVisible(false);
	  };

	const [user, setUser] = useState({
		fullName: "Иванов Иван Иванович",
		registrationDate: "12.02.2002",
		devices: [
		  { id: '9034183092 owfu9jfwef0f', name: 'Устройство 1' },
		],
	  });

	  const renderDevices = () => {
		return user.devices.map((device: Device) => (
		  <div key={device.id} className="device">
			{device.name}
			{}
		  </div>
		));
	  };
	  
	const navigate = useNavigate();
	const goToHome = () => {
		navigate('/');
	  };
	  const onGoToStatistics = (device: Device) => {
		navigate(`/statistics/${device.id}`, { state: { name: device.name } });
	  };

	return (
		<div >
			<div className='personalAccountContainer'>
				
			<div className='header'  onClick={goToHome}><UserIcon /> {''}</div>
			<div className='sideTab'>
				<button className='menuButton'>
										<MenuIcon />
				</button>
				<button className='menuButton'>
					<MyDevicesIcon />
				</button>
			</div>
			<div className="accountInfo">
        <div className="userIcon"><UserIcon2 /></div>
        <div className="userInfo">
          <h1>{user.fullName}</h1>
          <p>Дата регистрации: {user.registrationDate}</p>
        </div>
      </div>
      <h2>Мои устройства</h2>
      <div className="devicesList">
	  {user.devices.map((device) => (
      <DeviceItem
	  key={device.id}
	  id={device.id}
	  name={device.name}
	  onEdit={() => onEditDevice(device)}
	/>
    ))}
      </div>
	  {currentDevice && editModalVisible && (
        <EditDeviceModal
          device={currentDevice}
          onClose={onCloseEditModal}
          onDelete={onDeleteDevice}
          onGoToStatistics={() => onGoToStatistics(currentDevice)}
        />
      )}
			</div>
		</div>
	);
};
