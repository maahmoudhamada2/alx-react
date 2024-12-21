import { render, screen, within } from '@testing-library/react';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection()

const listCourses = [
    {
        id: 1,
        name: 'ES6',
        credit: 60
    },
    {
        id: 2,
        name: 'Webpack',
        credit: 20
    },
    {
        id: 3,
        name: 'React',
        credit: 40
    }
];

describe('CourseList component testSuite', () => {
    it('Test 1 - Check Component rendering without crashing', () => {
        render(<CourseList />);
    });

    it('Test 2 - Check Component renders 5 rows', () => {
        render(<CourseList listCourses={listCourses}/>);
        const courseTable = screen.getByRole('table');
        expect(within(courseTable).getAllByRole('row')).toHaveLength(5);
    })
})
