import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users', { name, email, phone })
      .then(() => {
        setName('');
        setEmail('');
        setPhone('');
      });
  };

  return (
    <div>
      <h1>Thêm người dùng</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Số điện thoại</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <button type="submit">Thêm người dùng</button>
      </form>
    </div>
  );
}

export default AddUser;
