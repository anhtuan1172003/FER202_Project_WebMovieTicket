import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';


import './Showtimes.css'; // Assuming you have some basic styles
export default function DetailMovie(){
    const movies = [
        {
          title: "NHỮNG KẺ THEO DÕI - T16",
          origin: "Mỹ",
          releaseDate: "14/06/2024",
          ageRestriction: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
          duration: "King dị : 95 phút",
          director: " Joshua John Miller",
          actor:"Russell Crowe, Ryan Simpkins, Sam Worthington, Chloe Bailey, Adam Goldberg, David Hyde Pierce",
          detailmovie:"Nam diễn viên đoạt giải Oscar Russell Crowe vào vai Anthony (Tony) Miller, một diễn viên với nhiều phiền muộn vừa nhận một vai diễn mới trong một bộ phim kinh dị, siêu nhiên. Tony bắt đầu có những cư xử kì lạ khiến con gái của ông - Lee (Ryan Simpkins) tự hỏi liệu cha của mình có đang dấn thân vào con đường cũ hay có gì đó tồi tệ và đen tối hơn đang đứng đằng sau",
          poster: "./image/anhmovie1.jpg",
          trailer:["Xem trailer"],
        }
    ];
    
    return(
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
        <p className="text-sm text-white">Đạo diễn: {movie.director}</p>
        <p className="text-sm text-white">Diễn viên: {movie.actor}</p>
        <p className="text-sm text-white"> {movie.detailmovie}</p>

        <p className="text-sm text-white text-red-500">{movie.ageRestriction}</p>
        <div className="mt-2">
          <div className="flex flex-wrap gap-2 mt-1">
            {movie.trailer.map((time, idx) => (
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
<div className="w-full">
        <div className="">
          <button className="">
            <div className="">
              <p>Th. 06</p>
              <p className="text-xl font-bold">19</p>
              <p>Thứ tư</p>
            </div>
          </button>
          <button className="">
            <div className="">
              <p>Th. 06</p>
              <p className="text-xl font-bold">20</p>
              <p>Thứ năm</p>
            </div>
          </button>
          <button className="">
            <div className="">
              <p>Th. 06</p>
              <p className="text-xl font-bold">21</p>
              <p>Thứ sáu</p>
            </div>
          </button>
        </div>
        <div className="">
          <button className="bg-gray-800 px-4 py-1 rounded-lg hover:bg-red-500">
            <p>19.15</p>
          </button>
          <button className="bg-gray-800 px-4 py-1 rounded-lg hover:bg-red-500">
            <p>20.10</p>
          </button>
          <button className="bg-gray-800 px-4 py-1 rounded-lg hover:bg-red-500">
            <p>21.30</p>
          </button>
          <button className="bg-gray-800 px-4 py-1 rounded-lg hover:bg-red-500">
            <p>23.15</p>
          </button>
        </div>
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
}