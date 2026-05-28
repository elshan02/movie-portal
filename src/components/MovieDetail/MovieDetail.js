import './MovieDetail.css';

function MovieDetail({ movie, watchlist, toggleWatchlist }) {

  const isSaved = watchlist ? watchlist.some((m) => m.imdbID === movie.imdbID) : false;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/noposter.png'}
          alt={movie.Title}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-released">{movie.Released}</p>
        <p className="movie-plot">{movie.Plot}</p>
        <button onClick={() => toggleWatchlist(movie)} className="watchlist-btn"> {isSaved ? 'Remove from Watchlist' : 'Add to Watchlist'} 
        </button>
        <div className="movie-links">
          <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer" className="movie-link">IMDb</a>
          <a href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`} target="_blank" rel="noreferrer" className="movie-link">Trailer</a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;