import MovieCard from '../MovieCard/Movie_Card';
import classes from '../MovieGrid/movie_grid.module.css';

export default function MovieGrid({ movies }) {
  return (
    <ul className={classes.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
