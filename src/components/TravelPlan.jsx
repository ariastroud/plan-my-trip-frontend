import Itinerary from "./Itinerary";
import Map from "./Map";
import { useState } from "react";

const TravelPlan = ({travelPlansData, backToTrips, saveTrip, savedStatus}) => {

    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
      setSelectedDay((prevSelectedDay) => (prevSelectedDay === day ? null : day));
  };

    return (
      <div>
        <div className="mx-8">
            <h1 className="font-extrabold text-2xl text-center font-spaceMono pt-5">Travel Plan for {travelPlansData.destination}</h1>
            <p className="text-center">{travelPlansData.startDate} - {travelPlansData.endDate}</p>
            <p className="text-center">Budget: ${travelPlansData.budget}</p>
            <div className="pb-2 text-left">
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
