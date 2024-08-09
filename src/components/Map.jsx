import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ travelPlansData, selectedDay }) => {
    const { itinerary, latitude, longitude, placeToRest } = travelPlansData;

    if (!itinerary || itinerary.length === 0 || !latitude || !longitude) {
        return <div>An error occurred! Missing data.</div>;
    }

    const filteredMarkers = itinerary.flatMap((day) => {
        if (selectedDay == null || selectedDay === day.dayNumber) {
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
            <MapContainer className="h-full w-full" center={[latitude, longitude]} zoom={12} scrollWheelZoom={true}>
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
            {travelPlansData.startDate !== travelPlansData.endDate && (
                <>
                    <Marker position={[placeToRest.latitude, placeToRest.longitude]}>
                        <Popup>
                            {travelPlansData.placeToRest.place}
                        </Popup>
                    </Marker>
                </>
            )}
            </MapContainer>
        </div>
    );
};

Map.propTypes = {
    selectedDay: PropTypes.number,
    travelPlansData: PropTypes.shape({
        destination: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        itinerary: PropTypes.arrayOf(PropTypes.shape({
            activities: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
                activity: PropTypes.string.isRequired,
            })).isRequired,
        })).isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        placeToRest: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            place: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired, 
        }).isRequired,
    })
};

export default Map;