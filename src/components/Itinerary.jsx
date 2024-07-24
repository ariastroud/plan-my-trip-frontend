import PropTypes from 'prop-types';

const Itinerary = ({ travelPlansData }) => {
    const { itinerary } = travelPlansData;

    return (
        <div>
            <ol className='text-left'>
                {itinerary.map((day) => {
                    return (
                        <li className='p-4' key={day.day}>
                            <h2 className='font-bold'>Day {day.day}</h2>
                            <ul className="list-disc">
                                {day.activities.map((activity) => (
                                    <li key={activity.id}>
                                        <span className="font-semibold">{activity.activity}</span>: <span>{activity.description}</span>
                                    </li>   
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
    };

Itinerary.propTypes = {
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