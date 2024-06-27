import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ComboManagement() {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    axios.get('/api/combos').then((response) => {
      setCombos(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Quản lý combo</h1>
          <Button variant="primary" as={Link} to="/combos/add">
            Thêm combo mới
          </Button>
          <ListGroup className="mt-4">
            {combos.map((combo) => (
              <ListGroup.Item key={combo.id} className="d-flex justify-content-between align-items-center">
                {combo.name} - {combo.price} VND
                <Link to={`/combos/edit/${combo.id}`}>Sửa</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ComboManagement;
