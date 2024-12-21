import { Component } from 'react';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        border: '1px dashed red',
        padding: '1rem',
        width: '40%',
        position: 'absolute',
        top: '2rem',
        right: '1rem',
        '@media (max-width: 900px)': {
            boxSizing: 'border-box',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: '0',
            right: '0',
            left: '0',
            bottom: '0',
            backgroundColor: 'white',
            border: '0',
            padding: '0',
            fontSize: '20px'
        }
    },

    menuItem: {
        textAlign: 'right',
        marginBottom: '50px',
        marginRight: '1rem',
        '@media (max-width: 900px)': {
        }
    },
    closeIcon: {
        width: '20px',
        height: '20px'
    },
    
    NoMargPad: {
        '@media(max-width: 900px)': {
            margin: 0,
            padding: 0
        }
    }
})


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
                <div className={css(styles.menuItem)}>Your notifications</div>
                {this.props.displayDrawer
                    ? <div role='ws-notif' className={css(styles.container)}>
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
                            <img className={css(styles.closeIcon)} src={closeIcon} alt="close" />
                        </button>
                        {this.props.listNotifications.length >= 1
                            ?
                            <>
                                <p>Here is the list of notifications</p>
                                <ul className={css(styles.NoMargPad)}>
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