import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ travelPlansData, selectedDay }) => {
    const { itinerary, latitudeDestination, longitudeDestination } = travelPlansData;

    if (!itinerary || itinerary.length === 0 || !latitudeDestination || !longitudeDestination) {
        return <div>An error occurred! Missing data.</div>;
    }

    const filteredMarkers = itinerary.flatMap((day) => {
        if (selectedDay == null || selectedDay === day.day) {
            return [
                ...day.activities.map((activity) => ({
                    type: 'activity',
                    ...activity
                })),
                ...day.placesToEat.map((place) => ({
                    type: 'place',
                    ...place
                }))
            ];
        }
        return [];
    });

    return (
        <div className="h-screen w-full">
            <MapContainer className="h-full w-full" center={[latitudeDestination, longitudeDestination]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredMarkers.map((marker, index) => (
                <Marker
                    key={index}
                    position={[Number(marker.latitude), Number(marker.longitude)]}
                >
                    <Popup>
                        {marker.type === 'activity' ? marker.activity : marker.place}
                    </Popup>
                </Marker>
            ))}
            </MapContainer>
        </div>
    );
};

Map.propTypes = {
    selectedDay: PropTypes.number,
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