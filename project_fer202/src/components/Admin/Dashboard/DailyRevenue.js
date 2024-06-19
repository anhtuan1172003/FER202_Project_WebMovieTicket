import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function DailyRevenue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/revenue/daily').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Doanh thu theo ngày</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default DailyRevenue;
