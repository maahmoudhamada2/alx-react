import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    movingRight: {
        marginRight: '0.5rem'
    }
})

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <form className={css(styles.formContainer)}>
                <label className={css(styles.movingRight)} htmlFor="email">Email:</label>
                <input className={css(styles.movingRight)} type="email" id="email" />
                <label className={css(styles.movingRight)} htmlFor="password">Password:</label>
                <input className={css(styles.movingRight)} type="password" id="password" />
                <button className={css(styles.movingRight)} type="submit">OK</button>
            </form>
        </>
    )
}