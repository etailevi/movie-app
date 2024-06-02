import React from 'react'
import { Link } from 'react-router-dom'

export function MoviePreview({ movie, onOpenMovieDetails }) {
    const { poster_path, id, original_title, overview } = movie
    return (
        <article
            className='movie-preview'
            onClick={onOpenMovieDetails}
            style={{ background: `url(https://image.tmdb.org/t/p/original${poster_path}) center center / cover` }}
        >
            <Link to={`/movie/${id}`}>
                <div className="backdrop"></div>
                <div className="movie-info">
                    <h3>{original_title}</h3>
                    <p>{overview}</p>
                </div>
            </Link>
        </article>
    )
}
