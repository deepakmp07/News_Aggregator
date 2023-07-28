import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from './userAction';
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
function Loginpage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setisShow] = useState(false);
  const [errorpass, setErrorMessagepass] = useState("");
  const [erroruser, setErrorMessageuser] = useState("");
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handletoggle = (event) => {
    setisShow(!isShow);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // if (email.match("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$") && password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      dispatch(loginUser(email));
      console.log("axios area");
        axios
          .post("http://localhost:8080/api/v1/auth/authenticate", {
            email,
            password,
          })
          .then((response) => {
            console.log("Login successful:", response);
            const token = response.data.token;
            localStorage.setItem("token", token);
            // props.setEmail(email);
  
            // Navigate to the home page after successful login
    
            nav('/demo');
          })
          .catch((error) => {
            console.error("Login failed:", error);
            alert("Invalid credentials");
          });
      
    // } 
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div className="container">
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="text" value={email} placeholder="Email" onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type={isShow ? "text" : "password"} placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button type="button" className="togglepassword" onClick={handletoggle}>
              {isShow ? "Hide" : "Show"}
            </button>
            <br />
            <p>{errorpass}</p>
          </label>
          <br />
          <button type="submit">Login</button>
          <br />
          <div>
            Forget password? or <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
