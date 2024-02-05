import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import './Compare.css'
export default function Compare() {
    const data1 = useSelector((state) => state.data);
    const l=[
        {rating:"3.4",companyname:"Honda",location:"raidurg police station , hyderabad, 500089",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/640px-Honda_Logo.svg.png"},
        {rating:"4",companyname:"Kia",location:"raidurg police station , hyderabad, 500089",image:"https://imgd.aeplcdn.com/1200x900/n/cw/ec/52559/kia-seltos-front-logo0.jpeg"},
        {rating:"3",companyname:"MG",location:"raidurg police station , hyderabad, 500089",image:"https://logowik.com/content/uploads/images/mg2583.jpg"},
        {rating:"3.8",companyname:"Suzuki",location:"raidurg police station , hyderabad, 500089",image:"https://cdn.freelogovectors.net/wp-content/uploads/2023/07/maruti_suzuki_logo-freelogovectors.net_.png"},
       
]
const comparelist = JSON.stringify(data1)
  return (
    <div className='Home'>
        {l.map((val)=>(
            comparelist.includes(val.companyname)?(<Card rating={val.rating}  companyname={val.companyname} location={val.location} image={val.image} />):""
            ))}
    </div>
  )
}
