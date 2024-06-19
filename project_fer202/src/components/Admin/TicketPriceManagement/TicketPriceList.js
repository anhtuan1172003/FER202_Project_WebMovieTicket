import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TicketPriceList() {
  const [ticketPrices, setTicketPrices] = useState([]);

  useEffect(() => {
    axios.get('/api/ticket-prices').then((response) => {
      setTicketPrices(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách giá vé</h1>
      <Link to="/ticket-prices/add">Thêm giá vé mới</Link>
      <ul>
        {ticketPrices.map((ticketPrice) => (
          <li key={ticketPrice.id}>
            {ticketPrice.type} - {ticketPrice.price}
            <Link to={`/ticket-prices/edit/${ticketPrice.id}`}>Sửa</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketPriceList;
