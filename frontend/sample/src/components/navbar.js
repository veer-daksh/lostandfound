import React from "react";
import { Link } from 'react-router-dom';
export default function Navbar()
{
    const [list,setList]= React.useState('nav-links')
    const [counter, setCounter] = React.useState(1);

    function handleResize(){
      console.log('handle')
      if(window.innerWidth>768)
      {
        if(counter %2 ===0 )
        {
          setCounter(1)
          handle()
        }
      }
    }
    window.addEventListener('resize', handleResize);
    function handle(e)
    {
        console.log(window.innerWidth);
        setCounter(counter + 1);
        console.log(counter); 
        if(counter%2 === 0)
        {
            console.log(counter);
            setList('nav-links')
        }
        else
        {
            console.log(counter);
            setList('nav-links nav-active')
        }
        
    }
    return (
      <nav >
        <label className='logo'>
          <h4>Lost N Found</h4>
        </label>

        <ul id='nav-links' className={list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Lost</Link>
          </li>
          <li>
            <Link to='/found'>Found</Link>
          </li>
          <li>
            <Link to='/raise'>Raise</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <div id='burger' className='burger' onClick={handle}>
          <div className='line1'></div>
          <div className='line1'></div>
          <div className='line1'></div>
        </div>
      </nav>
    );
}