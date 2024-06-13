import React from 'react';
import { Row, Col, Card, Tab, Tabs, Button } from 'react-bootstrap';
import './MovieList.css';

const movieshowing = [
  { id: 1, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie1.jpeg' },
  { id: 2, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie2.jpeg' },
  { id: 3, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie3.jpeg' },
  { id: 4, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie4.jpeg' },
  { id: 5, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie5.jpeg' },
  { id: 6, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie6.jpeg' },
  { id: 7, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie7.jpeg' },
  { id: 8, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie8.jpeg' },
];

const movieComing = [
    { id: 1, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie1.jpeg' },
    { id: 2, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie2.jpeg' },
    { id: 3, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie3.jpeg' },
    { id: 4, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie4.jpeg' },
    { id: 5, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie5.jpeg' },
    { id: 6, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie6.jpeg' },
    { id: 7, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie7.jpeg' },
    { id: 8, title: 'Movie 1', genre: 'Description 1', poster: 'image/movie8.jpeg' },
    
];

const truncateTitle = (title) => {
  const maxLength = 30;
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`;
  }
  return title;
};

const MovieList = ({ movieshowing, movieComing }) => {
  return (
    <div className="movie-list">
      <Tabs defaultActiveKey="dangchieu" className="tab-films">
        <Tab eventKey="dangchieu" title="PHIM ĐANG CHIẾU">
          <Row xs={1} md={2} lg={4} className="g-4">
            {movieshowing.map((movie) => (
              <Col key={movie.id}>
                <Card className="movie-card">
                  <Card.Img variant="top" src={movie.poster} className="card-img-top" />
                  <Card.Body>
                    <Card.Title className="card-title">{truncateTitle(movie.title)}</Card.Title>
                    <Card.Text className="card-text">Thể Loại: {movie.genre}</Card.Text>
                    <Button variant="primary">Mua vé</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="sapchieu" title="PHIM SẮP CHIẾU">
          <Row xs={1} md={2} lg={4} className="g-4">
            {movieComing.map((movie) => (
              <Col key={movie.id}>
                <Card className="movie-card">
                  <Card.Img variant="top" src={movie.poster} className="card-img-top" />
                  <Card.Body>
                    <Card.Title className="card-title">{truncateTitle(movie.title)}</Card.Title>
                    <Card.Text className="card-text">Thể Loại: {movie.genre}</Card.Text>
                    <Button variant="primary">Mua vé</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="dacbiet" title="SUẤT CHIẾU ĐẶC BIỆT">
          <Row xs={1} md={2} lg={4} className="g-4">
            {/* Special screenings can be added here */}
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MovieList;
