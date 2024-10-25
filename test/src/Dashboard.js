import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Modal, Image } from 'react-bootstrap';
import { getMovies, createMovie, updateMovie, deleteMovie } from './api/movie-api';
import DashboardHeader from './components/DashboardHeader';

export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({ id: '', name: '', year: '', director: '', genre: '', imageUrl: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  const handleShowModal = (movie = { id: '', name: '', year: '', director: '', genre: '', imageUrl: '' }) => {
    setCurrentMovie(movie);
    setSelectedFile(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = currentMovie.imageUrl;

      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);

        const imageResponse = await fetch('http://localhost:5001/upload', {
          method: 'POST',
          body: formData,
        });
        const imageData = await imageResponse.json();
        imageUrl = imageData.filePath;
      }

      const movieData = {
        ...currentMovie,
        imageUrl,
      };

      if (currentMovie.id) {
        await updateMovie(currentMovie.id, movieData);
      } else {
        await createMovie(movieData);
      }

      const moviesData = await getMovies();
      setMovies(moviesData);
      handleCloseModal();
    } catch (error) {
      console.error('Error uploading the movie:', error);
    }
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);
    const moviesData = await getMovies();
    setMovies(moviesData);
  };

  return (
    <div className='container'>
      <DashboardHeader />
      <Container fluid className="my-5">
        <h1 className="mb-4">Movie Dashboard</h1>
        <Button variant="primary" onClick={() => handleShowModal()}>Add Movie</Button>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Year</th>
              <th>Director</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <Image src={movie.imageUrl} rounded style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                </td>
                <td>{movie.name}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>{movie.genre}</td>
                <td>
                  <Button variant="warning" onClick={() => handleShowModal(movie)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{currentMovie.id ? 'Edit Movie' : 'Add Movie'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={currentMovie.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={currentMovie.year}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Director</Form.Label>
                <Form.Control
                  type="text"
                  name="director"
                  value={currentMovie.director}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  value={currentMovie.genre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="imageUrl"
                  value={currentMovie.imageUrl}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {currentMovie.id ? 'Update Movie' : 'Add Movie'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}
