import React, { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import planTrip from "../assets/images/planTrip.jpg";
import NavBar from './NavBar';
import testTravelPlansData from '../testData';


const options = [
    { value: 'adventure', label: 'Adventure' },
    { value: 'relaxation', label: 'Relaxation' },
    { value: 'sightseeing', label: 'Sightseeing' },
    { value: 'family', label: 'Family' },
  ];
const PlanTrip = ({handleTravelPlansData}) => {

  //testing purposes
    const handleClick = () => {
        handleTravelPlansData(testTravelPlansData);
    };

    const [ destination, setDestination ] = useState(''),
          [ dates, setDates ]             = useState({
            startDate: null,
            endDate: null
            }),
          [ budget, setBudget ]           = useState(''),
          [ travelStyle, setTravelStyle ] = useState(''),
          [ preferences, setPreferences ] = useState('');


        const handleDateChange = (newDates) => {
        console.log("newDates:", newDates);
        setDates(newDates);
        }

    const handleGeneratePlan = () => {
        event.preventDefault();
    // Handle the logic for generating the travel plan
    fetch('/api/generate-trip-plan', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      destination,
      dates,
      budget,
      travelStyle,
      preferences
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
    console.log({
        destination,
        dates,
        budget,
        travelStyle,
        preferences,
    });
    };


  return (
    <div>
      <NavBar />
      <div className="card lg:card-side bg-base-100 shadow-xl">
      {/* Testing purposes */}
      <button className="btn btn-primary" onClick={handleClick}>Test Data</button>
    <figure className="px-10 pt-10">
        <img
        src={planTrip}
        alt="Views"
        className="rounded-xl" />
    </figure>
      {/* Your component content goes here */}
      <div className="card-body items-center text-center">
        <h2 className="card-title">Plan Your Trip</h2>
        <div className="card-body">
      <form>
      <label className="input input-bordered flex items-center gap-2">
      Destination:
        <input type="text"
               className="grow"
               placeholder="Where do you want to go?"
               value={destination}
               onChange={(e) => setDestination(e.target.value)}/>
      </label>

      <label className="input input-bordered flex items-center gap-2">
      Dates:
      <Datepicker
            value={dates}
            onChange={handleDateChange}
            showShortcuts={false}
            />
      </label>



      <label className="input input-bordered flex items-center gap-2">
      Budget:
        <input type="text"
               className="grow"
               placeholder="$USD"
               value={budget}
               onChange={(e) => setBudget(e.target.value)}/>
      </label>

    <label className="input input-bordered flex items-center gap-2">
        Travel Style:
        <select
            className="select-sm w-full max-w-xs"
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
        >
            <option disabled selected>Pick your travel style!</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </label>

    <label className="input input-bordered flex items-center gap-2">
      Travel Preferences:
        <input type="text"
               className="grow"
               placeholder="More sightseeing!"
               value={preferences}
               onChange={(e) => setPreferences(e.target.value)}/>
        <span className="badge badge-info">Optional</span>
      </label>

      <div className="divider"></div>

        <button className="btn btn-primary"
                type="submit"
                onClick={handleGeneratePlan}>Generate Travel Plan</button>

      </form>
      </div>
      </div>
    </div>

    </div>

  );
};

export default PlanTrip;
