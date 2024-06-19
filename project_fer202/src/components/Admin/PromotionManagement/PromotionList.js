import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PromotionList() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('/api/promotions').then((response) => {
      setPromotions(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách khuyến mãi</h1>
      <Link to="/promotions/add">Thêm khuyến mãi mới</Link>
      <ul>
        {promotions.map((promotion) => (
          <li key={promotion.id}>
            {promotion.title} - {promotion.description} - {promotion.discount}%
            <Link to={`/promotions/edit/${promotion.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromotionList;
