import React from 'react'
import Card from './Card'
import data from './data.js'

const Cards = () => {
  const cards = data.map(item => {
    return (
         <Card 
          key={item.id}
          {...item}
         />
    )
});
  return (
    <div className='props'>
      {cards}
    </div>
  )
};

export default Cards