import { Row, Col, Card, Button, Tab, Tabs, Container } from "react-bootstrap";
import "../style/MainContent.css";

export default function MainContent({ showingmovies = [], comingmovies = [] }) {
    return (
        <Col>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Phim Sắp Chiếu" className="tab-movie">
                    <Container>
                        <Row sm={2} xs={1} md={4} className="g-4">
                            {showingmovies.map((showingmovie) => (
                                <Col style={{ textAlign: "center" }}>
                                    <Card>
                                        <div className="card-img-container">
                                            <Card.Img variant="top" src={showingmovie.imageSrc} className="card-img" />
                                        </div>
                                        <Card.Body>
                                            <Card.Text>{showingmovie.title}</Card.Text>
                                            <Card.Text className="d-flex justify-content-between">
                                                <span>{showingmovie.description}</span>
                                            </Card.Text>
                                            <Button variant="primary" type="submit" style={{ backgroundColor: "#333333", maxWidth: "100%" }}>
                                                Đặt Suất Chiếu Sớm
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="profile" title="Phim Đang Chiếu" className="tab-movie">
                    <Container>
                        <Row sm={2} xs={1} md={4} className="g-4">
                            {comingmovies.map((comingmovie) => (
                                <Col style={{ textAlign: "center" }}>
                                    <Card>
                                        <div className="card-img-container">
                                            <Card.Img variant="top" src={comingmovie.imageSrc} className="card-img" />
                                        </div>
                                        <Card.Body>
                                            <Card.Text>{comingmovie.title}</Card.Text>
                                            <Card.Text className="d-flex justify-content-between">
                                                <span>{comingmovie.description}</span>
                                            </Card.Text>
                                            <Button variant="primary" type="submit" style={{ backgroundColor: "#333333", maxWidth: "100%" }}>
                                                Đặt vé
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </Col >
    )
}