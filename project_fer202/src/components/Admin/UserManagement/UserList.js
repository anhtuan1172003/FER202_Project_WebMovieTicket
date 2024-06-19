import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <Link to="/users/add">Thêm người dùng mới</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Link to={`/users/details/${user.id}`}>Chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
