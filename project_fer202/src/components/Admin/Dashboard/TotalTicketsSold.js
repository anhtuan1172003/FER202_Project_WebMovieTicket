import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TotalTicketsSold() {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios.get('/api/tickets/total').then((response) => {
      setData(response.data.total);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">
            <h2>Tổng số vé bán ra</h2>
            <p>{data} vé</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TotalTicketsSold;
