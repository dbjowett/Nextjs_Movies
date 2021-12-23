import Image from 'next/image';
import DuneImage from '../../public/images/dune.jpg';
import classes from './movie_card.module.css';

export default function MovieCard() {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src={DuneImage} width={200} height={300} layout='responsive' />
      </div>
      <div>
        <h1>Dune</h1>
        <div>
          A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born
          into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future
          of his family and his people.
        </div>
      </div>
    </div>
  );
}
