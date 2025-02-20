import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { IRestaurant } from '../utils';
import RestaurantInfo from './RestaurantInfo';
import markerImage from '../assets/marker.svg';
import 'leaflet/dist/leaflet.css';
import '../styles/RestaurantMap.css';

const customIcon = new Icon({
    iconUrl: markerImage,
    iconSize: [38, 38],
    iconAnchor: [22, 30]
});

export default function RestaurantMap({restaurants}: {restaurants: IRestaurant[]}) {
    const attribution = 
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    return <>
        <p>le caca est cuit</p>
        <MapContainer
            center={[45.5, -73.6]}
            zoom={12}
            zoomControl={true}
            updateWhenZooming={false}
            updateWhenIdle={true}
            preferCanvas={true}
            minZoom={10}
            maxZoom={16}
            >
            <TileLayer
                attribution={attribution}
                url={tileUrl}
                />
            {restaurants.map(r => {
                return <Marker key={r.name} position={r.coordinates} icon={customIcon} >
                    <Popup>
                        <RestaurantInfo restaurant={r} />
                    </Popup>
                </Marker>
            })}
        </MapContainer>
    </>;
}
