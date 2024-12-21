import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    formItems: {
        marginRight: '0.5rem',
        '@media (max-width: 900px)': {
            border: '0',
            backgroundColor: 'transparent'
        }
    },

    formContainer: {
        '@media (max-width: 900px)': {
            display: 'grid',
            gridTemplateColumns: '5rem 10rem',
        }
    },

    buttonWidth: {
        width: '2rem'
    }
})

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <form className={css(styles.formContainer)}>
                <label className={css(styles.formItems)}htmlFor="email">Email:</label>
                <input className={css(styles.formItems)}type="email" id="email" />
                <label className={css(styles.formItems)}htmlFor="password">Password:</label>
                <input className={css(styles.formItems)}type="password" id="password" />
                <button className={css(styles.buttonWidth, styles.formItems)} type="submit">OK</button>
            </form>
        </>
    )
}