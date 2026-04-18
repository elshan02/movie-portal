export const fetchMovies = async (searchedText, moviesCallBack, errorCallBack) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchedText}&apikey=4f813609`);
        const data = await response.json();
       
        if (data.Response === "True") {
            const movieDetailsPromises = data.Search.map((movie) => fetchMovieDetails(movie.imdbID, errorCallBack));
            const movieDetails = await Promise.all(movieDetailsPromises);
            moviesCallBack(movieDetails);
            errorCallBack(null);
        } else {
            moviesCallBack([]);
            errorCallBack(data.Error);
        }
    } catch (error) {
        moviesCallBack([]);
        errorCallBack("An error occurred while fetching movies." + error.message);
    }
};


const fetchMovieDetails = async (imdbID, errorCallBack) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4f813609`);
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
