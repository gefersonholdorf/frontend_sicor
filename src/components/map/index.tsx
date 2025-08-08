import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';

// Corrige caminho do ícone no build
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

export interface MapComponentProps {
    center: LatLngExpression
    zoom: number
    markerPosition: LatLngExpression
}

import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

// Componente auxiliar para atualizar o centro do mapa dinamicamente
function RecenterMap({ center }: { center: LatLngExpression }) {
    const map = useMap()

    useEffect(() => {
        map.setView(center)
    }, [center, map])

    return null
}


export const MapComponent = ({ center, zoom, markerPosition }: MapComponentProps) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            className="rounded-2xl shadow-xl border border-gray-300 "
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* 🔁 Força a atualização do centro do mapa */}
            <RecenterMap center={center} />

            {markerPosition && (
                <Marker position={markerPosition}>
                    <Popup>Local</Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default MapComponent;