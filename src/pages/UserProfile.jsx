import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SavedTrips from '../components/SavedTrips';
import defaultUserProfile from "../assets/images/defaultUserProfile.jpg";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('logInData'));

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/userprofile?tab=${tab}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('logInData');
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
        <div role="tablist" className="tabs tabs-lifted pt-5">
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
            {activeTab === 'profile' && (
              <div className="hero bg-base-200 h-auto">
                <div className="hero-content flex-col lg:flex-row">
                  <img
                    src={defaultUserProfile}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">Hi, Traveler!</h1>
                    <p className="py-6">
                      <p>Username: {user.username}</p>
                      <p>Email: {user.email}</p>
                    </p>
                    <button className="btn btn-primary" onClick={handleLogout}>
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}
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
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 flex-1 overflow-auto"
          >
            {activeTab === 'trips' && <SavedTrips userId={user.id} />}
          </div>
        </div>
    </div>
  );
};

export default UserProfile;
