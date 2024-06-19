import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GenreManagement() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('/api/genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Quản lý thể loại</h1>
      <Link to="/genres/add">Thêm thể loại mới</Link>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            {genre.name}
            <Link to={`/genres/edit/${genre.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreManagement;
