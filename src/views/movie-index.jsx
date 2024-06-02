import React, { useEffect, useState } from 'react'
import { MovieList } from '../cmps/movie-list'
import { movieService } from '../services/movie.service'

export function MovieIndex() {

    const [movies, setMovies] = useState(movieService.getMovies() || [])
    const API_KEY = process.env.MOVIES_API_KEY
    useEffect(() => {

        async function fetchMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bd51ecc90bdea3ebcacaad222ab4a555`)
                const data = await response.json()
                setMovies(data.results)
                movieService.saveMovies(data.results)
            } catch (err) {
                console.error('Cannot load movies', err)
            }
        }
        if (!movies.length) fetchMovies()
    }, [movies.length])
    console.log(movies)

    return (
        <section className="movie-index">
            {movies ? (

                <MovieList movies={movies} />
            ) : (
                <h3>Loading Movies...</h3>
            )}
        </section>
    )
}
