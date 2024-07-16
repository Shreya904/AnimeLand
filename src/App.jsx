import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import './search.svg';

const API_URL = 'https://api.jikan.moe/v4/anime?q=';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}${title}&sfw`);
        const data = await response.json();
        setMovies(data.data);
    }

    useEffect(() => {
        searchMovies('');
    }, []);

    return (
        <div className="app">
            <h1>AnimeLand</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder="search for anime..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <a href={movie.url} target="_blank" rel="noopener noreferrer" key={movie.mal_id}>
                            <MovieCard movie={movie} />
                        </a>
                    ))}
                </div>
            ) : (
                <div className="empty"><h2>No Anime found</h2></div>
            )}
        </div>
    );
}

export default App;
