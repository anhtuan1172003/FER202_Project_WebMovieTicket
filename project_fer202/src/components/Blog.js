import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/Blog.css'

export default function Blog({blogPosts=[]}) {

  
    return (
        <Container className="blog-page">
                <h2>Khuyến Mãi Mới</h2>
                <Row>
                    {blogPosts.map((blogPost, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={blogPost.imageSrc} />
                                <Card.Body>
                                    <Card.Title>{blogPost.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </Container>
    );
};