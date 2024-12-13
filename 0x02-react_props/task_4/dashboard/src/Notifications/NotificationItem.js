import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
    return (
        html
            ? <li dangerouslySetInnerHTML={html}
                data-notification-type={type}></li>
            : <li data-notification-type={type}>{value}</li>
    )
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
};

NotificationItem.defaultProps = {
    type: 'default',
}