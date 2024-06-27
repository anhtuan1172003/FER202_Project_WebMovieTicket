import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Danh sách bài viết</h1>
          <Button variant="primary" as={Link} to="/posts/add">
            Thêm bài viết mới
          </Button>
          <ListGroup className="mt-4">
            {posts.map((post) => (
              <ListGroup.Item key={post.id} className="d-flex justify-content-between align-items-center">
                <span>{post.title}</span>
                <Button variant="secondary" as={Link} to={`/posts/edit/${post.id}`}>
                  Sửa
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default PostList;
