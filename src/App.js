import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});

  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className='search'>
        <input
          value={location}
          className='input'
          type="text"
          onChange={event => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
        ></input>
      </div>

      {data.name != undefined  && 
        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p>{data?.name}, {data?.sys?.country}</p>
            </div>
            <div className='temp'>
              <h1>{data.main ? data.main.temp.toFixed(0) : null}°C</h1>
            </div>
            <div className='description'>
              <p>{data.main ? data.weather[0].main : null}</p>
            </div>
          </div>
          <div className='bottom'>
            <div className='feels'>
              <p className='bold'>{data.main ? data.main.feels_like.toFixed(0) : null}°C</p>
              <p className='sub-desc'>Feels Like</p>
            </div>
            <div className='humidity'>
              <p className='bold'>{data.main ? data.main.humidity : null}%</p>
              <p className='sub-desc'>Humidity</p>
            </div>
            <div className='wind'>
              <p className='bold'>{data.main ? data.wind.speed.toFixed(1) : null} MPH</p>
              <p className='sub-desc'>Wind Speed</p>
            </div>
          </div>
        </div>
      }        
    </div>
  );
}

export default App;