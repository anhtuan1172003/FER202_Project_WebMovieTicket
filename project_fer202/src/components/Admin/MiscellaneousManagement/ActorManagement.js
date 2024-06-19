import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ActorManagement() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get('/api/actors').then((response) => {
      setActors(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Quản lý diễn viên</h1>
      <Link to="/actors/add">Thêm diễn viên mới</Link>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            {actor.name}
            <Link to={`/actors/edit/${actor.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActorManagement;
