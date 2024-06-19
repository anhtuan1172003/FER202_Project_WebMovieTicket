import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`/api/orders/${id}`).then((response) => {
      setOrder(response.data);
    });
  }, [id]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chi tiết đơn hàng</h1>
      <p>ID: {order.id}</p>
      <p>Tên khách hàng: {order.customerName}</p>
      <p>Số tiền: {order.totalAmount}</p>
      <p>Ngày đặt: {order.orderDate}</p>
      <p>Danh sách vé:</p>
      <ul>
        {order.tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.movieName} - {ticket.showTime} - {ticket.seatNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetails;
