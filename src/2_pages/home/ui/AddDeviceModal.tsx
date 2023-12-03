import React, { useState } from 'react';
import './AddDeviceModal.css';

interface AddDeviceModalProps {
  onClose: () => void;
  onAdd: (id: string) => void;
}

const AddDeviceModal: React.FC<AddDeviceModalProps> = ({ onClose, onAdd }) => {
  const [deviceId, setDeviceId] = useState('');

  const handleAdd = () => {
    onAdd(deviceId);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <input
          type="text"
          placeholder="Введите ID устройства"
          value={deviceId}
          onChange={e => setDeviceId(e.target.value)}
        />
        <button onClick={handleAdd}>Добавить</button>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default AddDeviceModal;