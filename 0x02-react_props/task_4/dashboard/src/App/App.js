import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

export default function App({ isLoggedIn }) {
    return (
        <>
            <Notifications />
            <div className="App">
                <Header />
                <div role='ws-body' className="App-body">
                    {isLoggedIn
                        ? <CourseList />
                        : <Login />
                    }
                </div>
                <div role='ws-footer' className="App-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

App.defaultProps = {
    isLoggedIn: false
}