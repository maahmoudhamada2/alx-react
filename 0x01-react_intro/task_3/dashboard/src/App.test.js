import { render, screen, within} from '@testing-library/react';
import App from './App';

describe('App component testSuite', () => {
    it('Test 1 - Checking rendering without crashing', () => {
        render(<App />);
    }),

    it('Test 2 - Checking that Component renders div.App-header', () => {
        render(<App />);
        expect(screen.getByRole('ws-header')).toBeInTheDocument();
    });

    it('Test 3 - Checking that Component renders div.App-body', () => {
        render(<App />);
        expect(screen.getByRole('ws-body')).toBeInTheDocument();
    });

    it('Test 4 - Checking that Component renders div.App-footer', () => {
        render(<App />);
        expect(screen.getByRole('ws-footer')).toBeInTheDocument();
    });
})
