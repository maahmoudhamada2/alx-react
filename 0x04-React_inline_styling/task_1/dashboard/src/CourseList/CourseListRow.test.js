import { render, screen, within} from '@testing-library/react';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection()

describe('CourseListRow component testSuite', () => {
    it('Test 1 - Check rendering 1 cell with colspan = 2 secondCell = null & isHeader = true', () => {
        render(
            <table>
                <thead>
                    <CourseListRow
                        isHeader={true}
                        textFirstCell={"First Header"}
                    />
                </thead>
            </table>
        );
        const tableHead = screen.getByRole('columnheader');
        expect(tableHead).toBeInTheDocument();
        expect(tableHead).toHaveAttribute('colspan', '2');
        expect(tableHead).toHaveTextContent('First Header')
    });

    it('Test 2 - Check rendering 2 cells when seconCell != null & isHeader = true', () => {
        render(
            <>
                <table>
                    <thead>
                        <CourseListRow
                            isHeader={true}
                            textFirstCell={"First Header"}
                            textSecondCell={"Second Header"}
                        />
                    </thead>
                </table>
            </>
        );
        const tableHeaders = screen.getAllByRole('columnheader');
        expect(tableHeaders).toHaveLength(2);
        expect(tableHeaders[0]).toHaveTextContent('First Header')
        expect(tableHeaders[1]).toHaveTextContent('Second Header')
    });

    it('Test 3 - Check rendering 2 table data (td) within tr isHeader = false', () => {
        render(
            <>
                <table>
                    <tbody>
                        <CourseListRow
                            isHeader={false}
                            textFirstCell={'First Cell'}
                            textSecondCell={'Second Cell'}
                        />
                    </tbody>
                </table>
            </>
        );
        const tableRow = screen.getByRole('row');
        expect(screen.getAllByRole('cell')).toHaveLength(2);
        expect(within(tableRow).getAllByRole('cell')[0]).toHaveTextContent('First Cell')
        expect(within(tableRow).getAllByRole('cell')[1]).toHaveTextContent('Second Cell')

    })
})
