import Hot from './img/hot.jpg';
import Cold from './img/cold.jpg';
import Description from './compoonents/description'
import { useEffect, useState } from 'react';
import { formatWeatherData } from './weatherService';

function App() {
  const[city, setCity] = useState('Lviv');
  const[weather, setWeather] =useState(null);
  const[units, setUnits]=useState('metric');
  const[bg,setBg] = useState(Hot);

  useEffect(()=> {
    const fetchWeatherData = async ()=> {
      const data = await formatWeatherData(city , units);
      setWeather(data);

      const threshold = units === 'metric' ? 10 : 60;
      if (threshold <= data.temp) {
        setBg(Hot);
      } 
      else setBg(Cold);
    };

    fetchWeatherData();
  }, [units,city])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCesius = currentUnit==='C';
    button.innerText = isCesius ?  '°F' : '°C';
    setUnits(isCesius ? 'metric' : 'imperial');
  };

  const enterCity = (e) => {
    if (e.keyCode==13) {
      setCity(e.currentTarget.value)
      e.currentTarget.blur();
    }
  };
  

  return (
    <div className="app" style={{backgroundImage:`url(${bg})`}}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="section section_inputs">
                <input onKeyDown={enterCity} ontype="text" name="city" placeholder="Enter the City..."/>
                <button onClick={(e)=> {handleUnitsClick(e)}}>°F</button>
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
