import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewCustomers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/customers/new').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
    <Row>
      <Col>
        <h2>Khách hàng mới</h2>
        <ListGroup>
          {data.map((customer) => (
            <ListGroup.Item key={customer.id}>{customer.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </Container>
  );
}

export default NewCustomers;
