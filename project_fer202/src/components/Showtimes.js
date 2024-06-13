import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Image from 'react-bootstrap/Image';
import '../style/Showtimes.css'; // Assuming you have some basic styles

export default function Showtimes(){
        const movies = [
            {
              title: "NHỮNG KẺ THEO DÕI - T16",
              origin: "Mỹ",
              releaseDate: "14/06/2024",
              ageRestriction: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
              duration: "95 phút",
              showtimes: ["19:10", "22:30"],
              poster: "./images/anhmovie1.jpg",
            },
            {
              title: "THẦY TRỪ TÀ - T18",
              origin: "Mỹ",
              releaseDate: "14/06/2024",
              ageRestriction: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
              duration: "88 phút",
              showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
              poster: "./images/anhmovie2.jpg",
            },
            {
              title: "NHỮNG GÃ TRAI HƯ: CHƠI HAY BỊ XƠI - T18",
              origin: "Mỹ",
              releaseDate: "07/06/2024",
              ageRestriction: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
              duration: "115 phút",
              showtimes: ["19:15", "20:10", "21:15", "22:10", "23:15"],
              poster: "./images/anhmovie4.jpg",
            },
            {
              title: "LINH HỒN VŨ NỮ 2: NGHI THỨC HỒI SINH - T18",
              origin: "Indonesia",
              releaseDate: "07/06/2024",
              ageRestriction: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
              duration: "123 phút",
              showtimes: ["21:55", "23:15"],
              poster: "./images/anhmovie3.jpg",
            },
          ];
          
            return (
                <>
                <Row className="header">
                <Col md={1}>
                    <Image src="./images/movie.jpg" width="50px"/>
                </Col>
                <Col md={6}>
                <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/home"><i class="bi bi-house-door-fill"></i>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/showtimes"><i class="bi bi-currency-dollar"></i>Showtimes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/Movie"><i class="bi bi-emoji-tear"></i>Movie</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            <h3 className="font-bold">Phim đang chiếu</h3>
            <div className="mb-4">
        <Button variant="outline-primary" className="mr-2">13-6-2024</Button>
        <Button variant="outline-primary" className="mr-2">14-6-2024</Button>
        <Button variant="outline-primary" className="mr-2">15-6-2024</Button>
        <Button variant="outline-primary" className="mr-2">16-6-2024</Button>
        <Button variant="outline-primary" className="mr-2">17-6-2024</Button>
      </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {movies.map((movie, index) => (
                  <div key={index} className="bg-gray-900 text-white p-4 rounded-lg">
                    <div className="flex">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-1/3 rounded-lg"
                      />
                      <div className="w-2/3 pl-4">
                        <h3 className="text-xl font-bold">{movie.title}</h3>
                        <p className="text-sm">{movie.duration}</p>
                        <p className="text-sm">Xuất xứ: {movie.origin}</p>
                        <p className="text-sm">Khởi chiếu: {movie.releaseDate}</p>
                        <p className="text-sm text-red-500">{movie.ageRestriction}</p>
                        <div className="mt-2">
                          <h4 className="text-lg">Lịch chiếu</h4>
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
              </>
    );
};
