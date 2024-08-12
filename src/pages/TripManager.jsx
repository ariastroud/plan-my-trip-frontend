import { useEffect, useState } from 'react';
import PlanTrip from '../components/PlanTrip';
import TravelPlan from '../components/TravelPlan';
import convertToSnakeCase from '../utils/transformCamelToSnake';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';

const TripManager = () => {
    const location = useLocation();
    const userId = JSON.parse(localStorage.getItem('logInData')).id;

    const [travelPlansData, setTravelPlansData] = useState(null);
    const [savedStatus, setSavedStatus] = useState(null);

    const handleTravelPlansData = (data) => {
        setTravelPlansData(data);
    };

    const saveTrip = async () => {
        try {
          const travelPlansDataSnake = convertToSnakeCase(travelPlansData);
          console.log('travelPlansData:', JSON.stringify(travelPlansDataSnake, null, 2));
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/trips/save/${userId}`, travelPlansDataSnake);
          console.log(response.data);
          console.log('response data:', response.data);

          setSavedStatus('saved');
        } catch (error) {
          console.error('There was an error!', error);
        }
      };

    useEffect(() => {
      setTravelPlansData(null);
      setSavedStatus(null);
    }, [location.pathname, location.search]);

    return (
        <div>
          <NavBar />
            <div>
                {(!travelPlansData) ? <PlanTrip handleTravelPlansData={handleTravelPlansData} /> : <TravelPlan travelPlansData={travelPlansData} saveTrip={saveTrip} savedStatus={savedStatus}/>}
            </div>
        </div>
    );
};

export default TripManager;