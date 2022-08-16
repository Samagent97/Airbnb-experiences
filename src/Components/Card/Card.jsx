import React from 'react'
import kat   from '../../assets/image 12.png'
import star from '../../assets/icons8-star-48.png'
import '../Card/Card.css'
function Card() {
  return (
    <div className='card'>
<img src={kat} alt='' className='class--image'  />

<div className='card--stats'>
<img src={star} alt='' className='card--star' />
<span>5.0</span>
<span className='gray'>(6) .</span>
<span className='gray'>USA</span>
</div>
<p>Life lessonsfrom Kattie Zafirez</p>
<p><span className='bold'> From $136 </span>/ person </p>

    </div>
  )
}

export default Card