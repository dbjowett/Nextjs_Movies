import Image from 'next/image';
import Link from 'next/link';

import classes from './movie_card.module.css';
import { FaStar } from 'react-icons/fa';

export default function MovieCard({ movie }) {
  const string = movie.original_title.split(' ').join('_');
  const linkPath = `/movie/${string}/${movie.id}`;

  return (
    <li className={classes.container}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={220}
              height={320}
              layout='responsive'
              alt={movie.original_title}
            />
          </div>
          <div className={classes.info}>
            <h1>{movie.original_title}</h1>
            <div className={classes.info_text}>{movie.overview.slice(0, 200)}</div>
            <div className={classes.rating}>
              <FaStar />
              {movie.vote_average}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
