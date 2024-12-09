import logo from './holberton-logo.jpg';
import './App.css';

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
            <p>Copyright 2020 - ALX</p>
        </div>
        </div>
    )
}