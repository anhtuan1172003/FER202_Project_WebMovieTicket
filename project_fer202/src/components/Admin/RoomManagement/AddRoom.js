import React, { useState } from 'react';
import axios from 'axios';

function AddRoom() {
  const [name, setName] = useState('');
  const [theaterId, setTheaterId] = useState('');
  const [seats, setSeats] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/rooms', { name, theaterId, seats })
      .then(() => {
        setName('');
        setTheaterId('');
        setSeats(0);
      });
  };

  return (
    <div>
      <h1>Thêm phòng chiếu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên phòng</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>ID Rạp</label>
          <input type="text" value={theaterId} onChange={(e) => setTheaterId(e.target.value)} required />
        </div>
        <div>
          <label>Số lượng ghế</label>
          <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} required />
        </div>
        <button type="submit">Thêm phòng</button>
      </form>
    </div>
  );
}

export default AddRoom;
