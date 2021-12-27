import Image from 'next/image';
import classes from '../MovieDetail/movie_detail.module.css';

export default function MovieDetail({ movie }) {
  console.log(movie);
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          width={320}
          height={180}
          layout='responsive'
          alt={movie.original_title}
        />
      </div>
      <div className={classes.info}>
        <h1>{movie.original_title}</h1>
        <div>{movie.overview}</div>
        <div>Runtime: {movie.runtime}</div>
        <ul>
          Genres
          {movie.genres.map((genre) => (
            <li>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
