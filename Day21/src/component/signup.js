import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

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
    e.preventDefault();

    // If there are any validation errors, do not proceed with signup
    if (erroremail || erroruser || errorpass) {
      return;
    }

    // Create an object with the data to be sent in the POST request
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    // Make the POST request using axios.post
    axios
      .post('http://localhost:8080/api/v1/auth/register', userData) // Replace 'http://your-api-url/signup' with your actual API endpoint
      .then((response) => {
        // Handle the success response here
        console.log('Signup successful:', response);
        // Optionally, you can redirect the user to a success page or perform other actions
        nav('/');
      })
      .catch((error) => {
        // Handle errors here
        console.error('Signup failed:', error);
        // Optionally, you can display an error message to the user
      });
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