import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`/api/users/${id}`).then((response) => {
      setUser(response.data);
    });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chi tiết người dùng</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Số điện thoại: {user.phone}</p>
    </div>
  );
}

export default UserDetails;
