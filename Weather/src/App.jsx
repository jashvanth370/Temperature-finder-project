import { useState } from 'react'
import './App.css'

import SearchIcon from "./assets/search.png"
import ClearIcon from "./assets/clear01.png";
import CloudIcon from "./assets/cloud01.png";
import DrizzleIcon from "./assets/drizzle01.png";
import RainIcon from "./assets/rain01.png";
import SnowIcon from "./assets/snow01.png";
import WindIcon from "./assets/wind01.png"

const WeatherDetails=({icon,temp,city,lat,log})=>{
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
  </>
  );
}
function App() {
  const [icon,setIcon] = useState(RainIcon);
  const [temp,setTemp] = useState(0);
  const [city,setCity] = useState("Batticaloa");
  const [lat,setLat] =useState(0);
  const [log,setLong] =useState(0);
  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text" 
          className='cityInput'
          placeholder='Search City'/>
          <div className='search-icon'>
            <img src={SearchIcon} alt="search" width="25px"/>
          </div>
        </div>        
      <WeatherDetails icon={icon} temp={temp} city={city} lat={lat} log={log}
      />
      </div>
    </>
  )
}

export default App
