import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

export default function App() {
    return (
        <div className="App-layout">
        <div className="App-header">
            <img src={logo} alt="holb-logo"/>
            <h1>School dashboard</h1>
        </div>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
        </div>
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
        </div>
    )
}