
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../style/MovieDetail.css';

export default function MovieDetail() {
  const { mId } = useParams();
  const [showingMovie, setShowingMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on mId from URL parameter
    fetch(`http://localhost:9999/movies/${mId}`)
      .then(res => res.json())
      .then(data => setShowingMovie(data))
      .catch(error => console.log(error));
  }, [mId]);

  const handleWatchTrailer = (trailerUrl) => {
    window.open(trailerUrl, '_blank');
  };

  return (
    <div className="movie-detail-container">
      {showingMovie ? (
        <div className="movie-detail-content">
          <img  className="movie-poster "       
            src={`http://localhost:9999/${showingMovie.imageSrc}`} // Ensure correct path to image
            alt={showingMovie.title}
          />
          <div className="movie-info">
            <h2>{showingMovie.title}</h2>
            <p>{showingMovie.origin}</p>
            <p>{showingMovie.duration}</p>
            <p>Đạo diễn: {showingMovie.director}</p>
            <p>Diễn viên: {showingMovie.acter}</p>
            <p>Khởi chiếu: {showingMovie.date}</p>
            <p>{showingMovie.description}</p>
            <div className="color-advise">
              <p>Khuyến cáo: {showingMovie.advise}</p>
            </div>
            <button
              className="trailer-button"
              onClick={() => handleWatchTrailer(showingMovie.trailerUrl)}
            >
              Xem trailer
            </button>
          </div>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
}