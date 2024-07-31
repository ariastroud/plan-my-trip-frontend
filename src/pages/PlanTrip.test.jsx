import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlanTrip from './PlanTrip';

describe('PlanTrip', () => {
    test('PlanTrip renders', () => {
        render(<PlanTrip />);
        expect(screen.getByText('Plan Your Trip')).toBeInTheDocument();
    });
});
