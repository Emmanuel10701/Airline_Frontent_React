// CustomAlert.jsx
import React from 'react';

const CustomAlert = ({ message, type, onClose }) => {
    if (!message) return null;

    return (
        <div className={`fixed top-0 left-0 right-0 p-4 transition-opacity duration-300 ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button onClick={onClose} className="text-white font-bold">✖</button>
            </div>
        </div>
    );
};

export default CustomAlert;
