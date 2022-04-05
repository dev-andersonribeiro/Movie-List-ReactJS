import { Container, MovieList, Movie } from "./styles";

import { useState, useEffect } from 'react'

import { Link } from "react-router-dom";



function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'
    useEffect(() => {
        // Consumindo a API

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8c99e96ea71a735e9b9101096c9782e`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
            })

    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                     return (
                        <Movie>
                        <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                        <span>{movie.title}</span>
                        </Movie>
                     )
                })}
                
               
            </MovieList>
        </Container>
        
    )
}

export default Home;