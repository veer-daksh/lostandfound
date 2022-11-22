import React from "react";
import lnf from '../images/lost-and-found.png'

export default function Home_body()
{
    return (
      <React.Fragment>
        <div className='home-page'>
          <div className='gotlost-container'>
            <div className='gotlost-content'>
              <h1 className='gotlost-heading'>GOT LOST</h1>
              <p className="heading-content">
                Something lost it's way and came to you just to show the world
                how honest you are!
              </p>
              <br/>
              <p className="heading-content">
                Or if you've lost something just chill! People here are damnnn
                cool!
              </p>
            </div>
              <img src={lnf} alt='' className='gotlost-img'></img>
          </div>
        </div>
        


      </React.Fragment>
    );
}