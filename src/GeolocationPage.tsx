// import { useState, useCallback } from 'react';
// import { Geolocation, Position } from '@capacitor/geolocation';

// export default function GeolocationPage() {

//     const [loc, setLoc] = useState<Position | null>(null);

//     const getCurrentPosition = useCallback(async () => {
//         setLoc(coordinates);
//     }, []);

//     return (
//         <div>
//             <h1>Geolocation</h1>
//             <p>Your location is:</p>
//             <p>Latitude: {loc?.coords.latitude}</p>
//             <p>Longitude: {loc?.coords.longitude}</p>

//             <button onClick={getCurrentPosition}>
//                 Get Current Location
//             </button>
//         </div>
//     );
// }

import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { useEffect, useRef } from 'react';
import { GOOGLE_MAPS_API_KEY } from './env';

export const GeolocationPage: React.FC = () => {
    const mapRef = useRef<HTMLElement>(null);

    useEffect(() => {
        (async () => {
            const geo_watch = await Geolocation.getCurrentPosition({
                enableHighAccuracy: true
            });

            console.log(mapRef.current, geo_watch)

            await GoogleMap.create({
                id: 'my-cool-map',
                element: mapRef.current!,
                apiKey: GOOGLE_MAPS_API_KEY,
                config: {
                    center: {
                        lat: geo_watch.coords.latitude,
                        lng: geo_watch.coords.longitude
                    },
                    zoom: 18
                },
            });
        })();
    }, [mapRef.current])

    return (
        <div className="component-wrapper">
            <capacitor-google-map ref={mapRef} style={{
                display: 'inline-block',
                width: 275,
                height: 400
            }} />
        </div>
    )
}
