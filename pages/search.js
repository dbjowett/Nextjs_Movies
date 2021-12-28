import MovieGrid from '../components/MovieGrid/Movie_Grid';
import SearchBar from '../components/SearchBar/SearchBar';

export default function Search() {
  let movies = [];
  const getQuery = async (query) => {
    const URL = `http://localhost:3000/api/search/?query=${query}&source=search`;
    const res = await fetch(URL);
    const { results } = await res.json();

    movies.push(results);
  };

  return (
    <div>
      <SearchBar getQuery={getQuery} />
      <MovieGrid title='Search' movies={movies} />
    </div>
  );
}
