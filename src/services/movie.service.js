import { utilService } from "./util.service"

const MOVIE_KEY = 'movieDB'

export const movieService = {
    query,
    saveMovies,
    getMovieById,
    getDefaultFilter
}

function query(filterBy = {}) {
    let movies = utilService.loadFromStorage(MOVIE_KEY) || []
    if (filterBy.title) {
        const regExp = new RegExp(filterBy.title, 'i')
        movies = movies.filter(movie => regExp.test(movie.title))
    }
    return movies
}

function saveMovies(movies) {
    utilService.saveToStorage(MOVIE_KEY, movies)
}

function getMovieById(movieId) {
    return query().find(movie => movie.id === movieId)
}

function getDefaultFilter() {
    return {
        title: '',
    }
}