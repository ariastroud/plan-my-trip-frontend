import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
    test('UserProfile renders', () => {
        render(<UserProfile />);
        expect(screen.getByText('User ID:')).toBeInTheDocument();
    });
});
