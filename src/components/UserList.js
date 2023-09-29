import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Fetch data from the API using Axios
    axios.get(apiUrl)
      .then((response) => {
        // Set the fetched data in the state
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div className='ul'>
        {listOfUsers.map((user) => (
          < div className='li' key={user.id}>
             {user.name}
             {user.email}
             {user.phone}
           
          </div>

        ))}
      </div>
    </div>
  );
}

export default UserList;
