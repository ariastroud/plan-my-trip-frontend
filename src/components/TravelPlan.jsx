import Itinerary from "./Itinerary";
import Map from "./Map";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const TravelPlan = ({travelPlansData, backToTrips, saveTrip, savedStatus}) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
      setSelectedDay((prevSelectedDay) => (prevSelectedDay === day ? null : day));
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const startDate = formatDate(travelPlansData.startDate);
  const endDate = formatDate(travelPlansData.endDate);

  console.log('TravelPlan received data:', travelPlansData);
    return (
      <div className="flex flex-col h-full overflow-auto p-5 outline flex-1">
      <div className="grid grid-cols-2 gap-4 flex-1 h-full">
        <div className="overflow-auto">
          <div className="text-left">
            {backToTrips ? (
              <button className="btn btn-primary" onClick={backToTrips}>Back to Trips</button>
            ) : (
              <button className="btn btn-primary" onClick={saveTrip}>
                {savedStatus === 'saved' ? '♥ Trip Saved' : '♡ Save Trip'}
              </button>
            )}
          </div>
          <h1 className="font-extrabold text-2xl font-spaceMono pt-3">Trip Plan for {travelPlansData.destination}</h1>
          <p className="font-bold">{startDate} - {endDate}</p>
          <p className="font-bold">Budget: ${travelPlansData.budget}</p>
          <p>{travelPlansData.description}</p>
          <Itinerary travelPlansData={travelPlansData} handleDayClick={handleDayClick} />
        </div>
        <div className="h-full rounded-lg overflow-hidden z-0">
          <Map travelPlansData={travelPlansData} selectedDay={selectedDay} />
        </div>
      </div>
    </div>
    );
};

TravelPlan.propTypes = {
  travelPlansData: PropTypes.shape({
    destination: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    placeToRest: PropTypes.shape({
      place: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }),
    itinerary: PropTypes.arrayOf(PropTypes.shape({
      dayNumber: PropTypes.number.isRequired,
      activities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        activity: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      })),
      placesToEat: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        place: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      })),
    })),
  }),
  backToTrips: PropTypes.func,
  saveTrip: PropTypes.func,
  savedStatus: PropTypes.string,
};

export default TravelPlan;
