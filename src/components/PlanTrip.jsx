import React, { Component } from 'react';

const PlanTrip = () => {

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
      <form>
      <label className="input input-bordered flex items-center gap-2">
      Destination
        <input type="text" className="grow" placeholder="Where do you want to go?" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
      Dates:
        <input type="text" className="grow" placeholder="Where do you want to go?" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
      Budget:
        <input type="text" className="grow" placeholder="$USD" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
      Travel Preferences:
        <input type="text" className="grow" placeholder="More sightseeing!" />
        <span className="badge badge-info">Optional</span>
      </label>


        <button className="btn" type="submit">Generate Travel Plan</button>

      </form>
      </div>
    </div>

  );
};

export default PlanTrip;
