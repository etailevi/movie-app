import { utilService } from "./util.service"

const MOVIE_KEY = 'movieDB'

export const movieService = {
    getMovies,
    saveMovies,
    getMovieById
}

function getMovies() {
    return utilService.loadFromStorage(MOVIE_KEY)
}

function saveMovies(movies) {
    utilService.saveToStorage(MOVIE_KEY, movies)
}

function getMovieById(movieId) {
    return getMovies().find(movie => movie.id === movieId)
}