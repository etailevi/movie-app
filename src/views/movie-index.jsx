import React, { useEffect, useRef, useState } from 'react'
import { movieService } from '../services/movie.service'
import { MovieList } from '../cmps/movie-list'
import { MovieFilter } from '../cmps/movie-filter'
import { MovieSort } from '../cmps/movie-sort'
import { Link } from 'react-router-dom'
import { Loader } from '../cmps/loader'

export function MovieIndex() {

    const [error, setError] = useState()
    const [isLoading, setIsLodaing] = useState(false)
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState(movieService.query() || [])
    const [filterBy, setFilterBy] = useState(movieService.getDefaultFilter())
    const [sortBy, setSortBy] = useState()
    // const API_KEY = process.env.MOVIES_API_KEY
    const API_KEY = 'bd51ecc90bdea3ebcacaad222ab4a555'
    useEffect(() => {
        async function fetchMovies() {
            setIsLodaing(true)
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${API_KEY}`)
                const data = await response.json()
                movieService.saveMovies(data.results)
                const filteredMovies = movieService.query(filterBy)
                const sortedMovies = sortMovies(filteredMovies, sortBy)
                setMovies(sortedMovies)
            } catch (err) {
                setError(err)
            } finally {
                setIsLodaing(false)
            }
        }

        // function fetchMoviesWithDelay() {
        //     setTimeout(fetchMovies, 2000)
        // }

        // fetchMoviesWithDelay()
        fetchMovies()
    }, [filterBy, sortBy, page])

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

    function setPrevPage() {
        if (page > 1) setPage(prev => prev - 1)
    }

    function setNextPage() {
        setPage(prev => prev + 1)
    }

    return (
        <section className="movie-index">
            <div className="control-panel">
                <MovieFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                <MovieSort onSetSort={onSetSort} />
            </div>
            {isLoading && <Loader />}
            {!isLoading &&
                <MovieList movies={movies} />
            }
            {error &&
                <div className='error'>
                    <h3>Something went wrong! Please try again
                        <Link to='/movie'>
                            <span>here</span>
                        </Link>
                        .
                    </h3>
                </div>
            }
            <div className='page-section'>
                <button onClick={setPrevPage} disabled={page <= 1}>-</button>
                <span>{page}</span>
                <button onClick={setNextPage}>+</button>
            </div>
        </section>
    )
}
