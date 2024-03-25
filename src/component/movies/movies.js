import React, { useEffect, useState } from 'react';


const apiKey = '1aca2a04';
// Array of movie titles to search

function Movies({ searchQueries}) {    
    const [movies, setMovies] = useState([]);
    const [movieTitles, setMovieTitles] = useState([]);
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
                const titles = allMovies.map(movie => movie.Title);
                setMovieTitles(titles);
                
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovies();
    }, [searchQueries]);

    return (
        <div>
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <button id={`button-${index}`}  style={{
                            border: 'none',
                            padding: '0',
                            margin: '0',
                            backgroundImage: `url(${movie.Poster})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '263px',
                            width: '177px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                        }}></button>
                        <div>{movieTitles[index]}</div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Movies
