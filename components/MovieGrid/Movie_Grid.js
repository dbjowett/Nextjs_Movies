// import MovieCard from '../MovieCard/Movie_Card';
import MovieCard2 from '../../components/MovieCard/Movie_Card';
import classes from '../MovieGrid/movie_grid.module.css';

export default function MovieGrid({ title, movies }) {
  return (
    <div>
      <div className={classes.heading}>{title}</div>
      <ul className={classes.grid}>
        {movies.map((movie) => (
          <MovieCard2 key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
