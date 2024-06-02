import React from 'react'
import { MoviePreview } from '../cmps/movie-preview.jsx'

export function MovieList({ movies }) {
    return (
        <ul className='movies-list'>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <MoviePreview movie={movie} />


                </li>
            ))}
        </ul>
    )
}
