import React from 'react';
import image from '../images/bg-01.jpg'
import UserService from '../services/UserService';
export default function Card(props) {
  function handledelete()
  {
    UserService.deleteUser(props.count.id)
  }
  
  return (
    <article className='cocktail '>
      <div className='img-container'>
        <img src={props.count.img ? props.count.img : image} alt='g'/>
      </div>
      <div className='cocktail-footer'>
        <h3>{props.count.name}</h3>
        <h4>{props.count.brand}</h4>
        <p>{props.count.location}</p>
        <h3>{props.count.email}</h3>
        {
          props.count.email ==='nikunj02002@gmail.com' ? <button onClick={handledelete}>DELETE</button> : ' '
        }
      </div>
    </article>
  );
}
