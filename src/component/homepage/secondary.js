import React, { useEffect, useState } from 'react';
import Home from './home';
import Movies from './Movies';

 const apiKey = '1aca2a04';

const Secondary = () => {
    const [movieTitles, setMovieTitles] = useState([]);

    useEffect(() => {
        // Fetch movie titles and set them in state
        fetchMovieTitles().then(titles => setMovieTitles(titles));
    }, []);

    // Function to fetch movie titles
    const fetchMovieTitles = async () => {
        try {
            // Perform your fetch operation to get movie titles
            // For demonstration, I'm returning some dummy data
            return ['Movie Title 1', 'Movie Title 2', 'Movie Title 3'];
        } catch (error) {
            console.error('Error fetching movie titles:', error);
            return [];
        }
    };

    return (
       <>
       </> 
    );
};

export default Secondary;