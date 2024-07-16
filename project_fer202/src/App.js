import { Row, Col, Image, Carousel } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import MainContent from "./components/MainContent";
import Authentication from "../src/components/Auth";
import Blog from "./components/Blog";
import Schedule from "./components/Schedule";
import MovieDetail from "./components/MovieDetail";




const banners = [
  { imageSrc: 'banner/banner1.jpeg' },
  { imageSrc: 'banner/banner2.jpeg' },
  { imageSrc: 'banner/banner3.jpeg' },
  { imageSrc: 'banner/banner4.jpeg' },
];

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <Carousel style={{ height: '500px', overflow: 'hidden' }}>
            {banners.map((banner, index) => (
              <Carousel.Item key={index}>
                <Image src={banner.imageSrc} style={{ width: '100%', height: '500px' }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <MainContent/>
      </Row>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/movie/:mId" element={<MovieDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}