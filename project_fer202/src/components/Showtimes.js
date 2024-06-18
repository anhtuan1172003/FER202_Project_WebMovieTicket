import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './Showtimes.css'; 

export default function Showtimes(){
        const movies = [
            {
              title: "NHỮNG KẺ THEO DÕI - T16",
              origin: "Mỹ",
              releaseDate: "14/06/2024",
              ageRestriction: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
              duration: "King dị : 95 phút",
              showtimes: ["19:10", "22:30"],
              poster: "./images/anhmovie1.jpg",
            },
            {
              title: "THẦY TRỪ TÀ - T18",
              origin: "Mỹ",
              releaseDate: "14/06/2024",
              ageRestriction: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
              duration: "King dị : 88 phút",
              showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
              poster: "./images/anhmovie2.jpg",
            },
            {
              title: "NHỮNG GÃ TRAI HƯ: CHƠI HAY BỊ XƠI - T18",
              origin: "Mỹ",
              releaseDate: "07/06/2024",
              ageRestriction: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
              duration: "Hành động : 115 phút",
              showtimes: ["19:15", "20:10", "21:15", "22:10", "23:15"],
              poster: "./images/anhmovie4.jpg",
            },
            {
              title: "LINH HỒN VŨ NỮ 2: NGHI THỨC HỒI SINH - T18",
              origin: "Indonesia",
              releaseDate: "07/06/2024",
              ageRestriction: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
              duration: "King dị : 123 phút",
              showtimes: ["21:55", "23:15"],
              poster: "./images/anhmovie3.jpg",
            },
          ];
          
            return (
                <>
               <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Col className="header-brand"><Navbar.Brand href="#home"><h1>Cinema</h1></Navbar.Brand></Col>
        <Col className="header-tab"><Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#sales">Sales</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link to="/Authentication">Sign In/Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>

            <h3 className="font-bold bg-gray-900 text-white">Phim đang chiếu</h3>
            <div className=" mb-4 bg-gray-900">
        <Button variant="outline-primary" className="mr-2 text-white">13-6-2024</Button>
        <Button variant="outline-primary" className="mr-2 text-white">14-6-2024</Button>
        <Button variant="outline-primary" className="mr-2 text-white">15-6-2024</Button>
        <Button variant="outline-primary" className="mr-2 text-white">16-6-2024</Button>
        <Button variant="outline-primary" className="mr-2 text-white">17-6-2024</Button>
      </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {movies.map((movie, index) => (
                  <div key={index} className="bg-gray-900 text-black p-4 rounded-lg">
                    <div className="flex">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="mb-6"
                      />
                      <div className="w-2/3 pl-4">
                        <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                        <p className="text-sm text-white">{movie.duration}</p>
                        <p className="text-sm text-white">Xuất xứ: {movie.origin}</p>
                        <p className="text-sm text-white">Khởi chiếu: {movie.releaseDate}</p>
                        <p className="text-sm text-white text-red-500">{movie.ageRestriction}</p>
                        <div className="mt-2">
                          <h4 className="text-lg text-white">Lịch chiếu</h4>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {movie.showtimes.map((time, idx) => (
                              <button
                                key={idx}
                                className="bg-gray-800 px-4 py-1 rounded-lg hover:bg-red-500"
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Row className="footer-container">
      <Row className="footer-left">
        <Col style={{ textAlign: "left" }}>
          <h2>About US</h2>
          <p>
            <a>Công Ty rạp chiếu phim</a><br />
            <a><i class="bi bi-telephone"></i>0396835513</a><br />
            <a><i class="bi bi-voicemail">+11113131</i></a><br />
          </p>
        </Col>
        <Col className="footer-right">
          <h2><i class="bi bi-google">  </i>
            <i class="bi bi-facebook">  </i>
            <i class="bi bi-linkedin">  </i>
            <i class="bi bi-twitter">  </i>
            <i class="bi bi-youtube">  </i>
            <i class="bi bi-envelope">  </i></h2>
        </Col>
      </Row>
      <p>© Copyright 2023</p>
    </Row>

              </>
    );
};

