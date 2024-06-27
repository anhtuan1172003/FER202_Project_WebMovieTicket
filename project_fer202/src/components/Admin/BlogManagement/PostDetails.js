import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  if (!post) return (
    <Container>
      <Row className="justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );

  return (
    <Container>
      <Row>
        <Col>
          <h1>Chi tiết bài viết</h1>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetails;
