const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchMovies = async (searchedText, moviesCallBack, errorCallBack, onSuccess) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchedText)}`);

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const processedMovies = data.results.map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    Poster: movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : null,

                    Plot: movie.overview || 'No plot available.',
                    GenreIds: movie.genre_ids || [],
                    Released: movie.release_date || 'Unknown',
                }
            })

            moviesCallBack(processedMovies);
            errorCallBack(null);

            if (onSuccess) onSuccess();
        } else {
            moviesCallBack([]);
            errorCallBack("No movies found for the search term: " + searchedText);
            if (onSuccess) onSuccess();
        }
    } catch (error) {
        moviesCallBack([]);
        errorCallBack("An error occurred while fetching movies." + error.message);
    }
};


