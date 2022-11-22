import React from 'react';
import '../../src/login.css';
import UserService from '../services/UserService';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const USER_API_BASE_URL = 'http://localhost:5000//login';


export default function Login(props) {
  const [list, setList] = React.useState('container');
    const [a, seta] = React.useState([1, 2, 3, 4]);
    const [detail, setDetail] = React.useState({
        name: '',
        email:'',
        password:'',
      });

    const [detail2, setDetail2] = React.useState({
      email: '',
      password: '',
    });
    // const fetchTours = async () => {
    //   try {
    //     const response = await fetch('');
    //     const tours = await response.json();
    //     seta(tours);
    //     console.log(tours);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // React.useEffect(() => {
    //   fetchTours();
    //   console.log('useeffect');
    // }, []);

      function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
        console.log(detail);
        axios.post('http://localhost:5000/login/signup', detail).then((res) => {
          console.log(res);
          console.log(`users no error ${props.ses}`)
          props.oper('nikunj');
          toast.success('🦄 account created!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },(error)=>
        {
          console.log(`users error ${props.ses}`);
          props.oper('nikunj');
          toast.success('🦄 account not created!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        });
      }

      function handleSubmit2(e) {
        e.preventDefault();
        console.log('submit');
        console.log(detail2);
        props.oper(detail2.email);
        console.log(props.ses);
        axios.post('http://localhost:5000/login/login', detail2).then((res) => {
          console.log(res);
          
          toast.success('🦄 Wow so easy!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        });
      }

      function handleChange(e) {
        const name = e.target.name;
        const val = e.target.value;
        console.log(name, val);
        setDetail((prev) => {
          return { ...prev, [name]: val };
        });
      }

      function handleChange2(e) {
        const name = e.target.name;
        const val = e.target.value;
        console.log(name, val);
        setDetail2((prev) => {
          return { ...prev, [name]: val };
        });
      }

  function handlevent(e) 
  {
    setList('container right-panel-active');
  }
  function removevent(e) 
  {
    setList('container');
  }
  return (
    <React.Fragment>
      <div className='container-main'></div>
      <ToastContainer/>
      <div className={list} id='container'>
        <div className='form-container sign-up-container'>
          <form className='form-loginpage' action='#'>
            <h1>Create Account</h1>
            <div className='social-container'>
              <a href='#' className='social'></a>
              <a href='#' className='social'></a>
              <a href='#' className='social'></a>
            </div>
            <input
              className='input-loginpage'
              type='text'
              placeholder='Name'
              name='name'
              value={detail.name}
              onChange={handleChange}
            />
            <input
              className='input-loginpage'
              type='email'
              placeholder='Email'
              name='email'
              value={detail.email}
              onChange={handleChange}
            />
            <input
              className='input-loginpage'
              type='password'
              placeholder='Password'
              name='password'
              value={detail.password}
              onChange={handleChange}
            />
            <button type='submit' onClick={handleSubmit}>
              Sign Up
            </button>
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
              name='email'
              value={detail2.email}
              onChange={handleChange2}
            />
            <input
              className='input-loginpage'
              type='password'
              placeholder='Password'
              name='password'
              value={detail2.password}
              onChange={handleChange2}
            />
            <a className='forgot-password' href='#'>
              Forgot your password?
            </a>
            <button type='submit' onClick={handleSubmit2}>
              Sign In
            </button>
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
