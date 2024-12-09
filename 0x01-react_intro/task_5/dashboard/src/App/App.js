import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

export default function App() {
    return (
        <div role='ws-header' className="App-layout">
        <div className="App-header">
            <img src={logo} alt="holb-logo"/>
            <h1>School dashboard</h1>
        </div>
        <div role='ws-body' className="App-body">
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <button type="submit">OK</button>
            </form>
        </div>
        <div role='ws-footer'className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
        </div>
    )
}