import React from 'react';
import '../../src/login.css';
import UserService from '../services/UserService';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const USER_API_BASE_URL = 'http://localhost:5000/login';


export default function Login(props) {
  const [sign,setSign]=React.useState(props.ses);
  const [list, setList] = React.useState('container');
    const [a, seta] = React.useState([1, 2, 3, 4]);
    const [ses,setSes]=React.useState(1);
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
        
        console.log(props.ses);
        axios.post('http://localhost:5000/login/login', detail2).then((res) => {
          console.log(res);
          props.oper(detail2.email);
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
          setSign('abc');
        });
      }

      function handleSubmit3(e)
      {
        e.preventDefault();
        axios.post("http://localhost:5000/login/signout").then((res) => {
          console.log(res);
          setSign('');
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
        props.oper('')
        console.log(props.ses)
        setDetail2({
          email: '',
          password: '',
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
      <ToastContainer />

      <div className={list} id='container'>
        {sign === '' && (
          <React.Fragment>
            <div className='form-container sign-up-container'>
              <form className='form-loginpage' action='#'>
                <h1>Create Account</h1>
                <input
                  className='input-loginpage'
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={detail.name}
                  onChange={handleChange}
                  required='required'
                />
                <input
                  className='input-loginpage'
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={detail.email}
                  onChange={handleChange}
                  required='required'
                />
                <input
                  className='input-loginpage'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={detail.password}
                  onChange={handleChange}
                  required='required'
                />
                <button type='submit' onClick={handleSubmit}>
                  Sign Up
                </button>
              </form>
            </div>
            <div className='form-container sign-in-container'>
              <form className='form-loginpage' action='#'>
                {1 && (
                  <React.Fragment>
                    <h1>Sign in</h1>
                    <input
                      className='input-loginpage'
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={detail2.email}
                      onChange={handleChange2}
                      required='required'
                    />
                    <input
                      className='input-loginpage'
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={detail2.password}
                      onChange={handleChange2}
                      required='required'
                    />

                    <button type='submit' onClick={handleSubmit2}>
                      Sign In
                    </button>
                  </React.Fragment>
                )}
              </form>
            </div>
            <div className='overlay-container'>
              <div className='overlay'>
                <div className='overlay-panel overlay-left'>
                  <h1>Welcome Back!</h1>
                  <p className='login-para'>
                    To keep connected with us please login with your personal
                    info
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
          </React.Fragment>
        )}
        {sign !== '' && (
          <React.Fragment>
            <div className='signout-align'>
              <p className='heading-content signout-text'>
                CLICK HERE TO SIGN OUT OF THE PAGE
              </p>
              <button className='signout' type='submit' onClick={handleSubmit3}>
                Sign Out
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

