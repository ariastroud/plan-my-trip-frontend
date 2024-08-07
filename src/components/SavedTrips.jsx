import { useEffect, useState } from 'react';
import axios from 'axios';
import TravelPlan from '../components/TravelPlan';

const SavedTrips = ({ userId }) => {
  const [trips, setTrips] = useState([]);
  const [selectedTripData, setSelectedTripData] = useState(null);

  useEffect(() => {
    const getTripsByUser = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${userId}/trips`);
      setTrips(response.data);
    };
    getTripsByUser();
  }, [userId]);

  const handleTravelPlanClick = (tripId) => {
    getTravelPlan(tripId);
  };

  const getTravelPlan = async (tripId) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/trips/${tripId}`);
    const tripData = response.data;
    const formattedTripData = convertTravelData(tripData);
    setSelectedTripData(formattedTripData);
  };

  const convertTravelData = (tripData) => {
    const trip = tripData.trip;
    const formattedTripData = {
      destination: trip.destination,
      latitude: trip.latitude,
      longitude: trip.longitude,
      startDate: trip.start_date,
      endDate: trip.end_date,
      budget: trip.budget,
      itinerary: []
    };

    trip.itineraries.forEach((itinerary) => {
      itinerary.days.forEach((day) => {
        const formattedItinerary = {
          dayNumber: day.day_number,
          activities: day.activities.map((activity) => ({
            activity: activity.activity,
            latitude: activity.latitude,
            longitude: activity.longitude,
            description: activity.description
          })),
          placesToEat: day.places_to_eat.map((place) => ({
            place: place.place,
            latitude: place.latitude,
            longitude: place.longitude,
            description: place.description
          }))
        };
        formattedTripData.itinerary.push(formattedItinerary);
      });
    });
    return formattedTripData;
  };

  const backToTrips = () => {
    setSelectedTripData(null);
  };

  const handleDeleteTrip = async (tripId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/trips/${tripId}`);
      setTrips(trips.filter(trip => trip.id !== tripId));
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  return (
    <>
      {selectedTripData ? (
        <TravelPlan travelPlansData={selectedTripData} backToTrips={backToTrips} />
      ) : (
        <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {trips.map((trip) => (
            <div key={trip.id}>
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{trip.destination}</h2>
                  <p>
                    Dates: {trip.start_date} to {trip.end_date}
                  </p>
                  <p>Budget: ${trip.budget}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleTravelPlanClick(trip.id)}
                      className="btn btn-secondary"
                    >
                      See travel plan
                    </button>
                    <button
                      onClick={() => handleDeleteTrip(trip.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SavedTrips;
