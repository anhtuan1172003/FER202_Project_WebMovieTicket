import { Row, Col, Container, Image, Carousel } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import './style/App.css';
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Showtimes from './pages/Showtimes';


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

export default function App() {
  return (
    <div className="app">
      <Row><Col><Router>
        <Header />
        <Container className="mt-4">
        <Switch>
          <Route path="/showtimes" component={Showtimes} />
        </Switch>
      </Container>
      </Router></Col></Row>
      <Row>
        <Col>
          <Carousel style={{ height: "500px", overflow: "hidden" }}>
            {banners.map((banner) => (
              <Carousel.Item >
                <Image src={banner.imageSrc} style={{ width: "100%", height: "auto" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row><Col><Container><MainContent comingmovies = {comingmovies} showingmovies= {showingmovies}/></Container></Col></Row>
      <Row><Col><Footer/></Col></Row>
    </div>
  );
}