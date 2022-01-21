import MovieGrid from '../components/MovieGrid/Movie_Grid';
import Head from 'next/head';
import imdb from '../utils/tmdb';

export default function PopularPage({ movies }) {
  return (
    <div>
      <Head>
        <title>Popular Movies</title>
        <meta name='description' content='Movies that are currently popular.' />
      </Head>
      <MovieGrid title='Popular' movies={movies} />
    </div>
  );
}

export async function getStaticProps() {
  const { data: { results } = {} } = await imdb(`discover/movie`);
  return {
    props: {
      movies: results
    },
    revalidate: 600
  };
}
