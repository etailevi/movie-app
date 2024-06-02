import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext()

export function MovieProvider({ children }) {

    const [movies, setMovies] = useState([])
    // const API_KEY = process.env.MOVIES_API_KEY

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bd51ecc90bdea3ebcacaad222ab4a555`)
                const data = await response.json()
                setMovies(data.results)
            } catch (err) {
                console.error('Cannot load movies', err)
            }
        } fetchMovies()
    }, [])

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    )
}