import { Row, Col, Image, Carousel } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import MainContent from "./components/MainContent";
import Authentication from "../src/components/Auth";
import Blog from "./components/Blog";


const comingmovies = [
  { title: 'Movie 1', description: 'Description 1', imageSrc: 'image/movie1.jpeg' },
  { title: 'Movie 2', description: 'Description 1', imageSrc: 'image/movie2.jpeg' },
  { title: 'Movie 3', description: 'Description 1', imageSrc: 'image/movie3.jpeg' },
  { title: 'Movie 4', description: 'Description 1', imageSrc: 'image/movie4.jpeg' },
  { title: 'Movie 5', description: 'Description 1', imageSrc: 'image/movie5.jpeg' },
  { title: 'Movie 6', description: 'Description 1', imageSrc: 'image/movie6.jpeg' },
  { title: 'Movie 7', description: 'Description 1', imageSrc: 'image/movie7.jpeg' },
  { title: 'Movie 8', description: 'Description 1', imageSrc: 'image/movie8.jpeg' },
  // Add more movies here
];
const showingmovies = [
  { title: 'Movie 1', description: 'Description 1', imageSrc: 'image/movie1.jpeg' },
  { title: 'Movie 2', description: 'Description 1', imageSrc: 'image/movie2.jpeg' },
  { title: 'Movie 3', description: 'Description 1', imageSrc: 'image/movie3.jpeg' },
  { title: 'Movie 4', description: 'Description 1', imageSrc: 'image/movie4.jpeg' },
  { title: 'Movie 5', description: 'Description 1', imageSrc: 'image/movie5.jpeg' },
  { title: 'Movie 6', description: 'Description 1', imageSrc: 'image/movie6.jpeg' },
  { title: 'Movie 7', description: 'Description 1', imageSrc: 'image/movie7.jpeg' },
  { title: 'Movie 8', description: 'Description 1', imageSrc: 'image/movie8.jpeg' },
  // Add more movies here
];

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
        <MainContent comingmovies={comingmovies} showingmovies={showingmovies} />
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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}