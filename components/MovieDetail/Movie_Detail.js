import Image from 'next/image';
import classes from '../MovieDetail/movie_detail.module.css';
import { FaStar } from 'react-icons/fa';

export default function MovieDetail({ movie }) {
  console.log(movie);
  if (!movie) {
    return <div>Loading...</div>;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

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
        <div>{movie.runtime} mins</div>
        <div>
          <FaStar /> {movie.vote_average}
        </div>
        <ul>
          Genres
          {movie.genres.map((genre) => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>
        {movie.budget ? <div>Budget: {formatter.format(movie.budget)}</div> : <div></div>}
      </div>
    </div>
  );
}
