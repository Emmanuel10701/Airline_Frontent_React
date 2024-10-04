// src/components/Modal.jsx
import React from 'react';

const Modal = ({ message, onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-4">{message}</h2>
                <div className="flex justify-between">
                    <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                        Go to Account Selection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
