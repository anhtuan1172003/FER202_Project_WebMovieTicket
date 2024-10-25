import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/Blog.css'

export default function Blog() {
  const [blogPosts, setblogPosts] = useState([]);
  const {postId} = useParams();

  useEffect(() => {
      //GER - URI: http://localhost:9999/blogPosts/${pid}
      fetch(`http://localhost:9999/blogPosts/${postId}`)
          .then(res => res.json())
          .then(result => setblogPosts(result))
          .catch(error => console.log(error));
  }, []);
  
    return (
        <Container className="blog-page">
                <h2>{blogPosts.title}</h2>
                <Row>
                    <Col>
                    <Image src={`http://localhost:9999/${blogPosts.imageSrc}`} fluid />
                    <h4>
                        {blogPosts.author}
                        <br/>
                        {blogPosts.date}
                    </h4>
                    <span>{blogPosts.content}</span>
                    </Col>
                </Row>
        </Container>
    );
}