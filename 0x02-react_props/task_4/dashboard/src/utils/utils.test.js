import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('Utils testSuites', () => {
    it('Test 1 - getFullYear function return correct date', () => {
        expect(getFullYear()).toBe(new Date().getFullYear())
    });

    it('Test 2 - getFooterCopy function return correct string (True case)', () => {
        expect(getFooterCopy(true)).toBe('ALX');
    })

    it('Test 3 - getFooterCopy function return correct string (False case)', () => {
        expect(getFooterCopy(false)).toBe('ALX main dashboard');
    });

    it('Test 4 - getLatestNotification function return correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
    })
})