import { useEffect, useState } from 'react';
import { Row, Col, Image, Carousel } from "react-bootstrap";

function ControlledCarousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };
  const [banners, setBanners] = useState ([]);
  useEffect(() => {
    //GER - URI: http://localhost:9999/movies
    fetch("http://localhost:9999/banners")
        .then(res => res.json())
        .then(result => setBanners(result))
        .catch(error => console.log(error));
}, []);

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    //   <Carousel.Item className='rounded'>
    //     <img src='https://samfillingham.com/wp-content/uploads/2020/05/2200-1000px-banner-Muna-1310x595.jpg' alt='First slide' className='rounded' />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item className='rounded'>
    //     <img src='https://samfillingham.com/wp-content/uploads/2020/05/2200-1000px-banner-Muna-1310x595.jpg' alt='First slide' className='rounded' />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item className='rounded'>
    //     <img src='https://samfillingham.com/wp-content/uploads/2020/05/2200-1000px-banner-Muna-1310x595.jpg' alt='First slide' className='rounded' />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <Carousel style={{ height: '500px', overflow: 'hidden' }}>
      {banners.map((banner, index) => (
        <Carousel.Item key={index}>
          <Image src={banner.imageSrc} style={{ width: '100%', height: '500px' }} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;