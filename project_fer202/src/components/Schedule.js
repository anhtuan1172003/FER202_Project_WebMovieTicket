
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React from 'react';
import '../style/Schedule.css';
import { useNavigate } from 'react-router-dom';
export default function Schedule() {
    const navigate = useNavigate();
    const movies = [

        {
            title: "ĐẤT RỪNG PHƯƠNG NAM",
            origin: "Việt nam",
            date: "20/10/2023",
            description: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
            duration: "Chiến tranh: 95 phút",
            showtimes: ["19:10", "22:30"],
            poster: "./image/movie1.jpeg",
        },
        {
            title: "RÒM",
            origin: "Việt nam",
            date: "14/06/2024",
            description: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            duration: "Tội phạm: 88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "./image/movie2.jpeg",
        },
        {
            title: "TRẠNG QUỲNH",
            origin: "Việt nam",
            date: "07/06/2024",
            description: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            duration: "Hài: 88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "./image/movie3.jpeg",
        },
        {
            title: "MAI",
            origin: "Việt nam",
            Date: "14/06/2024",
            description: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            duration: "Tình cảm: 88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "./image/movie4.jpeg",
        },
        {
            title: "RÒM",
            origin: "Việt nam",
            date: "14/06/2024",
            description: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            duration: "Tội phạm: 88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "./image/movie5.jpeg",
        },
        {
            title: "LAST NIGHT IN SOHO ",
            origin: "Mỹ",
            date: "14/06/2024",
            description: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            duration: "Kinh dị: 88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "./image/movie6.jpeg",
        },
        {
            title: "EM VÀ TRỊNH",
            origin: "Việt nam",
            date: "14/06/2024",
            description: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            duration: "Tình cảm: 88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "./image/movie7.jpeg",
        },
        {
            title: "KUNGFU PANDA 4",
            origin: "Nhật bản",
            date: "14/06/2024",
            description: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            duration: "Hoạt hình: 88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "./image/movie8.jpeg",
        }
    ];

    const handleClick = (title) => {
        navigate(`/movie/${encodeURIComponent(title)}`);
    };
    return (
        <Container className="movie-page">
        <h3><p>Phim đang chiếu</p></h3>
        <div className="date">
          <Button variant="outline-primary" className="mr-2 text-black">13-6-2024</Button>
          <Button variant="outline-primary" className="mr-2 text-black">14-6-2024</Button>
        </div>
        <Row>
          {movies.map((movie, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-white">
                <Card.Img
                  variant="top"
                  src={movie.poster}
                  onClick={() => handleClick(movie.title)}
                  style={{ cursor: 'pointer' }}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    <p>Duration: {movie.duration}</p>
                    <p>Xuất xứ: {movie.origin}</p>
                    <p>Khởi chiếu: {movie.date}</p>
                    <p className="text-red-500">{movie.description}</p>
                  </Card.Text>
                  <div>
                    <h4>Lịch chiếu</h4>
                    <div className="flex">
                      {movie.showtimes.map((time, idx) => (
                        <Button key={idx} className="text-black">
                          {time}
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