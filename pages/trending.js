import MovieGrid from '../components/MovieGrid/Movie_Grid';
import Head from 'next/head';

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
  const res = await fetch('http://localhost:3000/api/trending');
  const data = await res.json();

  return {
    props: {
      movies: data
    },
    revalidate: 600
  };
}
