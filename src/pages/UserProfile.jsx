import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SavedTrips from '../components/SavedTrips';

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
    <>
      <NavBar />
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
          {activeTab === 'profile' && (
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
        {activeTab === 'trips' && <SavedTrips userId={user.id} />}
      </div>
    </>
  );
};

export default UserProfile;
