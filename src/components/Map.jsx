import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ travelPlansData }) => {
    const { itinerary, latitudeDestination, longitudeDestination } = travelPlansData;

    return (
        <div className="h-screen w-full outline outline-rose-900">
            <MapContainer className="h-full w-full" center={[latitudeDestination, longitudeDestination]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {itinerary.map((day) => {
                    return day.activities.map((activity) => (
                        <Marker key={activity.id} position={[activity.latitude, activity.longitude]}>
                            <Popup>
                                {activity.activity}
                            </Popup>
                        </Marker>
                    ));
                })}
            </MapContainer>
        </div>
    );
};

Map.propTypes = {
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

export default Map;