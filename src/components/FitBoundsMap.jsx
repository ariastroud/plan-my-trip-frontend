import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import Leaflet from 'leaflet';
import PropTypes from 'prop-types'; 

const FitBoundsMap = ({ markers }) => {
    const map = useMap();
    const hasFittedBounds = useRef(false); 

    useEffect(() => {
        if (!hasFittedBounds.current && markers.length > 0) {
            const bounds = new Leaflet.LatLngBounds();
            markers.forEach(marker => {
                bounds.extend([marker.latitude, marker.longitude]);
            });
            map.fitBounds(bounds);
            hasFittedBounds.current = true; 
        }
    }, [markers, map]);

    return null;
};

FitBoundsMap.propTypes = {
    markers: PropTypes.array.isRequired,
};

export default FitBoundsMap;
