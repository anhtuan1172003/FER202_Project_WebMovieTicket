

const MovieCard = ({ title, description, imageUrl }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Mua vé</button>
    </div>
  );
}

export default MovieCard;
