import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    red: {
        color: 'red'
    },
    blue: {
        color: 'blue'
    }
})

const NotificationItem = React.memo(({ type, html, value, markAsRead }) => {
    const classname = css(type === 'default' ? styles.blue : styles.red)
    return (
        html && !value
            ? <li dangerouslySetInnerHTML={html}
                data-notification-type={type}
                onClick={markAsRead}
                className={classname}
            ></li>
            : <li
                data-notification-type={type}
                onClick={markAsRead}
                className={classname}
            >{value}</li>
    )
})

export default NotificationItem;

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: { __html: '' },
    markAsRead: () => { }
}