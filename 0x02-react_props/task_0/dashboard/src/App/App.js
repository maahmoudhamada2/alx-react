import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

export default function App() {
    return (
        <>
            <Notifications />
            <div role='ws-header' className="App">
                <Header />
                <div role='ws-body' className="App-body">
                    <Login />
                </div>
                <div role='ws-footer' className="App-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}