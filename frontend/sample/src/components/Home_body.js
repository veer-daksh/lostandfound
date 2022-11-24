import React from "react";
import lnf from '../images/lost-and-found.png'
import { Link } from 'react-router-dom';
import fnd from '../images/found-card.png'

export default function Home_body(props)
{
    return (
      <React.Fragment>
        <div className='container-main'></div>
        <div className='home-page'>
          {!props.ses && (
            <div className='gotlost-container'>
              <div className='gotlost-content'>
                <h1 className='gotlost-heading'>GOT LOST</h1>
                <p className='heading-content'>
                  {props.ses}
                  Something lost it's way and came to you just to show the world
                  how honest you are!
                </p>
                <br />
                <p className='heading-content'>
                  Or if you've lost something just chill! People here are damnnn
                  cool!
                </p>

                <Link to='/login'>
                  <div className='shrink'>
                    <div className='learn-more'>Register Now!</div>{' '}
                  </div>
                </Link>
              </div>
              <img src={lnf} alt='' className='gotlost-img'></img>
            </div>
          )}

          {props.ses!==''   && 
          
          (
            <React.Fragment>
              <div className='gotlost-container'>
                <div className='gotlost-content abc'>
                  <h1 className='gotlost-heading efg'>LOST</h1>
                  <br />
                  <ul class='heading-content'>
                    <li class=''>
                      Only the property lost on College or Hostel can be
                      reported.
                    </li>
                    
                    <li class=''>
                      Maximum time for filing any lost report should be 2 days.
                    </li>
                    <li class=''>Try to be as much detailed as you can be.</li>
                    <li class=''>
                      Head towards the form below if you have lost your
                      property.
                    </li>
                  </ul>

                  <Link to='/lost'>
                    <div className='shrink'>
                      <div className='learn-more'>NEXT</div>{' '}
                    </div>
                  </Link>
                </div>
                <img src={lnf} alt='' className='gotlost-img'></img>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className='gotlost-container'>
                <img src={fnd} alt='' className='gotfound-img'></img>
                <div className='gotlost-content abc'>
                  <h1 className='gotlost-heading efg'>FOUND</h1>
                  <ul className='heading-content'>
                    <li>
                      Below is the form, if you've found a lost property on
                      college/hostel.
                    </li>
                    <li>
                      Please try to report as soon as possible so that you can
                      help someone in need.
                    </li>
                    <li>
                      The involvement of faculty will be kept as minimum as
                      possible by our side, so that this might also help in
                      student's ability to build connections.
                    </li>
                    <li>
                      If nobody comes forward for the property you found, only
                      then the faculty will get involved.
                    </li>
                  </ul>
                  <Link to='/found'>
                    <div className='shrink'>
                      <div className='learn-more'>NEXT</div>
                    </div>
                  </Link>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
}