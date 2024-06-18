import React from 'react';
import '../style/Seat.css';

export default function Seat ({ seatNumber, isSelected, onClick }) {
    return (
        <div 
            className={`seat ${isSelected ? 'selected' : ''}`} 
            onClick={() => onClick(seatNumber)}
        >
            {seatNumber}
        </div>
    );
};

