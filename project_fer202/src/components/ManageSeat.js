import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import SeatRow from './SeatRow.js';
import '../style/Seat.css';

export default function ManageSeat () {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) =>
            prevSelectedSeats.includes(seatNumber)
                ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
                : [...prevSelectedSeats, seatNumber]
        );
    };

    const rows = [
        { rowNumber: 1, seats: [1, 2, 3, 4, 5, 6, 7, 8] },
        { rowNumber: 2, seats: [9, 10, 11, 12, 13, 14, 15, 16] },
        { rowNumber: 3, seats: [17, 18, 19, 20, 21, 22, 23, 24] },
    ];

    const poster = {
        title: 'Movie 1',
        description: 'Description 1 - This is a great movie.',
        imageSrc: 'image/movie1.jpeg',
    };

    return (
        <Row>
            <Col md={9}>
                <div className="app">
                    <h1 className="white-text">Select Seats</h1>
                    <div className="screen-container">
                        <div className="screen">
                            <span className="white-text">Screen</span>
                        </div>
                    </div>
                    {rows.map((row) => (
                        <SeatRow
                            key={row.rowNumber}
                            rowNumber={row.rowNumber}
                            seats={row.seats}
                            selectedSeats={selectedSeats}
                            onSeatClick={handleSeatClick}
                        />
                    ))}
                    <div className="selected-seats white-text">
                        Selected Seats: {selectedSeats.join(', ')}
                    </div>
                    <div className="legend">
                        <div className="legend-item">
                            <div className="seat selected"></div>
                            <span className="white-text">Selected Seat</span>
                        </div>
                        <div className="legend-item">
                            <div className="seat"></div>
                            <span className="white-text">Available Seat</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="movie-poster">
                    <div className="poster poster-image">
                        <Image src={poster.imageSrc} fluid />
                    </div>
                    <div className="description">
                        <h3 className="white-text">{poster.title}</h3>
                        <p className="white-text">{poster.description}</p>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
