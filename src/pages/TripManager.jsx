import { useState } from 'react';
import PlanTrip from '../components/PlanTrip';
import TravelPlan from '../components/TravelPlan';
import convertToCamelCase from '../utils/transformSnakeToCamel';
import convertToSnakeCase from '../utils/transformCamelToSnake';
import axios from 'axios';
import NavBar from '../components/NavBar';

const TripManager = () => {
    const userId = JSON.parse(localStorage.getItem('logInData')).id;

    const [travelPlansData, setTravelPlansData] = useState(null);
    const [savedStatus, setSavedStatus] = useState(null);

    const handleTravelPlansData = (data) => {
        const transformedData = convertToCamelCase(data);
        setTravelPlansData(transformedData);
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