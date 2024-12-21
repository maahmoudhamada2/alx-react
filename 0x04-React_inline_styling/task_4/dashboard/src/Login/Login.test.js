import { render, screen } from '@testing-library/react';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Login component testSuite', () => {
    it('Test 1 - Checking component renders without crashing', () => {
        render(<Login />)
    });

    it('Test 2 - Checking component renders 2 inputs & labels', () => {
        render(<Login />);
        // Get Inputs through its label texts
        const emailInput = screen.getByLabelText('Email:');
        const passwordInput = screen.getByLabelText('Password:');

        // Checking Inputs and labels
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    })
})
