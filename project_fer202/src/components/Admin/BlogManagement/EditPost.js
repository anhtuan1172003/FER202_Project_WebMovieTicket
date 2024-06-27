import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/posts/${id}`, post).then(() => {
      history.push('/posts');
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Sửa bài viết</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control 
                type="text" 
                name="title" 
                value={post.title} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formContent">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control 
                as="textarea" 
                name="content" 
                value={post.content} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Cập nhật
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditPost;
