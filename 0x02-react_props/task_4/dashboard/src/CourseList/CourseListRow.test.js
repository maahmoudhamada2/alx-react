import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component testSuite', () => {
    it('Test 1 - Checking Component when passing isHeader = true & secondCell = null', () => {
        render(
            <table>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Main Header" />
                </thead>
            </table>
        );
        const tableHeader = screen.getByRole('columnheader');
        expect(tableHeader).toBeInTheDocument();
        expect(tableHeader).toHaveTextContent('Main Header')
        expect(tableHeader).toHaveAttribute('colspan', '2');
    });

    it('Test 2 - Checking component when passing isHeader = true & secondCell != null', () => {
        render(
            <table>
                <thead>
                    <CourseListRow 
                    isHeader={true} 
                    textFirstCell="First Header"
                    textSecondCell="Second Header" />
                </thead>
            </table>
        );
        const columnHeaders = screen.getAllByRole('columnheader')
        expect(columnHeaders).toHaveLength(2)


    })
})
