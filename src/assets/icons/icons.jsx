import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import bedIconUrl from '../images/bed.svg';
import activityIconUrl from '../images/activity.svg';
import diningIconUrl from '../images/dining.svg';

export const bedIcon = new Leaflet.Icon({
  iconUrl: bedIconUrl,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [31, 69],
});

export const activityIcon = new Leaflet.Icon({
    iconUrl: activityIconUrl,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [31, 69],
});

export const diningIcon = new Leaflet.Icon({
    iconUrl: diningIconUrl,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [31, 69],
});