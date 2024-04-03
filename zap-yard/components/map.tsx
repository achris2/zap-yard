"use client"

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { useCountries } from '@/app/lib/getcountries';
import { icon } from 'leaflet';
import { MapPin } from 'lucide-react';

const ICON = icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png' , 
    iconSize: [50, 50], 
});

export default function CreateMap({ locationValue }: { locationValue: string }) {
    const { getCountryByValue } = useCountries(); 
    const latLang = getCountryByValue(locationValue)?.latLang
    return (
        <MapContainer
            scrollWheelZoom={false}
            className="h-[50vh] rounded-lg relative z-0"
            center={latLang ?? [52.205, -0.09]}
            zoom={5}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLang ?? [52.205, -0.09]} icon={ICON} /> 
      </MapContainer>
  )
}
