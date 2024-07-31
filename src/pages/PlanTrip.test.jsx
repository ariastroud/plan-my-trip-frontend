import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import PlanTrip from './PlanTrip';


describe('PlanTrip Component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <PlanTrip />
      </MemoryRouter>
    );
    expect(screen.getByText('Plan Your Trip')).toBeInTheDocument();
  });

  it('allows the user to enter destination', () => {
    render(
      <MemoryRouter>
        <PlanTrip />
      </MemoryRouter>
    );
    const destinationInput = screen.getByPlaceholderText('Where do you want to go?');
    fireEvent.change(destinationInput, { target: { value: 'Paris' } });
    expect(destinationInput.value).toBe('Paris');
  });

  it('allows the user to select travel style', () => {
    render(
      <MemoryRouter>
        <PlanTrip />
      </MemoryRouter>
    );
    const selectInput = screen.getByText('Pick your travel style!');
    fireEvent.change(selectInput, { target: { value: 'adventure' } });
    expect(screen.getByDisplayValue('Adventure')).toBeInTheDocument();
  });

  it('submits the form and logs the data', () => {
    render(
      <MemoryRouter>
        <PlanTrip />
      </MemoryRouter>
    );
    const destinationInput = screen.getByPlaceholderText('Where do you want to go?');
    const budgetInput = screen.getByPlaceholderText('$USD');
    const preferencesInput = screen.getByPlaceholderText('More sightseeing!');
    const generateButton = screen.getByText('Generate Travel Plan');

    fireEvent.change(destinationInput, { target: { value: 'Paris' } });
    fireEvent.change(budgetInput, { target: { value: '1000' } });
    fireEvent.change(preferencesInput, { target: { value: 'Museum visits' } });

    // Mock console.log
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    fireEvent.click(generateButton);

    expect(consoleLogSpy).toHaveBeenCalledWith({
      destination: 'Paris',
      dates: { startDate: null, endDate: null }, // Replace with actual selected dates if possible
      budget: '1000',
      travelStyle: '', // Check if travelStyle is properly selected in the test
      preferences: 'Museum visits',
    });

    // Clean up
    consoleLogSpy.mockRestore();
  });
});
