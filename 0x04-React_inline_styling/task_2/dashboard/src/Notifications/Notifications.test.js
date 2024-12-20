import { render, screen, within } from '@testing-library/react';
import Notifications from './Notifications';
// import * as NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const dummyListData = [
    {
        id: 1,
        type: 'default',
        value: 'First dummy item'
    },
    {
        id: 2,
        type: 'urgent',
        value: 'Second dummy item'
    },
    {
        id: 3,
        html: { __html: '<b>Third dummy item</b>' },
        type: 'urgent'
    }
]

// Spy Functions
// const spyOnNotiyItem = jest.spyOn(NotificationItem, 'default');
const spyOnConsole = jest.spyOn(console, 'log').mockImplementation(() => { });

describe('Notifications component TestSuite', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    });
    afterAll(() => {
        // spyOnNotiyItem.mockRestore();
        spyOnConsole.mockRestore();
    });

    it('Test 1 - Check rendering component without crashing', () => {
        render(<Notifications />)
    });

    it('Test 2 - Check that component rendering a three list items', () => {

        render(<Notifications
            displayDrawer={true}
            listNotifications={dummyListData}
        />);
        const unList = screen.getByRole('list');
        expect(within(unList).getAllByRole('listitem')).toHaveLength(3);
    });

    it('Test 3 - Check that component renders a specific text', () => {
        render(<Notifications
            displayDrawer={true}
            listNotifications={dummyListData} />);
        const NotifDiv = screen.getByRole('ws-notif');
        expect(within(NotifDiv).getByText('Here is the list of notifications')).toBeInTheDocument();
    });

    // it('Test 4 - Check component renders NotificationItem', () => {
    //     render(<Notifications
    //         displayDrawer={true}
    //         listNotifications={dummyListData} />);

    //     // Checking that Child component renderd
    //     expect(spyOnNotiyItem).toHaveBeenCalledTimes(3);

    //     // Checking first item in the list's html
    //     const firstItem = screen.getAllByRole('listitem')[0]
    //     expect(firstItem).toHaveTextContent('First dummy item')
    // });

    it('Test 5 - Check menuItem is displayed when displayDrawer = false', () => {
        render(<Notifications displayDrawer={false} />);
        expect(screen.getByText('Your notifications')).toBeInTheDocument();
    });

    it('Test 6 - Check div.Notifications is not displaying - displayDrawer = false', () => {
        render(<Notifications displayDrawer={false} />);
        expect(screen.queryByRole('ws-notif')).toBeNull();
    });

    it('Test 7 - Check menuItem is displayed when displayDrawer = true', () => {
        render(<Notifications displayDrawer={true} />);
        expect(screen.getByText('Your notifications')).toBeInTheDocument();
    });

    it('Test 8 - Check div.Notifications is not displaying - displayDrawer = true', () => {
        render(<Notifications displayDrawer={true} />);
        expect(screen.queryByRole('ws-notif')).toBeInTheDocument();
    });

    it('Test 9 - Check Component renders correctly without listNot prop', () => {
        render(<Notifications displayDrawer={true} />)
        const NotifDiv = screen.getByRole('ws-notif');
        expect(screen.queryByText('Here is the list of notifications')).toBeNull();
        expect(within(NotifDiv).getByText('No new notification for now')).toBeInTheDocument();
    });

    it('Test 10 - Check that when calling markAsRead console.log logging correctly', () => {
        const notifyInst = new Notifications();
        notifyInst.markAsRead(1998)
        expect(spyOnConsole).toHaveBeenCalledTimes(1);
        expect(spyOnConsole).toHaveBeenCalledWith('Notification 1998 has been marked as read');
    });
})
