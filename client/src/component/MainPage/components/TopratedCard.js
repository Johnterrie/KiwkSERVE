import React from 'react'
import "./Toprated.css";
import { AiFillStar } from "react-icons/ai"


function TopratedCard(props) {
  return (
    
     
    <div className='topratedcard'>
        <div className='topratedimg'>{props.image}</div>
        <p className='paragra' >Name: {props.name}</p>
        <p className='paragra'>Profession: {props.occupation}</p>
        <p className='paragra'>Location: {props.location}</p>
        <p className='paragra'>Rating: <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
    </div>
    
  )
}

export default TopratedCard