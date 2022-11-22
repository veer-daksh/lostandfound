import React from 'react';
import UserService from '../services/UserService';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Raise() {
  const [detail, setDetail] = React.useState({
    name: '',
    location: '',
    brand: '',
    color: '',
    tag: 'Found',
    description: '',
  });
  const [tags,setTags]=React.useState('Lost')
  const [counter, setCounter] = React.useState(1);
  const [form1, setForm1] = React.useState(true);
  const [form2, setForm2] = React.useState(false);
  const [form3, setForm3] = React.useState(false);

  // const [f, setF] = React.useState([
  //   <React.Fragment>
  //     <form className='form' onSubmit={handleSubmit}>
  //       <div className='form-question-1'>
  //         WHICH TYPE OF QUERY YOU WANT TO RAISE?
  //       </div>
  //       <div className='form-lost-button'>LOST</div>
  //       <div className='form-found-button'>FOUND</div>
  //     </form>
  //   </React.Fragment>,
  //   <React.Fragment>
  //     <form className='form' onSubmit={handleSubmit}>
  //       <div className='form-control'>
  //         <label htmlFor='name'></label>
  //         <input className='input'
  //           type='text'
  //           id='name'
  //           name='name'
  //           value={detail.name}
  //           onChange={handleChange}
  //           placeholder='NAME'
  //         />
  //       </div>
  //       <div className='form-control'>
  //         <label htmlFor='location'></label>
  //         <input className='input'
  //           type='text'
  //           id='location'
  //           name='location'
  //           value={detail.location}
  //           onChange={handleChange}
  //           placeholder='location'
  //         />
  //       </div>
  //       <div className='form-control'>
  //         <label htmlFor='brand'></label>
  //         <input className='input'
  //           type='text'
  //           id='brand'
  //           name='brand'
  //           value={detail.brand}
  //           onChange={handleChange}
  //           placeholder='Brand'
  //         />
  //       </div>
  //       <div className='form-control'>
  //         <label htmlFor='color'></label>
  //         <input className='input'
  //           type='text'
  //           id='color'
  //           name='color'
  //           value={detail.color}
  //           onChange={handleChange}
  //           placeholder='color'
  //         />
  //       </div>
  //     </form>
  //   </React.Fragment>,
  //   <React.Fragment>
  //     <form className='form' onSubmit={handleSubmit}>
  //       <div className='form-control'>
  //         <label htmlFor='type'>Type : </label>
  //         <select
  //           id='type'
  //           name='type'
  //           value={detail.type}
  //           onChange={handleChange}
  //         >
  //           <option value='Found'>Found</option>
  //           <option value='Lost'>Lost</option>
  //         </select>
  //       </div>
  //       <div className='form-control'>
  //         <label htmlFor='description'></label>
  //         <textarea
  //           id='description'
  //           name='description'
  //           value={detail.description}
  //           onChange={handleChange}
  //           placeholder='Description'
  //         />
  //       </div>
  //     </form>
  //   </React.Fragment>,
  // ]);


  function handleLost()
  {
    setTags('Lost');
    setDetail((prev)=>{
      return {...prev, tag:tags }
    })
    console.log(detail);
  }
  function handleFound()
  {
    setTags('Found');
    setDetail((prev) => {
      return { ...prev, tag: tags };
    });
    console.log(detail);
  }
  function handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);
    setDetail((prev) => {
      return { ...prev, [name]: val };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit")
    console.log(detail);
    toast.success('Submited Sucessfully!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    UserService.createUser(detail);
    bar()
  }
  

  function bar() {
    setCounter((counter + 1)%3);
    console.log(counter)
    console.log(form1, form2, form3);
    if (counter === 0) {

      setForm1(true);
      setForm2(false);
      setForm3(false);
    } else if (counter === 1) {
      
      setForm1(false);
      setForm2(true);
      setForm3(false);
    } else if (counter === 2) {
      setForm1(false);
      setForm2(false);
      setForm3(true);
    }
  }

  return (
    <React.Fragment>
      <div className='bgimage'></div>
      <ToastContainer />
      <div className='raise-ticket'>
        <div className='form-bar'>
          <div className='form-bar-1'>1</div>
          <div
            className={
              form2 === true || form3 === true
                ? 'form-barline-1 green'
                : 'form-barline-1 white'
            }
          ></div>
          <div className='form-bar-2'>2</div>
          <div
            className={
              form3 === true ? 'form-barline-1 green' : 'form-barline-1 white'
            }
          ></div>
          <div className='form-bar-2'>3</div>
        </div>

        {/* form */}
        <div className='form-holder'>
          <form className='form' onSubmit={handleSubmit}>
            {form1 && (
              <React.Fragment>
                <div className='form-question-1'>
                  WHICH TYPE OF QUERY YOU WANT TO RAISE?
                </div>
                <div
                  className={`form-lost-button ${
                    tags === 'Lost' ? 'select-tag effect7' : ' '
                  }`}
                  onClick={handleLost}
                >
                  LOST
                </div>
                <div
                  className={`form-lost-button ${
                    tags === 'Found' ? 'select-tag effect7' : ' '
                  }`}
                  onClick={handleFound}
                >
                  FOUND
                </div>
              </React.Fragment>
            )}
            {form2 && (
              <React.Fragment>
                <div className='form-control'>
                  <label htmlFor='name'></label>
                  <input
                    className='input'
                    type='text'
                    id='name'
                    name='name'
                    value={detail.name}
                    onChange={handleChange}
                    placeholder='NAME'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='location'></label>
                  <input
                    className='input'
                    type='text'
                    id='location'
                    name='location'
                    value={detail.location}
                    onChange={handleChange}
                    placeholder='location'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='brand'></label>
                  <input
                    className='input'
                    type='text'
                    id='brand'
                    name='brand'
                    value={detail.brand}
                    onChange={handleChange}
                    placeholder='Brand'
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='color'></label>
                  <input
                    className='input'
                    type='text'
                    id='color'
                    name='color'
                    value={detail.color}
                    onChange={handleChange}
                    placeholder='color'
                  />
                </div>
              </React.Fragment>
            )}
            {form3 && (
              <React.Fragment>
                <div className='form-control2'>
                  <textarea
                    className='raise-description'
                    id='description'
                    name='description'
                    value={detail.description}
                    onChange={handleChange}
                    placeholder='Description'
                  />
                  <br></br>
                  <button type='submit' className='submit'>
                    Submit
                  </button>
                </div>
              </React.Fragment>
            )}
          </form>
        </div>
        {!form3 && (
          <div className='form-button-holder'>
            <button type='button' className='next-button' onClick={bar}>
              NEXT
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
