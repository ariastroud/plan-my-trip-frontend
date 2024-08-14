import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import transformCamelToSnake from '../utils/transformCamelToSnake';
import SearchDestination from './SearchDestination';
import convertToCamelCase from '../utils/transformSnakeToCamel';
import PropTypes from 'prop-types';

const PlanTrip = ({handleTravelPlansData}) => {
  const [loading, setLoading] = useState(false);
  const [ destination, setDestination ] = useState(''),
        [ dates, setDates ]             = useState({
          startDate: null,
          endDate: null
          }),
        [ budget, setBudget ]           = useState('');


  const handleDateChange = (newDates) => {
    console.log("newDates:", newDates);
    const today = new Date();
    console.log("today",today)
    setDates(newDates);
  };


  const isValidBudget = (budget) => {
    const budgetNumber = parseFloat(budget);
    return !isNaN(budgetNumber) && budgetNumber >= 0;
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()+1).padStart(2, '0');
    console.log(`${year}-${month}-${day}`)
    return `${year}-${month}-${day}`;
  };

    const handleGeneratePlan = async (e)  => {
      e.preventDefault();

      if (!destination || !dates.startDate || !dates.endDate || !budget) {
        alert("Please fill in all fields.");
        return;
      }

      if (!isValidBudget(budget)) {
        alert("Please enter a valid budget that is a non-negative number.");
        return;
      }

      setLoading(true);

      const timeoutId = setTimeout(() => {
        setLoading(false);
        alert('The request is taking too long. Please try again.');
      }, 60000);

    try {
      const startDate = dates.startDate;
      const endDate = dates.endDate;

      const requestBody = {
        destination,
        startDate,
        endDate,
        budget
      };

      const formattedRequestBody = transformCamelToSnake(requestBody);
      console.log("formattedRequestBody:", formattedRequestBody);

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/trips/generate-trip-plan`, formattedRequestBody,);
        console.log('trip response', response.data);
        const transformedData = convertToCamelCase(response.data);
        handleTravelPlansData(transformedData);
        clearTimeout(timeoutId);

    } catch (error) {
        clearTimeout(timeoutId);
        console.error('There was an error!', error.response.data.error);
        console.error('Error object:', error);
    } finally {
        setLoading(false);
    }
    };

    if (loading) {
        return <div className="h-3/4 flex items-center justify-center overflow-hidden">
        <div className="flex items-center space-x-4">
            <div className="loading loading-spinner loading-lg text-primary"></div>
            <div>
                <p className="text-lg">Generating your trip plan. Please wait a moment...</p>
                <small className="text-gray-500">
                    * Note: The AI-generated plan may not always be accurate or up-to-date. Please verify details before making any travel arrangements.
                </small>
            </div>
        </div>
    </div>;
        
    }

    const handleSelectedLocation = (location) => {
      const destination = formatDestination(location);
      setDestination(destination);
    };

    const formatDestination = (location) => {
      if (location.type === 'city') {
        if (location.address.country_code === 'us') {
          return `${location.address.name}, ${location.address.state}, USA`;
        } else {
          return `${location.address.name}, ${location.address.country}`;
        }
      } else {
        return location.display_name;
      }
    };

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col pl-24 pt-10">
        <h1 className="font-spaceMono font-bold text-6xl text-left mb-4">Plan Your Trip</h1>
      </div>
      <div className="flex flex-col pt-10 pr-36">
        <p className="text-lg text-left pb-10">
          Ready for an adventure? ✈️ Answer a few quick questions, and let our AI magic work to craft the perfect trip itinerary just for you! 🌍✨ From stunning sights to hidden gems, we’ve got you covered. Just tell us what you’re dreaming of, and watch as your dream trip takes shape. Let’s turn those travel dreams into reality!
        </p>
        <form>
          <p className="text-2xl font-bold mb-4 font-spaceMono">Where do you want to go?</p>
          <SearchDestination handleSelectedLocation={handleSelectedLocation} />
          <div>
            </div>
          <p className="text-2xl font-bold mb-4 mt-6 font-spaceMono">When do you want to go?</p>
          <label className="input input-bordered flex items-center gap-2">
            <Datepicker
              value={dates}
              onChange={handleDateChange}
              showShortcuts={false}
              minDate={new Date(getTodayDate())}
            />
          </label>
          <p className="text-2xl font-bold mb-4 mt-6 font-spaceMono">What is your budget?</p>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="$USD"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </label>
          <div className="divider"></div>
          <button
            className="btn btn-primary font-spaceMono"
            type="submit"
            onClick={handleGeneratePlan}
          >
            Generate Trip Plan
          </button>
        </form>
      </div>
    </div>
  );
};

PlanTrip.propTypes = {
  handleTravelPlansData: PropTypes.func.isRequired,
};

export default PlanTrip;
