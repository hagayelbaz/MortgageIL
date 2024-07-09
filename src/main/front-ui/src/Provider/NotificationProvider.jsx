import React, {createContext, useContext, useId, useState} from 'react';

const NotificationContext = createContext();
let counter = 0;

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (notification) => {
        const id = `notification-${counter++}`;
        setNotifications(prev => [...prev, { ...notification, id: id }]);
    };

    const removeNotification = (notificationId) => {
        setNotifications(prev => prev.filter(notification => notification.id !== notificationId));
    };

    return (
        <NotificationContext.Provider value={{ addNotification, removeNotification, notifications }}>
            {children}
        </NotificationContext.Provider>
    );
};
