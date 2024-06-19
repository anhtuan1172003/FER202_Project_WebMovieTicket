import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DirectorManagement() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    axios.get('/api/directors').then((response) => {
      setDirectors(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Quản lý đạo diễn</h1>
      <Link to="/directors/add">Thêm đạo diễn mới</Link>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            {director.name}
            <Link to={`/directors/edit/${director.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DirectorManagement;
