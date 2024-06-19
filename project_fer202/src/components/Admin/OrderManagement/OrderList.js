import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders').then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách đơn hàng</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.id} - {order.customerName} - {order.totalAmount}
            <Link to={`/orders/${order.id}`}>Chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
