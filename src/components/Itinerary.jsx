import PropTypes from 'prop-types';

const Itinerary = ({ travelPlansData, handleDayClick}) => {
    const { itinerary } = travelPlansData;
    
    if (!itinerary || itinerary.length === 0) {
        return <div>An error occurred! Missing itinerary data.</div>;
    }

    return (
        <div>
            <ol className='text-left'>
                {itinerary.map((day) => {
                    return (
                        <li className='p-4' key={day.dayNumber}>
                            <h2 className='font-bold text-lg hover:underline cursor-pointer hover:text-bright-green font-spaceMono' onClick={() => handleDayClick(day.dayNumber)}>Day {day.dayNumber}</h2>
                            <ul className="list-disc">
                                {day.activities.map((activity) => (
                                    <li key={activity.id}>
                                        <span className="font-semibold">{activity.activity}</span>: <span>{activity.description}</span>
                                    </li>   
                                ))}
                            </ul>
                            <div>
                                <h3 className='font-bold mt-4'>Where to Eat</h3>
                                <ul className="list-disc">
                                    {day.placesToEat.map((restaurant) => (
                                        <li key={restaurant.id}>
                                            <span className="font-semibold">{restaurant.place}</span>: <span>{restaurant.description}</span>
                                        </li>   
                                    ))}
                                </ul>
                            </div>
                    
                        </li>
                    );
                })}
            </ol>
        </div>
    );
    };

Itinerary.propTypes = {
    handleDayClick: PropTypes.func.isRequired,
    travelPlansData: PropTypes.shape({
        destination: PropTypes.string.isRequired,
        itinerary: PropTypes.arrayOf(PropTypes.shape({
            activities: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
                activity: PropTypes.string.isRequired,
            })).isRequired,
        })).isRequired,
        latitudeDestination: PropTypes.number.isRequired,
        longitudeDestination: PropTypes.number.isRequired,
    }).isRequired,
};

export default Itinerary;