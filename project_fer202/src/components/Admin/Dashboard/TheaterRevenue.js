import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function TheaterRevenue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/revenue/theater').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Doanh thu theo rạp chiếu phim</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="theater" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#ffc658" />
      </BarChart>
    </div>
  );
}

export default TheaterRevenue;
