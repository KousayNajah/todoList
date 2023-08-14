import React, { useState } from 'react';
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsername, setRegisteredUsername] = useState('');
  const [registredPassword, setRegistredPassword] = useState('');


  const addUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        setRegisteredUsername(username);
        setRegistredPassword(password);
        setUsername('');
        setPassword(''); 
      } else {
        const errorData = await response.json();
        setRegistredPassword(errorData.error || 'Registration failed.');
      }
    } catch (error) {setRegistredPassword('Internal Server Error');
    }
  };

  const handleRegister = async () => {
    try {
      await addUser(username, password);
    } catch (err) {
     console.error(err)
    }
  };

    
     

  return (
    <div 
      style={{ position: "relative",
      left: "35%",
      width:"25%"}} 
      className="registration-form">
      <h2 style={{ left:"50%"}}>REGISTER PAGE</h2>
      <input
        style={{ position: "relative",
        left: "%",
        margin:"6%",
        width:"80%" }}
        type="text"
        placeholder=" Enter your Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ position: "relative",
        left: "%",
        margin:"6%",
        width:"80%" }}
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>

        <button
        className="btn btn-success"
        style={{ position: "relative",
        left: "28%",
        width:"%",
        margin: 10 }}

         onClick={handleRegister}>Save</button></div>

      {registeredUsername  && <p>Registration successful! You can now login with the username: {registeredUsername}.</p>}
      
      <Link to="/" >You have an account you can log in from here </Link>  
 </div>
  );
};

export default Register;