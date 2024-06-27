import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ActorManagement() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get('/api/actors').then((response) => {
      setActors(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Quản lý diễn viên</h1>
          <Button variant="primary" as={Link} to="/actors/add">
            Thêm diễn viên mới
          </Button>
          <ListGroup className="mt-4">
            {actors.map((actor) => (
              <ListGroup.Item key={actor.id} className="d-flex justify-content-between align-items-center">
                {actor.name}
                <Link to={`/actors/edit/${actor.id}`}>Sửa</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ActorManagement;
