import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center'
    }
})
export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <form className={css(styles.formContainer)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <button type="submit">OK</button>
            </form>
        </>
    )
}