import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { title, content })
      .then(() => {
        setTitle('');
        setContent('');
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Thêm bài viết</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formContent">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control 
                as="textarea" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Thêm bài viết
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPost;
