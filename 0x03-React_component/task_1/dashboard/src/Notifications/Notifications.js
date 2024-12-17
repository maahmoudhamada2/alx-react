import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
    const buttonUpdate = () => console.log('Close button has been clicked')
    return (
        <>
            <div className="menuItem">Your notifications</div>
            {displayDrawer
                ? <div role='ws-notif' className="Notifications">
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
                    {listNotifications.length >= 1
                        ?
                        <>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {listNotifications.map((elem) => {
                                    return <NotificationItem
                                        key={elem.id}
                                        type={elem.type}
                                        html={elem.html}
                                        value={elem.value} />
                                })}
                            </ul>
                        </>
                        : <p>No new notification for now</p>
                    }
                </div>
                : null}
        </>
    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};