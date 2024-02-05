import React from 'react'
import './Card.css'
import Rating from './Rating'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,removeItem} from '../Redux/Reducers';
import { Link, useNavigate,} from 'react-router-dom';


export default function Card({rating,companyname,location,image,phoneNumber}) {
  
   const dispatch = useDispatch();

  const AddDataToRedux = () => {
    const dataToSend = companyname;
    dispatch(addItem(dataToSend));
  };
  const RemoveDataToRedux = () => {
    const dataToSend = companyname;
    dispatch(removeItem(dataToSend));
  };

const data1 = useSelector((state) => state.data);
const comparelist = JSON.stringify(data1)
  return (

    <body>
    <div class="card">
      <img src={image}  style={{width:"230px",height:"170px"}}/>
      <div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <h2>{companyname}</h2>
        <a href={`tel:${phoneNumber}`} style={{marginTop:"6px"}} >
       <CallIcon  style={{ fontSize: 18, color:"black"}}/>
       </a> 
       </div>
        <div style={{display:"flex",flexDirection:"row",gap:"1px",justifyContent:"center"}}>
       <LocationOnIcon sx={{ fontSize: 17 }}/> <h3>{location}</h3>
        </div>
        
      
        
        <nav class="buttons">
         
          <button>ViewStore</button>
        </nav>
      </div>
    </div>
    </body>

    
  )
}
