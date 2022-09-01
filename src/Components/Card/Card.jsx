import React from 'react'

import '../Card/Card.css'


function Card({img , reveiwCount, country, title ,price , ratings,star }) {

 
  return (
    <div className='card'>
      <div className="class--image">
        <img src={img} alt={img}/>
      </div>
      <div className='card--stats'>
        <img src={star} alt='' className='card--star' />
        <span>({reveiwCount})</span>
        <span className='gray'>{ratings} .</span>
        <span className='gray'>.{country}</span>
      </div>
      <p>{title}</p>
      <p><span className='bold'> From ${price} </span>/ person </p>
    </div>
  )
}

export default Card