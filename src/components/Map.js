import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ cities }) => {
  useEffect(() => {
    const map = L.map('map').setView([20, 80], 4); // Default view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Display Markers for Cities
    cities.forEach(city => {
      const { lat, lon, name } = city;
      L.marker([parseFloat(lat), parseFloat(lon)]).addTo(map).bindPopup(name);
    });
  }, [cities]);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default Map;
