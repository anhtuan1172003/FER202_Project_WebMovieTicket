import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

function MonthlyRevenue() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/revenue/monthly').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center">Doanh thu theo tháng</h2>
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </Col>
      </Row>
    </Container>
  );
}

export default MonthlyRevenue;
