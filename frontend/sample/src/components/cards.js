import React from 'react';
import image from '../images/bg-01.jpg'
export default function Card(props) {
  return (
    <article className='cocktail effect7'>
      <div className='img-container'>
        <img src={image} alt='g'/>
      </div>
      <div className='cocktail-footer'>
        <h3>{props.count.name}</h3>
        <h4>{props.count.brand}</h4>
        <p>{props.count.location}</p>
      </div>
    </article>
  );
}
