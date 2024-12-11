import { render, screen, within } from '@testing-library/react';
import Notifications from './Notifications';
import * as NotificationItem from './NotificationItem';

// Spy on Components
const spyOnNotiyItem = jest.spyOn(NotificationItem, 'default');

describe('Notifications component TestSuite', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    it('Task 1 - Check rendering component without crashing', () => {
        render(<Notifications />)
    });

    it('Task 2 - Check that component rendering a three list items', () => {
        render(<Notifications />);
        const unList = screen.getByRole('list');
        expect(within(unList).getAllByRole('listitem')).toHaveLength(3);
    });

    it('Task 3 - Check that component renders a specific text', () => {
        render(<Notifications />);
        const NotifDiv = screen.getByRole('ws-notif');
        expect(within(NotifDiv).getByRole('paragraph', { text: /Here is the list of notifications/ }))
    });

    it('Task 4 - Check component renders NotificationItem', () => {
        render(<Notifications />);
        // Checking that Child component renderd
        expect(spyOnNotiyItem).toHaveBeenCalledTimes(3);

        // Checking first item in the list's html
        const firstItem = screen.getAllByRole('listitem')[0]
        expect(firstItem).toHaveTextContent('New course available')
    })
})
