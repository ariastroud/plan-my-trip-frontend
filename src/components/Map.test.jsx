import { describe, test, expect} from 'vitest';
import { screen, render } from '@testing-library/react';
import Map from './Map';

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

describe('Map Component', () => {

    test('should render MapContainer, TileLayer and all Marker elements', () => {
        render(<Map travelPlansData={mockTravelPlansData} selectedDay={null} />);
        const mapContainer = document.querySelector('.leaflet-container');
        expect(mapContainer).toBeInTheDocument();
        
        const tileLayer = document.querySelector('.leaflet-tile-pane');
        expect(tileLayer).toBeInTheDocument();

        const markers = screen.queryAllByAltText("Marker");
        expect(markers).toHaveLength(6);
    });

    test('displays 4 markers when day 1 is selected', () => {
        render(<Map travelPlansData={mockTravelPlansData} selectedDay={1} />);
        const markers = screen.queryAllByAltText("Marker");
        expect(markers).toHaveLength(4);
    });

    test('returns error message with missing itinerary data', () => {
        render(<Map travelPlansData={{ itinerary: [] }} selectedDay={null} />);
        const markers = screen.queryAllByAltText("Marker");
        expect(markers).toHaveLength(0);
        expect(screen.getByText('An error occurred! Missing data.')).toBeInTheDocument();
    });
});