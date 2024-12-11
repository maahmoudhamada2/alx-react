import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';

export default function Notifications() {
    const buttonUpdate = () => console.log('Close button has been clicked')
    return (
        <div role='ws-notif' className="Notifications">
            <button aria-label="Close"
                onClick={buttonUpdate}
                style={{
                    width: "20px",
                    height: "20px",
                    border: '0',
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: "0.5rem",
                    right: "1rem",
                    cursor: "pointer"
                }}>
                <img src={closeIcon} alt="close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}