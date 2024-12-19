import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection component testSuites', () => {
    it('Test 1 - Check component renders with h2 and children', () => {
        render(<BodySection title="test title">
            <p>test children node</p>
        </BodySection>);

        // Get elements h2 & p
        const bodyHeading = screen.getByRole('heading')
        const bodyChild = screen.getByRole('paragraph');
        
        // Checking body heading (h2)
        expect(bodyHeading).toBeInTheDocument();
        expect(bodyHeading).toHaveTextContent('test title');
        
        //Checking body child (p)
        expect(bodyChild).toBeInTheDocument();
        expect(bodyChild).toHaveTextContent('test children node');
    });

})
