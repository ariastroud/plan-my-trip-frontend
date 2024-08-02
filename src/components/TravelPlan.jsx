import Itinerary from "./Itinerary";
import Map from "./Map";
import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";
import convertToSnakeCase from "../utils/transformCamelToSnake";

const TravelPlan = ({travelPlansData, saveTrip}) => {

    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
      setSelectedDay((prevSelectedDay) => (prevSelectedDay === day ? null : day));
  };

    // const saveTrip = async () => {
    //   try {
    //     const travelPlansData = convertToSnakeCase(travelPlansData);
    //     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/trips`, travelPlansData);
    //     console.log(response.data);
    //     console.log('response data:', response.data);

    //     // reset travelPlansData
    //     setTravelPlansData(null);
    //   } catch (error) {
    //     console.error('There was an error!', error);
    //   }
    // };

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
