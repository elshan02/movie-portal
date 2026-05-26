const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovies = async (searchedText, moviesCallBack, errorCallBack, onSuccess) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchedText}&apikey=${API_KEY}`);
        const data = await response.json();
       
        if (data.Response === "True") {
            const movieDetailsPromises = data.Search.map((movie) => fetchMovieDetails(movie.imdbID, errorCallBack));
            const movieDetails = await Promise.all(movieDetailsPromises);
            moviesCallBack(movieDetails);
            errorCallBack(null);

            if (onSuccess) onSuccess();
        } else {
            moviesCallBack([]);
            errorCallBack(data.Error);
            if (onSuccess) onSuccess();
        }
    } catch (error) {
        moviesCallBack([]);
        errorCallBack("An error occurred while fetching movies." + error.message);
    }
};


const fetchMovieDetails = async (imdbID, errorCallBack) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === "True") {
            return data;
        } else {
            errorCallBack(data.Error);
            return null;
        }
    } catch (error) {
        errorCallBack("An error occurred while fetching movie details." + error.message);
        return null;
    }
};
