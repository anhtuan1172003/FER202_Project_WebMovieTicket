import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ScheduleList() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios.get('/api/schedules').then((response) => {
      setSchedules(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách lịch chiếu</h1>
      <Link to="/schedules/add">Thêm lịch chiếu mới</Link>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            Ngày: {schedule.date} - Giờ: {schedule.time} - ID Phim: {schedule.movieId} - ID Phòng: {schedule.roomId}
            <Link to={`/schedules/edit/${schedule.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleList;
