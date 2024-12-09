import { render, screen, within } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component TestSuite', () => {
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
        expect(within(NotifDiv).getByRole('paragraph', {text: /Here is the list of notifications/}))
    })
})
