import { render, screen } from '@testing-library/react';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

// Mocking console.log
const spyOnConsole = jest.spyOn(console, 'log').mockImplementation(() => { })

describe('WithLogging HOC testSuite', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    afterAll(() => {
        spyOnConsole.mockRestore();
    });

    it('Test 1 - Check console.log logging correct string mount & unmount with pure html', () => {
        const HOCFunction = WithLogging(() => <h1>Testing</h1>)
        const { unmount } = render(<HOCFunction />);

        // Checking mount case
        expect(spyOnConsole).toHaveBeenCalledTimes(1);
        expect(spyOnConsole).toHaveBeenCalledWith('Component Component is mounted')

        // Checking unmount case
        unmount();
        expect(spyOnConsole).toHaveBeenCalledTimes(2);
        expect(spyOnConsole).toHaveBeenCalledWith('Component Component is going to unmount');
    });

    it('Test 2 - Check console.log loggging correct string mount & unmount with Login comp', () => {
        const HOCFunction = WithLogging(Login);
        const { unmount } = render(<HOCFunction />);

        // Checking mount case
        expect(spyOnConsole).toHaveBeenCalledTimes(1);
        expect(spyOnConsole).toHaveBeenCalledWith('Component Login is mounted')

        // Checking unmount case
        unmount();
        expect(spyOnConsole).toHaveBeenCalledTimes(2);
        expect(spyOnConsole).toHaveBeenCalledWith('Component Login is going to unmount');
    })
})
