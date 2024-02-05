import React, { useEffect, useState } from 'react'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

export default function Home() {
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
    useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
   

 
   
  }, []);
  
  
  return (
    <div>
       
    <div className="search-container">
    
    {latitude && longitude ? (
          <p className="search-input" style={{fontSize:"16px",padding:4}}>{latitude},{longitude}</p>
      ) : (
        <p>Fetching location...</p>
      )}

      <GpsFixedIcon className='searchbutton'/>
      <input
        type="text"
        placeholder="Stores"
        className="search-input"
      />
       <SearchIcon className='searchbutton'/>
       <input
        type="text"
        placeholder="Parts"
        className="search-input"
      />
       <SearchIcon className='searchbutton'/>

    </div>
    </div>
  )
}
