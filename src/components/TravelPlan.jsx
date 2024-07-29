import Itinerary from "./Itinerary";
import Map from "./Map";
import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";

const TravelPlan = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
        console.log(day)
      setSelectedDay((prevSelectedDay) => (prevSelectedDay === day ? null : day));
  };

    const travelPlansData = {
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

    const mockTravelPlan = {
      "destination": "Tokyo, Japan",
      "start_date": "2024-09-01T00:00:00",
      "end_date": "2024-09-03T00:00:00",
      "budget": 5000,
      "user_id": 1
    };

    const saveTrip = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/trips`, mockTravelPlan);
        console.log(response.data);
        console.log('response data:', response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };
      
    return (
      <div>
        <NavBar />
        <div className="mx-8">
            <h1 className="font-extrabold text-2xl">Travel Plan for {travelPlansData.destination}</h1>
            <p>{travelPlansData.startDate} - {travelPlansData.endDate}</p>
            <p className="pb-8">Budget: ${travelPlansData.budget}</p>
            <div className="grid grid-cols-2 gap-4">
                <Itinerary travelPlansData={travelPlansData} handleDayClick={handleDayClick}/>
                <Map travelPlansData={travelPlansData} selectedDay={selectedDay} />
            </div>
            <button className="btn btn-secondary" onClick={saveTrip}>Save Trip</button>
        </div>
      </div>
        
    );
};

export default TravelPlan;