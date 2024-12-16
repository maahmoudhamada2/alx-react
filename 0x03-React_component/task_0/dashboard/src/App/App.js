import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { Component } from 'react';

const listCourses = [
    {
        id: 1,
        name: 'ES6',
        credit: 60
    },
    {
        id: 2,
        name: 'Webpack',
        credit: 20
    },
    {
        id: 3,
        name: 'React',
        credit: 40
    }
];

const listNotifications = [
    {
        id: 1,
        type: 'default',
        value: 'New course available'
    },
    {
        id: 2,
        type: 'urgent',
        value: 'New resume available'
    },
    {
        id: 3,
        type: 'urgent',
        html: { __html: getLatestNotification() }
    }
]

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Notifications listNotifications={listNotifications} />
                <div className="App">
                    <Header />
                    <div role='ws-body' className="App-body">
                        {this.props.isLoggedIn
                            ? <CourseList listCourses={listCourses} />
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
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

App.defaultProps = {
    isLoggedIn: false
}