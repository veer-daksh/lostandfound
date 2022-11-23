import React from "react";
import lnf from '../images/lost-and-found.png'
import { Link } from 'react-router-dom';

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
                  Something lost it's way and came to you just to show the world
                  how honest you are!
                </p>
                {props.ses}
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

          {!props.ses && (
            <React.Fragment>
              <div className='lost-homepage'>
                <div className='lost-container'>
                  <div className='gotlost-content'>
                    <h1 className='gotlost-heading'>LOST ITEMS</h1>
                    <p className='heading-content'>
                      Something lost it's way and came to you just to show the
                      world how honest you are!
                    </p>
                    {props.ses}
                    <br />
                    <p className='heading-content'>
                      Or if you've lost something just chill! People here are
                      damnnn cool!
                    </p>

                    <Link to='/lost'>
                      <div className='shrink'>
                        <div className='learn-more'>Register Now!</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='found-homepage'>
                <div className='found-container'>
                  <div className='gotfound-content'>
                    <h1 className='gotfound-heading'>LOST ITEMS</h1>
                    <p className='heading-content'>
                      Something lost it's way and came to you just to show the
                      world how honest you are!
                    </p>
                    {props.ses}
                    <br />
                    <p className='heading-content'>
                      Or if you've lost something just chill! People here are
                      damnnn cool!
                    </p>

                    <Link to='/lost'>
                      <div className='shrink'>
                        <div className='learn-more'>Register Now!</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
}