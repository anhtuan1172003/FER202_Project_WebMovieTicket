import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditRoom() {
  const { id } = useParams();
  const history = useHistory();
  const [room, setRoom] = useState({
    name: '',
    theaterId: '',
    seats: 0
  });

  useEffect(() => {
    axios.get(`/api/rooms/${id}`).then((response) => {
      setRoom(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/rooms/${id}`, room).then(() => {
      history.push('/rooms');
    });
  };

  return (
    <div>
      <h1>Sửa phòng chiếu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên phòng</label>
          <input type="text" name="name" value={room.name} onChange={handleChange} required />
        </div>
        <div>
          <label>ID Rạp</label>
          <input type="text" name="theaterId" value={room.theaterId} onChange={handleChange} required />
        </div>
        <div>
          <label>Số lượng ghế</label>
          <input type="number" name="seats" value={room.seats} onChange={handleChange} required />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default EditRoom;
