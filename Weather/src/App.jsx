import { useState } from 'react'
import './App.css'

import SearchIcon from "./assets/search.png"
import ClearIcon from "./assets/clear01.png";
import CloudIcon from "./assets/cloud01.png";
import DrizzleIcon from "./assets/drizzle01.png";
import RainIcon from "./assets/rain01.png";
import SnowIcon from "./assets/snow01.png";
import WindIcon from "./assets/wind01.png"

const WeatherDetails=({icon})=>{
  return(
    <>
  <div className='image'>
    <img src={icon} alt="image" />
  </div>
  </>
  );
}
function App() {
  const [icon,setIcon] = useState(RainIcon);

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
      <WeatherDetails icon={icon}/>
      </div>
    </>
  )
}

export default App
