import { useState } from 'react'
import './App.css'

import SearchIcon from "./assets/search.png"
import ClearIcon from "./assets/clear01.png";
import CloudIcon from "./assets/cloud01.png";
import DrizzleIcon from "./assets/drizzle01.png";
import RainIcon from "./assets/rain01.png";
import SnowIcon from "./assets/snow01.png";
import WindIcon from "./assets/wind01.png";
import HumidityIcon from "./assets/humidity01.png";

const WeatherDetails=({icon,temp,city,lat,log,humidity,wind})=>{
  return(
    <>
  <div className='image'>
    <img src={icon} alt="image" />
  </div>
  <div className='temp'>
    {temp} °C
  </div>
  <div className='location'> {city}</div>
  <div className="cord">
    <div>
      <span className="lat">latitude</span>
      <span>{lat}</span>
    </div>

    <div>
      <span className="log">longitude</span>
      <span>{log}</span>
    </div>
  </div>
  <div className="data-container">
    <div className="element">
      <img src={HumidityIcon} alt="Humidity" className='icon'/>
      <div className="data">
        <div className="humidity-percent">{humidity}%</div>
        <div className="text">Humidity</div>
      </div>
    </div>
    <div className="element">
      <img src={WindIcon} alt="Wind" className='icon'/>
      <div className="data">
        <div className="wind-percent">{wind} km/h</div>
        <div className="text">Wind Speed</div>
      </div>
    </div>
  </div>
  </>
  );
}
function App() {
  

  let api_key ="a310db4cb8a196104c769b6f86c3e3ff";
  const [icon,setIcon] = useState(RainIcon);
  const [temp,setTemp] = useState(0);
  const [city,setCity] = useState("Chennai");
  const [lat,setLat] =useState(0);
  const [log,setLong] =useState(0);
  const [humidity,setHumidity] =useState(0);
  const [wind,setWind] =useState(0);
  const [text,setText] =useState("chennai");
  const [cityNotFound, setCityNotFound] =useState(false);
  const [loading, setLoading] = useState(false);

  const search=async()=>{
    setLoading(true);
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;
    
    try{
      let res =await fetch(url);
      let data =await res.json();
      //console.log(data);
      if(data.cod==="404"){
        console.error("City Not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setLat(data.coord.lat);
      setLong(data.coord.lon);
    }
    catch(error){
      console.error("An error occured:", error.message);
    }
    finally{
      setLoading(false);
    }
  }

  const handleCity = (e) =>{
    setText(e.target.value);
  };

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      search();
    }
  };

  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text" 
          className='cityInput'
          placeholder='Search City'onChange={handleCity}
          value={text}
          onKeyDown={handleKeyDown}/>
          <div className='search-icon'>
            <img src={SearchIcon} alt="search" width="25px" onClick={()=> search()}/>
          </div>
        </div>        
      <WeatherDetails icon={icon} temp={temp} city={city} lat={lat} log={log} humidity={humidity} wind={wind}/>
      </div>
    </>
  )
}

export default App
