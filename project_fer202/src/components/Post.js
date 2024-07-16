import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/Blog.css'

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const {postId} = useParams();

  useEffect(() => {
      //GER - URI: http://localhost:9999/blogPosts/${pid}
      fetch(`http://localhost:9999/blogPosts/${postId}`)
          .then(res => res.json())
          .then(result => setPosts(result))
          .catch(error => console.log(error));
  }, []);
  
    return (
        <Container className="blog-page">
                <h2>{posts.title}</h2>
                <Row>
                    <Col>
                    <Image src={posts.imageSrc} rounded />
                    <h4>
                        {posts.author}
                        <br/>
                        {posts.date}
                    </h4>
                    <span>{posts.content}</span>
                    </Col>
                </Row>
        </Container>
    );
}