import React, {useEffect, useRef} from 'react';
import {useNotifications} from '../../Provider/NotificationProvider';
import './Notification.css';
import {Cancel, CheckCircle, Error, Info, Warning} from "@mui/icons-material";

const Notification = ({id, type, message, header}) => {
    const {removeNotification} = useNotifications();
    const fadeOutTimerRef = useRef(null);
    const removeTimerRef = useRef(null);

    useEffect(() => {
        fadeOutTimerRef.current = setTimeout(() => {
            const notificationElement = document.getElementById(`notification-${id}`);
            if (notificationElement) {
                notificationElement.classList.add('exit');
            }
        }, 4500);

        removeTimerRef.current = setTimeout(() => {
            removeNotification(id)
        }, 5000);

        return () => {
            clearTimeout(fadeOutTimerRef.current);
            clearTimeout(removeTimerRef.current);
        };
    }, []);

    const getIcon = () => {
        const defaultClasses = 'fs-1';

        switch (type) {
            case 'success':
                return <CheckCircle className={`text-success ${defaultClasses}`}/>
            case 'error':
                return <Error className={`text-danger ${defaultClasses}`}/>
            case 'warning':
                return <Warning className={`text-warning ${defaultClasses}`}/>
            default:
                return <Info className={`text-info ${defaultClasses}`}/>
        }
    }

    return (
        <div id={`notification-${id}`} className={`notification rounded-4 ${type}`}>
            <div className="container-fluid">
                <div className="row p-0 m-0">
                    <div className="col-auto d-flex align-items-center px-0">
                        {getIcon()}
                    </div>
                    <div className="col-auto mx-3">
                        <strong>{header}</strong>
                        <p className="p-0 m-0">{message}</p>
                    </div>
                    <div className="col-auto d-flex align-items-center px-0">
                        <Cancel className="text-secondary fs-3"
                                role="button"
                                onClick={() => removeNotification(id)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


const NotificationContainer = () => {
    const {notifications} = useNotifications();

    return (
        <div className="notification-container">
            {notifications.map(note => (
                <Notification key={note.id} {...note} />
            ))}
        </div>
    );
};

export default NotificationContainer;
