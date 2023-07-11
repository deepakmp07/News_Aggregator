import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
function SignupPage() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorpass, setErrorMessagepass] = useState('Enter your password');
  const [erroruser, setErrorMessageuser] = useState('Enter your name');
  const [erroremail, setErrorMessageemail] = useState('Enter your email');

  const handleNameChange = (e) => {
    if (name.length < 5) {
      setErrorMessageuser('Username should be more than 5');
    } else {
      setErrorMessageuser('');
    }
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    if (!(/\S+@\S+\.\S+/.test(email))) {
      setErrorMessageemail('Email is invalid');
    } else {
      setErrorMessageemail('');
    }
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (!password.match(/[a-z]/g)) {
      setErrorMessagepass('Password should contain lowercase letters!');
    } else if (!password.match(/[A-Z]/g)) {
      setErrorMessagepass('Password should contain uppercase letters!');
    } else if (!password.match(/[0-9]/g)) {
      setErrorMessagepass('Password should contain numbers as well!');
    } else if (password.length < 10) {
      setErrorMessagepass('Password length should be more than 10.');
    } else {
      setErrorMessagepass('');
    }
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    if (erroremail.length===0 && erroruser.length===0 && errorpass.length===0) {
      setErrorMessageemail('');
      setErrorMessagepass('');
      setErrorMessageuser('');
      nav("/");
    }
    e.preventDefault();
  };
  return (
    <div>
      <h2>Signup</h2>
      <div className='container'>
        <form onSubmit={handleSignup}>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleNameChange}
              />
              <p>{erroruser}</p>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <p>{erroremail}</p>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <p>{errorpass}</p>
            </div>
          </div>
          <button type='submit'>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
