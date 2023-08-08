import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/getUser");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogin = async () => {
     try {
        let existingUser = false
        existingUser=  users.find((user)=>user.username===username && user.password===password)!==undefined
      if (!existingUser) {
        setLoginError("User not found. Please enter a valid username and password .");
      } else {
          setLoggedIn(true);
          setLoginError('');
    }
     } catch (error) {
     console.error(error);
      setLoginError("error try again");
    }
  };


  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("enter you username");
    setPassword("enter your password");
  };

 
  React.useEffect(() => {
    getUser();
  }, []);


  return (
    <div
      style={{ position: "relative", left: "33%", width: "25%" }}
      className="App"
    >
      {!loggedIn ? (
        <div className="login-form">
          <h2>Login</h2>
          <input
            style={{
              position: "relative",
              left: "%",
              margin: "6%",
              width: "80%",
            }}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={{
              position: "relative",
              left: "%",
              margin: "%",
              width: "80%",
            }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <div><Link to="/Register"> Register from here</Link></div>

          <button
            className="btn btn-success"
            style={{
              position: "relative",
              left: "",
              width: "25",
              margin: "5%",
              border: "WHITE",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
      ) : (
        <div>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          <div>
          <Link to="/todos">Go to Todos</Link>
          </div>
        </div>
      )}
     
    </div>
  );
};


export default Login;
