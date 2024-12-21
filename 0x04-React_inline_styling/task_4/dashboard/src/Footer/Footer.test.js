import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component testSuite', () => {
    it('Test 1 - Checking component renders without crashing', () => {
        render(<Footer />);
    });

    it('Test 2 - Checking component renders a specific text', () => {
        render(<Footer />);
        const footerParagraph = screen.getByRole('paragraph');
        expect(footerParagraph).toBeInTheDocument();
        expect(footerParagraph).toHaveTextContent(/Copyright/);
    })
})
