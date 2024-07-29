import { describe, test, expect, vi} from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Itinerary from './Itinerary';

const mockTravelPlansData = {
    "destination": "Paris",
    "latitudeDestination": "48.8566",
    "longitudeDestination": "2.3522",
    "startDate": "2022-08-20",
    "endDate": "2022-08-21",
    "budget": 2000,
    "itinerary": [
        {
            "day": 1,
            "activities": [
                {
                    "activity": "Visit the Eiffel Tower",
                    "latitude": "48.8584",
                    "longitude": "2.2945",
                    "description": "Iconic landmark offering city views from its observation decks."
                },
                {
                    "activity": "Explore Louvre Museum",
                    "latitude": "48.8606",
                    "longitude": "2.3376",
                    "description": "Home to thousands of works of art, including the Mona Lisa and Venus de Milo."
                }
            ],
            "placesToEat": [
                {
                    "place": "Le Procope",
                    "latitude": "48.8538",
                    "longitude": "2.3409",
                    "description": "Oldest cafe in Paris with a historic ambiance and traditional French cuisine."
                },
                {
                    "place": "L'Avenue",
                    "latitude": "48.8661",
                    "longitude": "2.3062",
                    "description": "Upscale restaurant known for its celebrity sightings and elegant atmosphere."
                }
            ]
        },
        {
            "day": 2,
            "activities": [
                {
                    "activity": "Cruise on the Seine River",
                    "latitude": "48.8583",
                    "longitude": "2.2945",
                    "description": "Enjoy a scenic boat tour passing by iconic landmarks like Notre Dame Cathedral."
                }
            ],
            "placesToEat": [
                {
                    "place": "Les Deux Magots",
                    "latitude": "48.8549",
                    "longitude": "2.3338",
                    "description": "Historic cafe once frequented by intellectuals like Hemingway and Picasso."
                }
            ]
        }
    ]
};

describe('Itinerary Component', () => {

    test('renders correctly', () => {
        render(<Itinerary travelPlansData={mockTravelPlansData} handleDayClick={() => {}} />);
        expect(screen.getByText('Day 1')).toBeInTheDocument();
        expect(screen.getByText('Visit the Eiffel Tower')).toBeInTheDocument();
        expect(screen.getByText('Le Procope')).toBeInTheDocument();

        expect(screen.getByText('Day 2')).toBeInTheDocument();
        expect(screen.getByText('Cruise on the Seine River')).toBeInTheDocument();
        expect(screen.getByText('Les Deux Magots')).toBeInTheDocument();

        const whereToEatHeading = screen.getAllByText('Where to Eat');
        expect(whereToEatHeading).toHaveLength(2);
        whereToEatHeading.forEach((heading) => {
            expect(heading).toBeInTheDocument();
        });
    });

    test('displays all list items', () => {
        render(<Itinerary travelPlansData={mockTravelPlansData} handleDayClick={() => {}} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(8);
    });

    test('calls handleDayClick when a day header is clicked', () => {
        const handleDayClick = vi.fn();
        render(<Itinerary travelPlansData={mockTravelPlansData} handleDayClick={handleDayClick} />);
        fireEvent.click(screen.getByText('Day 1'));
        expect(handleDayClick).toHaveBeenCalledWith(1);
    });

    test('returns error message with missing itinerary data', () => {
        render(<Itinerary travelPlansData={{ itinerary: [] }} handleDayClick={() => {}} />);
        expect(screen.getByText('An error occurred! Missing itinerary data.')).toBeInTheDocument();
    })
});