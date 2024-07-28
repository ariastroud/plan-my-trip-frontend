import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
    test('Hero renders', () => {
        render(<Hero />);
        expect(screen.getByText('PlanMyTrip')).toBeInTheDocument();
    });
});