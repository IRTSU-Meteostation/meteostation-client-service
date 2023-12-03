import React from 'react';
import EditIcon from './EditIcon';
import "./DeviceItem.css";
import { Device } from './types';

interface DeviceItemProps {
    id: string;
    name: string;
    onEdit: (device: Device) => void;
  }

const DeviceItem: React.FC<DeviceItemProps> = ({ id, name, onEdit }) => {
    const handleEditClick = () => {
        onEdit({ id, name }); // Создает объект устройства на лету
      };
    
    return (
    <div className="deviceItem">
      <div className="deviceInfo">
        <div className="deviceName">{name}</div>
        <div className="deviceId">{id}</div>
      </div>
      <button onClick={handleEditClick} className="editButton">
        {<EditIcon />}
      </button>
    </div>
  );
};
  export default DeviceItem;
  