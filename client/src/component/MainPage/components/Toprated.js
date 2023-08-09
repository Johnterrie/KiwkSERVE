import React from 'react'
import {TopratedList} from '../Helpers/TopratedList'
import TopratedCard from './TopratedCard';
import './Toprated.css'


function Toprated() {
  return (
    <div className='toprated'>
<h2  className='topratedtitle'>Top Rated Artisans</h2>
<div className='topratedList'>
{TopratedList.map((topratedCard, key)=>{
    return (
        <TopratedCard
        image={topratedCard.image}
        name={topratedCard.name}
        occupation={topratedCard.occupation} 
        location={topratedCard.location}
        />);
    
})}
</div>

    </div>
  );
}

export default Toprated