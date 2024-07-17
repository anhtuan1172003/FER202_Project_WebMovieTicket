
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../style/Schedule.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
export default function Schedule() {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState([]);
  const [showingMovie, setShowingMovie] = useState([]);

  useEffect(() => {
    // Fetch movies
    fetch("http://localhost:9999/movies")
      .then(res => res.json())
      .then(result => setShowingMovie(result))
      .catch(error => console.log(error));

    // Fetch schedules
    fetch("http://localhost:9999/schedules")
      .then(res => res.json())
      .then(result => setSchedules(result))
      .catch(error => console.log(error));
  }, []);

  // Merge movies and schedules
  const mergedMovies = showingMovie.map(movie => {
    const movieSchedule = schedules.find(schedule => schedule.movieId === parseInt(movie.id));
    return {
      ...movie,
      showtimes: movieSchedule ? movieSchedule.showtimes : []
    };
  });

  // Handle click on movie card to navigate to details
  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Container className="movie-page">
      <h3>Phim đang chiếu</h3>
      <Row>
        <Col>
          <div className="date">
            <Button variant="outline-primary" className="mr-2 text-black">13-6-2024</Button>
            <Button variant="outline-primary" className="mr-2 text-black">14-6-2024</Button>
          </div>
        </Col>
      </Row>
      <Row>
        {mergedMovies.map((movie, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="text-white">
              <Card.Img
                variant="top"
                src={`http://localhost:9999/${movie.imageSrc}`} // Ensure correct path to image
                onClick={() => handleClick(movie.id)}
                style={{ cursor: 'pointer' }}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <p>Duration: {movie.duration}</p>
                  <p>Xuất xứ: {movie.origin}</p>
                  <p>Khởi chiếu: {movie.date}</p>
                  <p className="text-red">{movie.description}</p>
                </Card.Text>
                <div>
                  <h4>Lịch chiếu</h4>
                  <div className="flex">
                    {movie.showtimes.map((showtime, idx) => (
                      <Button key={idx} className="mb-2 showtime-button">
                        <p>{showtime.time}</p>
                      </Button>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

  