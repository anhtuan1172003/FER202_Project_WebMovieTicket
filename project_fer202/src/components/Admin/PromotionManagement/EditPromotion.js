import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditPromotion() {
  const { id } = useParams();
  const history = useHistory();
  const [promotion, setPromotion] = useState({
    title: '',
    description: '',
    discount: 0
  });

  useEffect(() => {
    axios.get(`/api/promotions/${id}`).then((response) => {
      setPromotion(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromotion({
      ...promotion,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/promotions/${id}`, promotion).then(() => {
      history.push('/promotions');
    });
  };

  return (
    <div>
      <h1>Sửa khuyến mãi</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề</label>
          <input type="text" name="title" value={promotion.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Mô tả</label>
          <input type="text" name="description" value={promotion.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Giảm giá (%)</label>
          <input type="number" name="discount" value={promotion.discount} onChange={handleChange} required />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default EditPromotion;
