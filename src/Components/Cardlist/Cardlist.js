import React from 'react'
import './Cardlist.css'
import data from '../../data'
import Card from '../Card/Card.jsx'
import star from '../../assets/icons8-star-48.png'
function Cardlist() {
    
  return (
    <div className='cardList'>
        {
            data.map((item)=>(
                <Card
                    key={item.id}
                    img={require(`../../assets/${item.Img}`)}
                    ratings={item.stats.ratings}
                    reveiwCount={item.stats.reviewCount}
                    country={item.location}
                    title={item.title}
                    price={item.price}
                    star={star}
                />
            ))
        }
    </div>
  )
}

export default Cardlist