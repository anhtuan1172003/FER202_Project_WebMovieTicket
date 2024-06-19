import React, { useState } from 'react';
import axios from 'axios';

function AddTheater() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/theaters', { name, address, phone })
      .then(() => {
        setName('');
        setAddress('');
        setPhone('');
      });
  };

  return (
    <div>
      <h1>Thêm rạp chiếu phim</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên rạp</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Địa chỉ</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Số điện thoại</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <button type="submit">Thêm rạp</button>
      </form>
    </div>
  );
}

export default AddTheater;
