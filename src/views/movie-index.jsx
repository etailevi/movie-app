import React, { useEffect, useState } from 'react'
import { movieService } from '../services/movie.service'
import { MovieList } from '../cmps/movie-list'
import { MovieFilter } from '../cmps/movie-filter'
import { MovieSort } from '../cmps/movie-sort'

export function MovieIndex() {

    const [movies, setMovies] = useState(movieService.query() || [])
    const [filterBy, setFilterBy] = useState(movieService.getDefaultFilter())
    const [sortBy, setSortBy] = useState()
    // const API_KEY = process.env.MOVIES_API_KEY
    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bd51ecc90bdea3ebcacaad222ab4a555`)
                const data = await response.json()
                movieService.saveMovies(data.results)
                const filteredMovies = movieService.query(filterBy)
                const sortedMovies = sortMovies(filteredMovies, sortBy)
                setMovies(sortedMovies)
            } catch (err) {
                console.error('Cannot load movies', err)
            }
        }
        fetchMovies()
    }, [filterBy, sortBy])

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function onSetSort(sortBy) {
        setSortBy(sortBy)
    }

    function sortMovies(movies, sortBy) {
        switch (sortBy) {
            case 'title-asc':
                return movies.sort((a, b) => a.title.localeCompare(b.title))
            case 'title-desc':
                return movies.sort((a, b) => b.title.localeCompare(a.title))
            case 'popularity-desc':
                return movies.sort((a, b) => b.popularity - a.popularity)
            case 'release-date':
                return movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
            default:
                return movies
        }
    }

    return (
        <section className="movie-index">
            <div className="control-panel">
                <MovieFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                <MovieSort onSetSort={onSetSort} />
            </div>
            {movies.length > 0 ? (
                <>
                    <MovieList movies={movies} />
                </>
            ) : (
                <h3>Loading Movies...</h3>
            )}
        </section>
    )
}
