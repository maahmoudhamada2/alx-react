import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection()
// Spy functions
const mockedAsRead = jest.fn((id) => console.log(`id = ${id}`))
const spyOnConsole = jest.spyOn(console, 'log').mockImplementation(() => { });

describe('NotificationItem component testSuite', () => {

    afterAll(() => {
        mockedAsRead.mockRestore();
        spyOnConsole.mockRestore()
    });

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
    });

    it('Test 4 - Checking markAsRead property method', () => {
        render(<NotificationItem markAsRead={() => mockedAsRead(100)} value={'Test'} />)
        fireEvent.click(screen.getByRole('listitem'));
        expect(mockedAsRead).toHaveBeenCalledTimes(1);
        expect(spyOnConsole).toHaveBeenCalledTimes(1);
        expect(spyOnConsole).toHaveBeenCalledWith('id = 100')
    })
})
