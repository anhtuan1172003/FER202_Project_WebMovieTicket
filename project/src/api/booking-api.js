import axios from "axios";

const baseUrl = "http://localhost:9999/bookings";

export const getBookings = async () => {
    try {
        const response = await axios.get(`${baseUrl}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getBookingByUserId = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}`);
        const bookings = response.data;
        return bookings.filter((booking) => booking.userId == userId);
        return bookings;
    } catch (error) {
        console.error(error);
    }
};

export const createBooking = async (booking) => {
    try {
        let randomId = Math.floor(Math.random() * 1000).toString();
        booking.id = randomId;
        const response = await axios.post(`${baseUrl}`, booking);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Update an existing booking
export const updateBooking = async (id, booking) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, booking);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Delete a booking
export const deleteBooking = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.error(error);
    }
};