import Itinerary from "./Itinerary";
import Map from "./Map";
import axios from "axios";

const TravelPlan = () => {
    const travelPlansData = {
        "destination": "Paris, France",
        "latitudeDestination": 48.864716,
        "longitudeDestination": 2.349014,
        "startDate": "Aug 1",
        "endDate": "Aug 2",
        "budget": 1000,
        "itinerary": [
          {
            "day": 1,
            "activities": [
              {
                "activity": "Eiffel Tower",
                "latitude": 48.8584,
                "longitude": 2.2945,
                "description": "Marvel at the iconic Eiffel Tower, a symbol of Paris. Enjoy breathtaking views of the city from its observation decks and experience the magic of its nightly illuminations."
              },
              {
                "activity": "Louvre Museum",
                "latitude": 48.8606,
                "longitude": 2.3376,
                "description": "Explore the world-renowned Louvre Museum, home to thousands of works of art, including the enigmatic Mona Lisa and the majestic Venus de Milo. A treasure trove of culture and history."
              }
            ]
          },
          {
            "day": 2,
            "activities": [
              {
                "activity": "Notre-Dame Cathedral",
                "latitude": 48.8530,
                "longitude": 2.3499,
                "description": "Visit the Notre-Dame Cathedral, a masterpiece of French Gothic architecture. Admire its stunning facade, intricate sculptures, and majestic bell towers."
              },
              {
                "activity": "Musée d'Orsay",
                "latitude": 48.8600,
                "longitude": 2.3266,
                "description": "Discover the Musée d'Orsay, a former railway station turned museum that houses an impressive collection of Impressionist and Post-Impressionist masterpieces."
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
            <h1 className="font-extrabold text-2xl">Travel Plan for {travelPlansData.destination}</h1>
            <p>{travelPlansData.startDate} - {travelPlansData.endDate}</p>
            <p className="pb-8">Budget: ${travelPlansData.budget}</p>
            <div className="flex flex-row gap-10">
                <Itinerary travelPlansData={travelPlansData}/>
                <Map travelPlansData={travelPlansData} />
            </div>
            <button className="btn btn-secondary" onClick={saveTrip}>Save Trip</button>
        </div>
    );
};

export default TravelPlan;