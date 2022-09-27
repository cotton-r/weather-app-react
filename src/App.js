import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});

  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setImmediate(response.data)
        console.log(response.data)
      })
    }
  };

  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Bristol</p>
          </div>
          <div className='temp'>
            <h1>18°C</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>21°C</p>
            <p className='sub-desc'>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p className='sub-desc'>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12 MPH</p>
            <p className='sub-desc'>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;