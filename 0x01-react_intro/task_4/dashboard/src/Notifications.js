import { getFooterCopy, getFullYear, getLatestNotification } from './utils';
import './Notifications.css';
import closeIcon from './close-icon.png'

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
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}