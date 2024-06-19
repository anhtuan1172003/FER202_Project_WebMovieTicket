import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TheaterList() {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    axios.get('/api/theaters').then((response) => {
      setTheaters(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách rạp chiếu phim</h1>
      <Link to="/theaters/add">Thêm rạp chiếu phim mới</Link>
      <ul>
        {theaters.map((theater) => (
          <li key={theater.id}>
            {theater.name} - {theater.address} - {theater.phone}
            <Link to={`/theaters/edit/${theater.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TheaterList;
