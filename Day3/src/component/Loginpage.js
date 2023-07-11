import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const[isShow,setisShow] = useState(false);
  const[errorpass,setErrorMessagepass] = useState('');
  const[erroruser,setErrorMessageuser] = useState('');
  let user = false;
  let pass = false;
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handletoggle = event =>{
    setisShow(!isShow);
  }
  const handleLogin = event => {
    event.preventDefault();
    console.log(pass)
    if ((username.length>5)&&(password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))) {
      setLoggedIn(true);
    }
    else{
      setLoggedIn(false);
      if(!(username.length>5)&&!(password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))){
       setErrorMessagepass("password is invalid");
       setErrorMessageuser("user is invalid");
      }
     else if(username.length<=5){
      setErrorMessageuser("user is invalid");
    }
     else{
      setErrorMessagepass("password is invalid");
    }
  }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Login Page</h1>
        <div className='container'>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} placeholder = 'Firstname'onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type={isShow ? "text": "password"} placeholder='Password' value={password} onChange={handlePasswordChange} />
            <button type='button' className='togglepassword' onClick = {handletoggle}>{isShow ? 'hide':'show'}</button>
            <br/>
            <p>{errorpass}</p>
          </label>
          <br />
          <button type="submit">Login</button>
          <br/>
          <div>Forgetpassword? or <Link to='/signup'>Signup</Link></div>

        </form>
        </div>
      </div>
    );
  }
}

export default Loginpage;
 