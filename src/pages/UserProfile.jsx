import React from 'react';
import NavBar from '../components/NavBar';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    userId: '123456',
    email: 'johndoe@example.com',
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <><NavBar />

    <div role="tablist" className="tabs tabs-lifted">
  <input type="radio"
         name="my_tabs_2"
         role="tab"
         className="tab"
         aria-label="User Profile"
         defaultChecked/>

  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hi, Traveler!</h1>
      <p className="py-6">
        <h2>{user.name}</h2>
        <p>User ID: {user.userId}</p>
        <p>Email: {user.email}</p>
      </p>
      <button className="btn btn-primary"
              onClick={handleLogout}
      >Sign Out</button>
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
     />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 2
  </div>


</div>
</>
  );
};

export default UserProfile;
