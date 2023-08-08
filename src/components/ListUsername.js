import React, { useEffect, useState } from 'react';

const Userlist = () => {
  const [users, setUsers] = useState([]);

  
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/getUser');
        const data = await response.json();
        console.log(data);
        setUsers(data);
       
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
        fetchUser();
      }, []);
    
    return (
        <div>
          <h2>Registered Usernames:</h2>
          <ul>
            {users.map((username, index) => (
              <li key={index}>{username}</li>
            ))}
          </ul>
        </div>
      );
    };
export default Userlist;