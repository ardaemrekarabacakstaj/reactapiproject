import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5').then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <div className='h-screen w-screen'>
      <ul className='flex justify-center items-center gap-10  h-screen w-screen flex-wrap'>
        {users.map((user, i) => (
          <li key={i} className='flex flex-col border border-2 rounded-md p-1.5 border-black justify-center gap-4 items-center gap-8'>
            <img className='w-40 h-40 fluid pt-0.5 rounded-[50%]' src={user.picture.thumbnail}/>
            <p>Name: {user.name.first} {user.name.last}</p>
            <p>Telephone: {user.phone}</p>
            <p>Country: {user.location.country}</p>
            <p>City: {user.location.city}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
