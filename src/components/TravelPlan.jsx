import Itinerary from "./Itinerary";
import Map from "./Map";
import { useState, useEffect } from "react";

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


    return (
      <div>
        <div className="mx-8">
            <h1 className="font-extrabold text-2xl text-center font-spaceMono pt-5">Travel Plan for {travelPlansData.destination}</h1>
            <p className="text-center">{startDate} - {endDate}</p>
            <p className="text-center">Budget: ${travelPlansData.budget}</p>
            <p className="text-center">{travelPlansData.description}</p>
            <div className="pb-2 pt-4 text-left">
              {backToTrips ?
              <button
                className="btn btn-primary"
                onClick={backToTrips}>Back to Trips</button>
              : <button
                className="btn btn-primary"
                onClick={saveTrip}>
                  {savedStatus === 'saved' ? '♥ Trip Saved' : '♡ Save Trip'}
                  </button>}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Itinerary travelPlansData={travelPlansData} handleDayClick={handleDayClick}/>
                <Map travelPlansData={travelPlansData} selectedDay={selectedDay} />
            </div>
        </div>
      </div>

    );
};

export default TravelPlan;
