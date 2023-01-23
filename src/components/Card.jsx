import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";


const Card = (props) => {
  return (
    <div className='container'>
        <img className='image' src={props.image} alt="img" />
        <div className='info'>
            <div className='card-location'>
                <MdOutlineLocationOn className='pic'/>
                <h3 className='locname'> {props.location}</h3>
                <a className='gray' href={props.googleMapsUrl} target='_blank'>
                    <span className='gray'> View on Google Maps </span>
                </a>
            </div>
            <h1 className='card-title'> {props.title} </h1>
            <h3 className='date'> {props.startDate} - {props.endDate} </h3>
            <p className="description"> {props.description} </p>
        </div> 
      <hr className='line' />
    </div>
  )
}

export default Card