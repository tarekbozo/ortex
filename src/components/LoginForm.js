import React, { useState } from 'react';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import './loginForm.css';
import '../styles/util.css';
import { useHistory } from 'react-router-dom';
import Modale from './Modale';

export const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (email === '' || password === '') {
        setError(true);
      } else {
        setError(false);
        history.push('./dashbord');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div className='limiter'>
        <div className='container-login100'>
          <div className='wrap-login100'>
            <div className='login100-pic js-tilt' data-tilt>
              <img src='./ortex_logo.png' alt='IMG' />
            </div>
            <form onSubmit={handleSubmit} className='login100-form'>
              <span className='login100-form-title'> Login</span>
              {(email.length > 0 && password.length > 0) || (
                <div className={error ? 'validate-input' : 'validate-hidden'}>
                  Please fill in the blank field
                </div>
              )}

              <div className='wrap-input100'>
                <input
                  className='input100'
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className='symbol-input100'>
                  <FaEnvelope />
                </span>
              </div>
              <div className='wrap-input100 '>
                <input
                  className='input100'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className='symbol-input100'>
                  <FaLock />
                </span>
              </div>

              <div className='container-login100-form-btn'>
                <button className='login100-form-btn'>Login</button>
              </div>
              <div className='text-center p-t-12'>
                <button onClick={openModal} className='txt1'>
                  Forgot password
                </button>
                <Modale showModal={showModal} setShowModal={setShowModal} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
