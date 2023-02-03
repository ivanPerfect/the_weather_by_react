import Hot from './img/hot.jpg';
import Cold from './img/cold.jpg';
import Description from './compoonents/description'
import { useEffect, useState } from 'react';
import { formatWeatherData } from './weatherService';

function App() {

  const[weather, setWeather] =useState(null);
  const[units, setUnits]=useState('metric');

  useEffect(()=> {
    const fetchWeatherData = async ()=> {
      const data = await formatWeatherData('paris', units);
      setWeather(data);
    };
    fetchWeatherData();
  }, [])

  return (
    <div className="app" style={{backgroundImage:`url(${Cold})`}}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="section section_inputs">
                <input type="text" name="city" placeholder="Enter the City..."/>
                <button>°F</button>
              </div>
            <div className="section section_temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt=""></img>
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units==='metric'? 'C': 'F'}`}</h1>
              </div>
            </div>
              <Description weather={weather} units={units}/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
