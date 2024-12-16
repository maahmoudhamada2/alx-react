import { render, screen, within } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component testSuite', () => {
    it('Test 1 - Check Component rendering without crashing', () => {
        render(<CourseList />);
    });

    it('Test 2 - Check Component renders 5 rows', () => {
        render(<CourseList />);
        const courseTable = screen.getByRole('table');
        expect(within(courseTable).getAllByRole('row')).toHaveLength(5);
    })
})
