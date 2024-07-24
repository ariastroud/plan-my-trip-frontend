import Itinerary from "./Itinerary";
import Map from "./Map";

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
      
    return (
        <div>
            <h1 className="font-extrabold text-2xl">Travel Plan for {travelPlansData.destination}</h1>
            <p>{travelPlansData.startDate} - {travelPlansData.endDate}</p>
            <p className="pb-8">Budget: ${travelPlansData.budget}</p>
            <div className="flex flex-row gap-10">
                <Itinerary travelPlansData={travelPlansData}/>
                <Map travelPlansData={travelPlansData} />
            </div>
            <button className="btn btn-secondary">Save Trip</button>
        </div>
    );
};

export default TravelPlan;