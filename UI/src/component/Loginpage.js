import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from './userAction';
import { Link } from "react-router-dom";
import "./login.css";

function Loginpage() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setisShow] = useState(false);
  const [errorpass, setErrorMessagepass] = useState("");
  const [erroruser, setErrorMessageuser] = useState("");
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handletoggle = (event) => {
    setisShow(!isShow);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.length > 5 && password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      dispatch(loginUser(username));
     nav('/demo');
    } else {
      setErrorMessagepass("Invalid password");
      setErrorMessageuser("Invalid username");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div className="container">
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} placeholder="Firstname" onChange={handleUsernameChange} />
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
