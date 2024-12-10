import { render, screen } from '@testing-library/react';
import App from './App';
import * as Header from '../Header/Header';
import * as Footer from '../Footer/Footer';
import * as Login from '../Login/Login';
import * as Notifications from '../Notifications/Notifications';

// Spying on App component's components
const spyOnHeader = jest.spyOn(Header, 'default');
const spyOnFooter = jest.spyOn(Footer, 'default');
const spyOnLogin = jest.spyOn(Login, 'default');
const spyOnNotify = jest.spyOn(Notifications, 'default');

describe('App component testSuite', () => {
    afterAll(() => {
        spyOnFooter.mockRestore();
        spyOnHeader.mockRestore();
        spyOnNotify.mockRestore();
        spyOnLogin.mockRestore();
    });

    it('Test 1 - Checking rendering without crashing', () => {
        render(<App />);
    });

    it('Test 2 - Checking App contain Header component', () => {
        render(<App />);
        expect(spyOnHeader).toHaveBeenCalled();
    });
    
    it ('Test 3 - Checking App contain Notification component', () => {
        render(<App />);
        expect(spyOnNotify).toHaveBeenCalled();
    });
    
    it ('Test 4 - Checking App contain Login component', () => {
        render(<App />);
        expect(spyOnLogin).toHaveBeenCalled();
    });
    
    it ('Test 5 - Checking App contain Footer component', () => {
        render(<App />);
        expect(spyOnFooter).toHaveBeenCalled();
    });

});
