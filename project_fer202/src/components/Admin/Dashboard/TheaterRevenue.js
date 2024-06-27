import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

function TheaterRevenue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/revenue/theater').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center">
            <h2>Doanh thu theo rạp chiếu phim</h2>
          </div>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="theater" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#ffc658" />
          </BarChart>
        </Col>
      </Row>
    </Container>
  );
}

export default TheaterRevenue;

