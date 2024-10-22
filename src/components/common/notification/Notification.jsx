// Notification.js
import React, { useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap'; // Sử dụng Bootstrap cho thông báo

const Notification = ({ show, message, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Tự động đóng thông báo sau 3 giây
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <ToastContainer position="top-end">
            <Toast show={show} onClose={onClose}>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default Notification;
