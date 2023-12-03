import React from 'react';
import "./EditDeviceModal.css";

interface EditDeviceModalProps {
  device: { id: string; name: string };
  onClose: () => void;
  onDelete: () => void;
  onGoToStatistics: () => void;
}

const EditDeviceModal: React.FC<EditDeviceModalProps> = ({
  device,
  onClose,
  onDelete,
  onGoToStatistics,
}) => {
  return (
    <div className="editDeviceModal">
      <div className="modal">
        <div className="modalContent">
          <h2>{device.name}</h2>
          <p>id: {device.id}</p>
          <button onClick={onGoToStatistics}>Перейти в статистику</button>
          <button onClick={onDelete}className="deleteButton">Удалить</button>
          <button onClick={onClose} className="deleteButton">Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default EditDeviceModal;
