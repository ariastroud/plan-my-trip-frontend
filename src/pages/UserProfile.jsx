import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TravelPlan from '../components/TravelPlan';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  const [selectedTripData, setSelectedTripData] = useState(null);

  const user = JSON.parse(localStorage.getItem('logInData'));

  const getTripsByUser = async (userId) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${userId}/trips`);
    console.log(response.data);
    setTrips(response.data);
  };

  useEffect(() => {
    getTripsByUser(user.id);
  }, [user.id]);

  const handleTravelPlanClick = (tripId) => {
    console.log('tripId', tripId);
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
      latitudeDestination: trip.latitude,
      longitudeDestination: trip.longitude,
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
    setActiveTab('trips');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {

    localStorage.removeItem('logInData');
    navigate('/');

  };

  return (
    <>
      <NavBar />

      {selectedTripData ? (
        <TravelPlan travelPlansData={selectedTripData} backToTrips={backToTrips} />
      ) : (
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="User Profile"
            checked={activeTab === 'profile'}
            onChange={() => handleTabChange('profile')}
          />

          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Hi, Traveler!</h1>
                  <p className="py-6">
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Saved Trips"
            checked={activeTab === 'trips'}
            onChange={() => handleTabChange('trips')}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {trips.map((trip) => {
              return (
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
