import MovieGrid from '../components/MovieGrid/Movie_Grid';
import Head from 'next/head';
import imdb from '../utils/tmdb';

export default function Trending({ movies }) {
  return (
    <div>
      <Head>
        <title>Trending Movies</title>
        <meta name='description' content='Movies that are trending in the last week' />
      </Head>
      <MovieGrid title='Trending' movies={movies} />;
    </div>
  );
}

export async function getStaticProps() {
  const { data: { results } = {} } = await imdb(`trending/movie/day`);

  return {
    props: {
      movies: results
    },
    revalidate: 600
  };
}
