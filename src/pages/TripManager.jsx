import { useState } from 'react';
import PlanTrip from '../components/PlanTrip';
import TravelPlan from '../components/TravelPlan';
import transformKeys from '../utils/transformData';

const TripManager = () => {
    const [travelPlansData, setTravelPlansData] = useState(null);

    const handleTravelPlansData = (data) => {
        const transformedData = transformKeys(data);
        setTravelPlansData(transformedData);
    };

    return (
        <div>
            <div>
                {(!travelPlansData) ? <PlanTrip handleTravelPlansData={handleTravelPlansData} /> : <TravelPlan travelPlansData={travelPlansData} />}
            </div>
        </div>
    );
};

export default TripManager;