import { Row, Col, Image, Carousel } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import MainContent from "./components/MainContent";
import Authentication from "../src/components/Auth";
import Blog from "./components/Blog";
<<<<<<< Updated upstream
=======
import Post from "./components/Post";
import Schedule from "./components/Schedule";
import MovieDetail from "./components/MovieDetail";
>>>>>>> Stashed changes


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
  { imageSrc: 'image/banner1.jpeg' },
  { imageSrc: 'image/banner2.jpeg' },
  { imageSrc: 'image/banner3.jpeg' },
  { imageSrc: 'image/banner4.jpeg' },
];

const blogPosts = [
  {
    title: 'Điện Ảnh Vô Tận: Khám Phá Thế Giới Phim Mới Mỗi Ngày',
    description: 'Tặng ngay 1 ly Pepsi Không Đường khi mua combo bất kỳ.',
    imageSrc: 'blog/blog1.jpeg'
  },
  {
    title: 'Vé Lên Màn Ảnh Rộng: Trải Nghiệm Điện Ảnh Không Giới Hạn',
    description: '...',
    imageSrc: 'blog/blog2.jpeg'
  },
  {
    title: 'Phim Hay Phút Chốc: Đặt Vé Nhanh, Xem Phim Thả Ga',
    description: '...',
    imageSrc: 'blog/blog3.jpeg'
  },
  {
    title: 'Rạp Chiếu Bí Mật: Góc Nhìn Độc Quyền Về Phim Đang Chiếu',
    description: '...',
    imageSrc: 'blog/blog4.jpeg'
  },
  {
    title: 'CinePulse: Nhịp Đập Của Điện Ảnh Mới',
    description: '...',
    imageSrc: 'blog/blog5.jpeg'
  },
  {
    title: 'ScreenScoop: Tin Tức Nóng Hổi Từ Thế Giới Điện Ảnh"',
    description: '...',
    imageSrc: 'blog/blog6.jpeg'
  },
  {
    title: 'MovieMingle: Kết Nối Cộng Đồng Mê Phim',
    description: '...',
    imageSrc: 'blog/blog7.jpeg'
  },
  {
    title: 'FilmFrontrunners: Đi Đầu Xu Hướng Phim Mới',
    description: '...',
    imageSrc: 'blog/blog8.jpeg'
  }
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
<<<<<<< Updated upstream
        <Route path="/blog" element={<Blog blogPosts={blogPosts}/>} />
=======
        <Route path="/blog" element={<Blog/>} />
        <Route path='/blog/:postId' element={<Post/>} />
>>>>>>> Stashed changes
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}