import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState, } from "react";
import { useNavigate, Link } from 'react-router-dom';
import '../style/Blog.css'

<<<<<<< Updated upstream
export default function Blog({blogPosts=[]}) {

  
=======
export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();
  const handleClick = (postId) => {
    navigate(`/blog/${encodeURIComponent(postId)}`);
  };
  useEffect(() => {
      //GER - URI: http://localhost:9999/movies
      fetch("http://localhost:9999/blogPosts")
          .then(res => res.json())
          .then(result => setBlogPosts(result))
          .catch(error => console.log(error));
  }, []);
>>>>>>> Stashed changes
    return (
        <Container className="blog-page">
                <h2>Khuyến Mãi Mới</h2>
                <Row>
                    {blogPosts.map((blogPost, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={blogPost.imageSrc}/>
                                <Card.Body>
                                    <Card.Title onClick={() => handleClick(blogPost.id)}>{blogPost.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </Container>
    );
}