import { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.buttonUpdate = this.buttonUpdate.bind(this);
        this.markAsRead = this.markAsRead.bind(this);
    }

    buttonUpdate() {
        console.log('Close button has been clicked')
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }
    render() {
        return (
            <>
                <div className="menuItem">Your notifications</div>
                {this.props.displayDrawer
                    ? <div role='ws-notif' className="Notifications">
                        <button aria-label="Close"
                            onClick={this.buttonUpdate}
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
                        {this.props.listNotifications.length >= 1
                            ?
                            <>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {this.props.listNotifications.map((elem) => {
                                        return <NotificationItem
                                            markAsRead={() => this.markAsRead(elem.id)}
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
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length
    }
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};