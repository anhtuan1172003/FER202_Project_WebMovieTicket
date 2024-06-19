import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditTicketPrice() {
  const { id } = useParams();
  const history = useHistory();
  const [ticketPrice, setTicketPrice] = useState({
    type: '',
    price: 0
  });

  useEffect(() => {
    axios.get(`/api/ticket-prices/${id}`).then((response) => {
      setTicketPrice(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketPrice({
      ...ticketPrice,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/ticket-prices/${id}`, ticketPrice).then(() => {
      history.push('/ticket-prices');
    });
  };

  return (
    <div>
      <h1>Sửa giá vé</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Loại vé</label>
          <input type="text" name="type" value={ticketPrice.type} onChange={handleChange} required />
        </div>
        <div>
          <label>Giá</label>
          <input type="number" name="price" value={ticketPrice.price} onChange={handleChange} required />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}

export default EditTicketPrice;
