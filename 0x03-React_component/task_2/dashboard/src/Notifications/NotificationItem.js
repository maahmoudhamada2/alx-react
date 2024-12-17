import PropTypes from 'prop-types';
import { Component } from 'react';

export default class NotificationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.html && !this.props.value
                ? <li dangerouslySetInnerHTML={this.props.html}
                    data-notification-type={this.props.type}
                    onClick={this.props.markAsRead}
                ></li>
                : <li
                    data-notification-type={this.props.type}
                    onClick={this.props.markAsRead}>{this.props.value}</li>
        )
    }
}

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