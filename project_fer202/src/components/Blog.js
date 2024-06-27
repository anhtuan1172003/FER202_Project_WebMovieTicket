import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/Blog.css'

export default function Blog() {

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
    return (
        <Container className="blog-page">
                <h2>Khuyến Mãi Mới</h2>
                <Row>
                    {blogPosts.map((blogPost, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={blogPost.imageSrc} />
                                <Card.Body>
                                    <Card.Title>{blogPost.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </Container>
    );
};