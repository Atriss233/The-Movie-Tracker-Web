import React, { useEffect, useState } from 'react';

const apiKey = '1aca2a04'; 
const searchQueries = ['Avengers', 'Batman', 'Spider-Man','The-Gray-Man','House-Of-The-Dragon','Joker','Suicide-Squad','Game-Of-Thrones','Breaking-Bad','Prison-Break']; // Array of movie titles to search

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchPromises = searchQueries.map(async (query) => {
                    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;
                    const response = await fetch(apiUrl);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    return data.Search ? data.Search[0] : null;
                });

                // Wait for all fetch requests to complete
                const results = await Promise.all(fetchPromises);
                // Combine results into a single array
                const allMovies = results.flat();
                setMovies(allMovies);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies
