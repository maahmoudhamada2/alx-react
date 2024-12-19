import PropTypes from 'prop-types';
import React from 'react';

const NotificationItem = React.memo(({ type, html, value, markAsRead }) => {
    return (
        html && !value
            ? <li dangerouslySetInnerHTML={html}
                data-notification-type={type}
                onClick={markAsRead}
            ></li>
            : <li
                data-notification-type={type}
                onClick={markAsRead}>{value}</li>
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