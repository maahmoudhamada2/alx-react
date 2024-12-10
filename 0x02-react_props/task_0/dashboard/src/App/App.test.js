import { render, screen, within} from '@testing-library/react';
import App from './App';

describe('App component testSuite', () => {
    it('Test 1 - Checking rendering without crashing', () => {
        render(<App />);
    })
});
