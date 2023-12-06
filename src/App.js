import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cities')  // Update the URL to match your backend API endpoint
      .then(response => setCities(response.data))
      .catch(error => console.error('Error fetching city data:', error));
  }, []);

  return (
    <div>
      <h1>City Path Finder</h1>
      <ul>
        {cities.map(city => (
          <li key={city.id}>{city.name}, {city.state}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
