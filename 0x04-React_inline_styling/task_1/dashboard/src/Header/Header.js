import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid red'
    },

    AppHeaderHeading: {
        color: 'red'
    },

    AppHeaderImg: {
        width: '150px',
        height: '150px'
    }
})

export default function Header() {
    return (
        <div role="ws-header" className={css(styles.AppHeader)}>
            <img className={css(styles.AppHeaderImg)} src={logo} alt="holb-logo" />
            <h1 className={css(styles.AppHeaderHeading)}>School dashboard</h1>
        </div>
    )
}