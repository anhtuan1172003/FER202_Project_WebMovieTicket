import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditSchedule() {
  const { id } = useParams();
  const history = useHistory();
  const [schedule, setSchedule] = useState({
    date: '',
    time: '',
    movieId: '',
    roomId: ''
  });

  useEffect(() => {
    axios.get(`/api/schedules/${id}`).then((response) => {
      setSchedule(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule({
      ...schedule,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/schedules/${id}`, schedule).then(() => {
      history.push('/schedules');
    });
  };

  return (
    <div>
      <h1>Sửa lịch chiếu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ngày</label>
          <input type="date" name="date" value={schedule.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Giờ</label>
          <input type="time" name="time" value={schedule.time} onChange={handleChange} required />
        </div>
        <div>
          <label>ID Phim</label>
          <input type="text" name="movieId" value={schedule.movieId} onChange={handleChange} required />
        </div>
        <div>
          <label>ID Phòng</label>
          <input type="text" name="roomId" value={schedule.roomId} onChange={handleChange} required />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default EditSchedule;
