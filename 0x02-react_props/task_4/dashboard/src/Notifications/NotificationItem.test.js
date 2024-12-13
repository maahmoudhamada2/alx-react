import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component testSuite', () => {
    it('Test 1 - Checking component renders without crashing', () => {
        render(<NotificationItem />);
    });

    it('Test 2 - Checking rendering by passing type & value props', () => {
        render(<NotificationItem type="default" value="Test" />);
        // Get list item (li)
        const listitem = screen.getByRole('listitem');
        
        // Checking by attributes and text
        expect(listitem).toBeInTheDocument();
        expect(listitem).toHaveAttribute('data-notification-type', 'default')
        expect(listitem).toHaveTextContent('Test');
    });

    it('Test 3 - Checking rendering by passing html prop', () => {
        render(<NotificationItem html={{ __html: '<b>Test</b>' }} />);
        
        // Get list item (li)
        const listitem = screen.getByRole('listitem');

        // Checking
        expect(listitem).toBeInTheDocument();
        expect(listitem).toHaveTextContent('Test');

    })
})
