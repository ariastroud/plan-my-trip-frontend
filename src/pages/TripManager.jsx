import { useState } from 'react';
import PlanTrip from '../components/PlanTrip';
import TravelPlan from '../components/TravelPlan';
import convertToCamelCase from '../utils/transformSnakeToCamel';
import convertToSnakeCase from '../utils/transformCamelToSnake';
import axios from 'axios';

const TripManager = () => {
    const userId = JSON.parse(localStorage.getItem('logInData')).id;

    const [travelPlansData, setTravelPlansData] = useState(null);

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

          setTravelPlansData(null);
        } catch (error) {
          console.error('There was an error!', error);
        }
      };

    return (
        <div>
            <div>
                {(!travelPlansData) ? <PlanTrip handleTravelPlansData={handleTravelPlansData} /> : <TravelPlan travelPlansData={travelPlansData} saveTrip={saveTrip}/>}
            </div>
        </div>
    );
};

export default TripManager;