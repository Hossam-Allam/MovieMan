
import './App.css';
import searchIcon from './search.svg';
import React from 'react';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
//cbd2524a
const API_URL  = 'http://www.omdbapi.com?apikey=cbd2524a'

const testMovie = {
    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
function App() {

  const movieSearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  useEffect(() => {
    movieSearch('shrek');
  },[]);

  return (
    <div className='app'>

      <h1>MovieMan</h1>
      <div className='search'>
        <input
          placeholder='search movie name'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img src = {searchIcon} alt = 'search' onClick={() => movieSearch(searchTerm)}/>
        
      </div>
      {movies?.length > 0 ?
       (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
       ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
      }
      
    </div>
      
    
  );
}

export default App;
