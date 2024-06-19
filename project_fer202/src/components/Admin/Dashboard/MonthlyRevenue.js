import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MonthlyRevenue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/revenue/monthly').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Doanh thu theo tháng</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default MonthlyRevenue;
