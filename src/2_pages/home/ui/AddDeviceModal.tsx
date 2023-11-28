import React from 'react';
import './AddDeviceModal.css';

interface AddDeviceModalProps {
  onClose: () => void;
}

const AddDeviceModal: React.FC<AddDeviceModalProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Добавить устройство</h2>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default AddDeviceModal;