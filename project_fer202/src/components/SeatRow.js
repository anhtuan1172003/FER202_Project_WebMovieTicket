import React from 'react';
import Seat from './Seat';
import '../style/Seat.css';

export default function SeatRow ({ rowNumber, seats, selectedSeats, onSeatClick }) {
    return (
        <div className="seat-row">
            {seats.map((seatNumber) => (
                <Seat
                    key={seatNumber}
                    seatNumber={seatNumber}
                    isSelected={selectedSeats.includes(seatNumber)}
                    onClick={onSeatClick}
                />
            ))}
        </div>
    );
};
