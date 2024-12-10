export default function NotificationItem({ type, html, value }) {
    return (
        html
            ? <li dangerouslySetInnerHTML={html}
                data-notification-type={type}></li>
            : <li data-notification-type={type}>{value}</li>
    )
}