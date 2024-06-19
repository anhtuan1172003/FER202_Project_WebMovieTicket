import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewCustomers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/customers/new').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Khách hàng mới</h2>
      <ul>
        {data.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewCustomers;
