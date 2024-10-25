import axios from "axios";

const baseUrl = "http://localhost:9999/bookings";

// Get all bookings
export const getBookings = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching bookings:", error);
    }
};

// Get bookings by user ID
export const getBookingByUserId = async (userId) => {
    try {
        const response = await axios.get(baseUrl);
        const bookings = response.data;
        return bookings.filter((booking) => booking.userId === userId);
    } catch (error) {
        console.error("Error fetching bookings by user ID:", error);
    }
};

// Get bookings by movie ID
export const getBookingsByMovieId = async (movieId) => {
    try {
        const response = await axios.get(baseUrl);
        const bookings = response.data;
        return bookings.filter((booking) => booking.movieId === movieId);
    } catch (error) {
        console.error("Error fetching bookings by movie ID:", error);
    }
};

// Create a new booking
export const createBooking = async (booking) => {
    try {
        const randomId = Math.floor(Math.random() * 1000).toString();
        booking.id = randomId;
        const response = await axios.post(baseUrl, booking);
        return response.data;
    } catch (error) {
        console.error("Error creating booking:", error);
    }
};

// Update an existing booking
export const updateBooking = async (id, booking) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, booking);
        return response.data;
    } catch (error) {
        console.error("Error updating booking:", error);
    }
};

// Delete a booking
export const deleteBooking = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.error("Error deleting booking:", error);
    }
};
