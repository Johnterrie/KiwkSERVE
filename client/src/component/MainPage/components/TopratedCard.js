import React from 'react'

function TopratedCard(props) {
  return (
    <div className='topratedcard'>
        <div className='topratedimg'>{props.image}</div>
        <h4>Name:{props.name}</h4>
        <h4>Occupation:{props.occupation}</h4>
        <h4>Location:{props.location}</h4>
    </div>
  )
}

export default TopratedCard