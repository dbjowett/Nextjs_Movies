import Image from 'next/image';
import DuneImage from '../../public/images/dune.jpg';
import classes from './movie_card.module.css';

export default function MovieCard({ movie }) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.original_title}
          width={300}
          height={200}
          layout='responsive'
        />
      </div>
      <div className={classes.info}>
        <h1>{movie.original_title}</h1>
        <div>{movie.overview}</div>
        <div>{movie.vote_average}</div>
        {/* <button>More..</button> */}
      </div>
    </div>
  );
}
