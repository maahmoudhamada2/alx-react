import { Component } from 'react';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const opacityKeyFrames = {
    'from': {
        opacity: '0.5',
    },
    'to': {
        opacity: 1
    }
}

const translateKeyFrames = {
    '0%': {
        transform: 'translateY(5px)'
    },
    '50%': {
        transform: 'translateY(-5px)'
    },
    '100%': {
        transform: 'translateY(0)'
    }
}

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
        float: 'right',
        backgroundColor: '#fff8f8',
        fontWeight: 'bold',
        ':hover': {
            animationName: [opacityKeyFrames, translateKeyFrames],
            animationDuration: '1s, 0.5s',
            animationIterationCount: '3',
            cursor: 'pointer'
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
    },

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
                    : <div className={css(styles.menuItem)}>Your notifications</div> }
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