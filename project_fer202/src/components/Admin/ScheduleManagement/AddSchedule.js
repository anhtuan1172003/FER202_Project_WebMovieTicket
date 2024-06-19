import React, { useState } from 'react';
import axios from 'axios';

function AddSchedule() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [movieId, setMovieId] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/schedules', { date, time, movieId, roomId })
      .then(() => {
        setDate('');
        setTime('');
        setMovieId('');
        setRoomId('');
      });
  };

  return (
    <div>
      <h1>Thêm lịch chiếu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ngày</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Giờ</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label>ID Phim</label>
          <input type="text" value={movieId} onChange={(e) => setMovieId(e.target.value)} required />
        </div>
        <div>
          <label>ID Phòng</label>
          <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} required />
        </div>
        <button type="submit">Thêm lịch chiếu</button>
      </form>
    </div>
  );
}

export default AddSchedule;
