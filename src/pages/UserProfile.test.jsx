import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import UserProfile from './UserProfile';

// Mock the NavBar component
vi.mock('../components/NavBar', () => ({
  __esModule: true,
  default: () => <div>NavBar Mock</div>,
}));

// Mock the Itinerary component
vi.mock('../components/Itinerary', () => ({
  __esModule: true,
  default: () => <div>Itinerary Mock</div>,
}));

describe('UserProfile Component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <UserProfile />
      </MemoryRouter>
    );
    expect(screen.getByText('Hi, Traveler!')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('User ID: 123456')).toBeInTheDocument();
    expect(screen.getByText('Email: johndoe@example.com')).toBeInTheDocument();
  });

//   it('calls handleLogout when Sign Out button is clicked', () => {
//     // Mock the console log or actual implementation of logout if necessary
//     const handleLogout = vi.spyOn(console, 'log').mockImplementation(() => {});

//     render(
//       <MemoryRouter>
//         <UserProfile />
//       </MemoryRouter>
//     );

//     const signOutButton = screen.getByText('Sign Out');
//     fireEvent.click(signOutButton);

//     // Check if the mock function was called
//     expect(handleLogout).toHaveBeenCalled();

//     // Restore the original function
//     handleLogout.mockRestore();
//   });

//   it('displays the itinerary tab content when the second tab is selected', () => {
//     render(
//       <MemoryRouter>
//         <UserProfile />
//       </MemoryRouter>
//     );

//     const itineraryTab = screen.getByLabelText('Saved Trips');
//     fireEvent.click(itineraryTab);

//     // Check if the Itinerary component's mock content is displayed
//     expect(screen.getByText('Itinerary Mock')).toBeInTheDocument();
//   });
});
