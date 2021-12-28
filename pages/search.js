import MovieGrid from '../components/MovieGrid/Movie_Grid';
import SearchBar from '../components/SearchBar/SearchBar';
import Head from 'next/head';

import { useState, useEffect } from 'react';

export default function Search() {
  const [movie, setMovie] = useState();

  const getQuery = async (query) => {
    const URL = `http://localhost:3000/api/search/?query=${query}&source=search`;
    const res = await fetch(URL);
    const { results } = await res.json();
    setMovie(results);
  };

  return (
    <div>
      <Head>
        <title>Search for Movies</title>
        <meta name='description' content='Search for your favourite movies.' />
      </Head>
      <SearchBar getQuery={getQuery} />
      {/* {movie.length > 0 && <MovieGrid title='Search' movies={movie} />} */}
    </div>
  );
}
