// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map';

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch City Data from Backend
    axios.get('http://localhost:3001/cities')
      .then(response => setCities(response.data))
      .catch(error => console.error('Error fetching city data:', error));
  }, []);

  return (
    <div>
      <h1>City Path Finder</h1>
      <Map cities={cities} />
    </div>
  );
}

export default App;
