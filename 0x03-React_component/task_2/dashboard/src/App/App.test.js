import { render, screen } from '@testing-library/react';
import App from './App';
import * as Header from '../Header/Header';
import * as Footer from '../Footer/Footer';
import * as Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import * as CourseList from '../CourseList/CourseList';

// Spying on App component's components
const spyOnHeader = jest.spyOn(Header, 'default');
const spyOnFooter = jest.spyOn(Footer, 'default');
const spyOnLogin = jest.spyOn(Login, 'default');
const spyOnNotify = jest.spyOn(Notifications.prototype, 'render');
const spyOnCourseList = jest.spyOn(CourseList, 'default');
const spyOnAlert = jest.spyOn(window, 'alert').mockImplementation(() => {})

// Mocking props
const logOutMock = jest.fn()

describe('App component testSuite', () => {
    afterAll(() => {
        spyOnFooter.mockRestore();
        spyOnHeader.mockRestore();
        spyOnNotify.mockRestore();
        spyOnLogin.mockRestore();
        spyOnCourseList.mockRestore();
    });
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Test 1 - Checking rendering without crashing', () => {
        render(<App />);
    });

    it('Test 2 - Checking App contain Header component', () => {
        render(<App />);
        expect(spyOnHeader).toHaveBeenCalled();
    });

    it('Test 3 - Checking App contain Notification component', () => {
        render(<App />);
        expect(spyOnNotify).toHaveBeenCalled();
    });

    it('Test 4 - Checking App contain Login component', () => {
        render(<App />);
        expect(spyOnLogin).toHaveBeenCalled();
    });

    it('Test 5 - Checking App contain Footer component', () => {
        render(<App />);
        expect(spyOnFooter).toHaveBeenCalled();
    });

    it('Test 6 - Check CourseList component is not displayed', () => {
        render(<App />);
        expect(spyOnCourseList).toHaveBeenCalledTimes(0);
        expect(screen.queryByRole('table')).toBeNull();
    });

    it('Test 7 - Check Login component is not included when isLoggedIn = true', () => {
        render(<App isLoggedIn={true} />);
        expect(spyOnLogin).toHaveBeenCalledTimes(0);
        expect(spyOnCourseList).toHaveBeenCalledTimes(2);
        expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('Test 8 - Check keys ctrl + h is pressed and correctly executed', () => {
        render(<App logOut={logOutMock}/>);
        const keyBoardKeys = new KeyboardEvent('keydown', {key: 'h', ctrlKey: true})
        document.dispatchEvent(keyBoardKeys);
        expect(spyOnAlert).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled()
        logOutMock.mockRestore();
        spyOnAlert.mockRestore();
    })
});
