import React, { useState } from 'react';
const options = [
    { value: 'adventure', label: 'Adventure' },
    { value: 'relaxation', label: 'Relaxation' },
    { value: 'sightseeing', label: 'Sightseeing' },
    { value: 'family', label: 'Family' },
  ];
const PlanTrip = () => {

    const [ destination, setDestination ] = useState(''),
          [ dates, setDates ]             = useState(''),
          [ budget, setBudget ]           = useState(''),
          [ travelStyle, setTravelStyle ] = useState(''),
          [ preferences, setPreferences ] = useState('');

    const handleGeneratePlan = () => {
        event.preventDefault();
    // Handle the logic for generating the travel plan
    console.log({
        destination,
        dates,
        budget,
        travelStyle,
        preferences,
    });
    };


  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
        <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
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
        <input type="text"
               className="grow"
               placeholder="When do you want to go?"
               value={dates}
               onChange={(e) => setDates(e.target.value)}/>
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

  );
};

export default PlanTrip;
