import './MovieDetail.css';

function MovieDetail({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
          alt={movie.Title}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-released">{movie.Released}</p>
        <p className="movie-plot">{movie.Plot}</p>
        <div className="movie-links">
          <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer" className="movie-link">IMDb</a>
          <a href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`} target="_blank" rel="noreferrer" className="movie-link">Trailer</a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;