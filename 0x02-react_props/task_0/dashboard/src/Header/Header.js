import logo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
    return (
        <div role="ws-header" className="App-header">
            <img src={logo} alt="holb-logo" />
            <h1>School dashboard</h1>
        </div>
    )
}