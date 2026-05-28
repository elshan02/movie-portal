import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MoviePortal from './components/MoviePortal/MoviePortal';

function App() {

  const [ watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("movie_portal_watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("movie_portal_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const isAlreadySaved = prevWatchlist.some((m) => m.imdbID === movie.imdbID);
      if (isAlreadySaved) {
        return prevWatchlist.filter((m) => m.imdbID !== movie.imdbID);
      } else {
        return [...prevWatchlist, movie];
      }
    });
  };

  return (
    <div>
      <Header />
      <MoviePortal watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
    </div>

  );
}

export default App;
