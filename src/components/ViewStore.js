import React, { useState } from 'react'
import './ViewStore.css'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Rating from './Rating'
export default function ViewStore() {
     const l=
        {rating:"3.4",companyname:"Honda",location:"raidurg police station , hyderabad, 500089",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/640px-Honda_Logo.svg.png"}

const models=[{name:"CBR 500",imageurl:"https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/honda-select-model-grand-prix-red-1644556207419.jpg"},
{name:"Honda Amaze",imageurl:"https://www.hondacarindia.com/_next/image?url=https%3A%2F%2Fcdn2.hondacarindia.com%2Fmodels-mobile%2Fexterior%2Famaze%2Fplatinum_white_pearl.png&w=3840&q=75"},
{name:"Honda City",imageurl:"https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/02/2020-honda-city-rear-1-1068x624-1.jpg?fit=1068%2C624&ssl=1"},
{name:"Honda Elevate",imageurl:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Elevate/9533/1686040115808/front-left-side-47.jpg"},
{name:"Honda NSX",imageurl:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/honda-nsx_2.jpg?itok=_-QnG0mR"},
{name:"Honda Jazz",imageurl:"https://images.carandbike.com/car-images/big/honda/jazz/honda-jazz.jpg?v=55"}
]
const parts=[
    {name:"SUSPENSION",price:"12000",rating:"3.5"},
    {name:"BRAKES",price:"1200",rating:"4"},
    {name:"CLUTCHES",price:"1500",rating:"5"},
    {name:"FILTERS",price:"5000",rating:"4.2"},
    {name:"Radiator Coolant Green 1 Ltr",price:"240",rating:"2.3"},
    {name:"Oil Filter",price:"540",rating:"4.6"},
    {name:"Air Filter",price:"400",rating:"5"},
    {name:"Wiper Blade Eco",price:"700",rating:"2.6"},
    {name:"Wiper Blade Eco, Set",price:"1200",rating:"4.3"},
    {name:"Wiper Blade",price:"1500",rating:"3.9"}
]
const [vehiclename,setVehiclename]=useState()
const partshead=[`${vehiclename}`,"Price","rating"]

  return (
    <div>
    
    <div className='storehead'>
        <img src={l.image} alt='companyimage' className='imagestyle'/>
        <div>
        <div className='card_title'>
       <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
       <p className='companyname' >{l.companyname}</p>
       <a href={`tel:${'8883770999'}`}  style={{backgroundColor:"#64AAE1",alignItems:"center",padding:"2.5px",marginLeft:"10px",borderRadius:"25px",paddingLeft:"7.5px",paddingRight:"7.5px"}}>
       <CallIcon  style={{ fontSize: 13, color:"white"}}/>
       </a>
       </div>
       <Rating rating={l.rating}/>
       </div>
       <div className='card_location'>
       <LocationOnIcon sx={{ fontSize: 17 }}/>
       <p style={{fontSize:"13px"}}> {l.location}</p>
       </div>
    </div>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
       <input
        type="text"
        placeholder="Search Cars"
        className="search-input"
      />
    <SearchIcon className='searchbutton'/>
    </div>
    </div>
     <p style={{margin:"10px",fontSize:"17px",fontWeight:"bold"}}>Popular Models:</p>
    <div className='modelssection'>
   
    {models.map((val)=>{return(
    <div className='modelcard' onClick={()=>setVehiclename(val.name)}>
        <img src={val.imageurl} alt="model" className='modelimg'/>
        <p className='modelname'>{val.name}</p>
    </div>
    )})}
    </div>
    {vehiclename?(
        <div className='partscomponent'>
    <div className='partshead'>
        {partshead.map((val)=>{return(
            <h4 style={{width:"300px"}}> {val}</h4>
        )})}
        </div>
        <div>
            {parts.map((val)=>{return(
                <div className='partshead' >
                <h5 style={{width:"300px"}}>{val.name}</h5>
                <h5 style={{width:"300px"}}>{val.price}</h5>
                <h5 style={{width:"300px"}}>{val.rating}</h5>
                </div>
            )})}
        </div>
    </div>
    ):""}
    
    </div>
  )
}
