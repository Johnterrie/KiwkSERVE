import React from 'react'
import "./Toprated.css";

function TopratedCard(props) {
  return (
    <div className='topratedcard'>
        <div className='topratedimg'>{props.image}</div>
        <h4>Name: {props.name}</h4>
        <h4>Profession: {props.occupation}</h4>
        <h4>Location: {props.location}</h4>
    </div>
  )
}

export default TopratedCard