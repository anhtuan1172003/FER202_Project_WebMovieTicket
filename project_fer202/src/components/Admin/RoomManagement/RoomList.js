import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('/api/rooms').then((response) => {
      setRooms(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách phòng chiếu</h1>
      <Link to="/rooms/add">Thêm phòng chiếu mới</Link>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.name} - ID Rạp: {room.theaterId} - Số lượng ghế: {room.seats}
            <Link to={`/rooms/edit/${room.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
