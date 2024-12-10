import { render, screen, within } from '@testing-library/react';
import Header from './Header';

describe('Header component testSuite', () => {
    it('Test 1 - Checking render without crashing', () => {
        render(<Header />);
    });

    it('Test 2 - Checking components render img & h1 tags', () => {
        render(<Header />);
        // Get elements
        const headerDiv = screen.getByRole('ws-header');

        // Checking elements
        expect(within(headerDiv).getByAltText('holb-logo')).toBeInTheDocument();
        expect(within(headerDiv).getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('School dashboard');
    })

})
