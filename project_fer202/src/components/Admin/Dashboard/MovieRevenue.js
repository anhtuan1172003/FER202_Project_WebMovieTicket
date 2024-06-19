import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MovieRevenue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/revenue/movie').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Doanh thu theo phim</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="movie" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default MovieRevenue;
