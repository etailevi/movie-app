import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { movieService } from '../services/movie.service'

export function MovieDetails() {
    const { movieId } = useParams()
    const movie = movieService.getMovieById(parseInt(movieId))
    return (
        <section
            className='movie-details'
        >
            <div
                className="cover-photo"
                style={{ background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) center center / cover` }}
            >
                <h1>
                    {movie.original_title}
                </h1>
            </div>
            <Link to='/movie'>
                <button className="go-back-btn">
                    &#8678; Go Back
                </button>
            </Link>
            <div className="movie-background">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
                <div className="text">
                    <p>{movie.overview}</p>
                    <span>Release Date: {movie.release_date}</span>
                </div>
            </div>
        </section>
    )
}
