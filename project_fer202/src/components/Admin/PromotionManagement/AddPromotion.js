import React, { useState } from 'react';
import axios from 'axios';

function AddPromotion() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/promotions', { title, description, discount })
      .then(() => {
        setTitle('');
        setDescription('');
        setDiscount(0);
      });
  };

  return (
    <div>
      <h1>Thêm khuyến mãi</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Mô tả</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Giảm giá (%)</label>
          <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
        </div>
        <button type="submit">Thêm khuyến mãi</button>
      </form>
    </div>
  );
}

export default AddPromotion;
