import React from 'react'
import { Link } from 'react-router-dom'

export function MoviePreview({ movie, onOpenMovieDetails }) {
    return (
        <article
            className='movie-preview'
            onClick={onOpenMovieDetails}
            style={{ background: `url(https://image.tmdb.org/t/p/original${movie.poster_path}) center center / cover` }}
        >
            <Link to={`/movie/${movie.id}`}>
                <div className="backdrop"></div>
                <div className="movie-info">
                    <h3>{movie.original_title}</h3>
                    <p>{movie.overview}</p>
                </div>
            </Link>
        </article>
    )
}
