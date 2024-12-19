import { render, screen, within } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import * as BodySection from './BodySection';

const spyOnBodySection = jest.spyOn(BodySection, 'default');

describe('BodySectionWithMarginBottom component testSuite', () => {
    it('Test 1 - Check component renders correctly a BodySection component', () => {
        render(<BodySectionWithMarginBottom title='Test heading'>
            <p>Children</p>
        </BodySectionWithMarginBottom>)

        // Get body divs
        const divWithMargin = screen.queryAllByRole('generic')[1];
        const divBodySection = screen.queryAllByRole('generic')[2];

        // Checking div in the document
        expect(divWithMargin).toBeInTheDocument();
        expect(divBodySection).toBeInTheDocument();

        // Checking div classes
        expect(divWithMargin).toHaveClass('bodySectionWithMargin');
        expect(divBodySection).toHaveClass('bodySection');

        // Check divWithMaring childrens
        expect(spyOnBodySection).toHaveBeenCalledTimes(1);

        // Check divBodySection
        expect(within(divBodySection).getByRole('heading')).toHaveTextContent('Test heading');
        expect(within(divBodySection).getByRole('paragraph')).toHaveTextContent('Children')
    })
})
