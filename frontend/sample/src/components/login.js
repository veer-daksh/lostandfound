import React from 'react';
import '../../src/login.css';
export default function Login() {
  const [list, setList] = React.useState('container');
  function handlevent(e) {
    setList('container right-panel-active');
  }
  function removevent(e) {
    setList('container');
  }
  return (
    <React.Fragment>
      <div className='container-main'></div>
      <div className={list} id='container'>
        <div className='form-container sign-up-container'>
          <form className='form-loginpage' action='#'>
            <h1>Create Account</h1>
            <div className='social-container'>
              <a href='#' className='social'></a>
              <a href='#' className='social'></a>
              <a href='#' className='social'></a>
            </div>
            <input className='input-loginpage' type='text' placeholder='Name' />
            <input
              className='input-loginpage'
              type='email'
              placeholder='Email'
            />
            <input
              className='input-loginpage'
              type='password'
              placeholder='Password'
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form className='form-loginpage' action='#'>
            <h1>Sign in</h1>
            <div className='social-container'>
              <a href='#' className='social'></a>
              <a href='#' className='social'></a>
              <a href='#' className='social'></a>
            </div>
            <input
              className='input-loginpage'
              type='email'
              placeholder='Email'
            />
            <input
              className='input-loginpage'
              type='password'
              placeholder='Password'
            />
            <a className='forgot-password' href='#'>
              Forgot your password?
            </a>
            <button>Sign In</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p className='login-para'>
                To keep connected with us please login with your personal info
              </p>
              <button className='ghost' id='signIn' onClick={removevent}>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p className='login-para'>
                Enter your personal details and start journey with us
              </p>
              <button className='ghost' id='signUp' onClick={handlevent}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
