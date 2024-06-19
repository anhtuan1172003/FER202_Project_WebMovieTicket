import React, { useState } from 'react';
import axios from 'axios';

function AddTicketPrice() {
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/ticket-prices', { type, price })
      .then(() => {
        setType('');
        setPrice(0);
      });
  };

  return (
    <div>
      <h1>Thêm giá vé</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Loại vé</label>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        </div>
        <div>
          <label>Giá</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">Thêm giá vé</button>
      </form>
    </div>
  );
}

export default AddTicketPrice;
