import './Login.css';

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <button type="submit">OK</button>
            </form>
        </>
    )
}