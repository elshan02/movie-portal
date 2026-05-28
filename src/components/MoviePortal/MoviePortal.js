import './MoviePortal.css';
import { useState } from "react";
import { fetchMovies } from "../../api/fetchMovies";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import MovieDetail from "../MovieDetail/MovieDetail";

function MoviePortal({ watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm, setMovies, setError, () => setSearchedText(searchTerm));
  };

  return (
    <div className="portal-wrapper">
      <div className="hero-section">
        <p className="hero-eyebrow">Millions of movies to discover</p>
        <h1 className="hero-title">What are you watching <span>tonight?</span></h1>
        <p className="hero-subtitle">Search any movie, explore details, and build your watchlist.</p>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-box">
            <svg className="portal-search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="#d4a43c" strokeWidth="1.8"/>
              <path d="M14 14l3 3" stroke="#d4a43c" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search for a movie..."
              className="portal-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="portal-search-btn">Search</button>
          </div>
        </form>
      </div>

      {error && <ErrorAlert error={error} searchedText={searchedText} />}

      

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieDetail 
            key={movie.imdbID} 
            movie={movie} 
            watchlist={watchlist} 
            toggleWatchlist={toggleWatchlist} />
        ))}
      </div>
    </div>
  );
}

export default MoviePortal;