import { HomePage } from './views/home-page'
import { MovieIndex } from './views/movie-index'
import { MovieDetails } from './views/movie-details'

const routes = [
    {
        path: '/',
        component: <HomePage />
    },
    {
        path: '/movie',
        component: <MovieIndex />
    },
    {
        path: '/movie/:movieId',
        component: <MovieDetails />
    },
]

export default routes