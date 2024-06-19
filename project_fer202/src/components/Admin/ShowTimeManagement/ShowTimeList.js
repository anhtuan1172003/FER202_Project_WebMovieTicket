import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShowTimeList() {
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    axios.get('/api/showtimes').then((response) => {
      setShowtimes(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách suất chiếu</h1>
      <Link to="/showtimes/add">Thêm suất chiếu mới</Link>
      <ul>
        {showtimes.map((showtime) => (
          <li key={showtime.id}>
            Ngày: {showtime.date} - Giờ: {showtime.time} - ID Phim: {showtime.movieId} - ID Phòng: {showtime.roomId}
            <Link to={`/showtimes/edit/${showtime.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowTimeList;
