import MovieGrid from '../components/MovieGrid/Movie_Grid';
import Head from 'next/head';
import { server } from '../config';

export default function ComingSoon({ movies }) {
  return (
    <div>
      <Head>
        <title>Upcoming Movies</title>
        <meta name='description' content='Movies that are being released soon.' />
      </Head>
      <MovieGrid title='Coming Soon' movies={movies} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/coming_soon`);
  const data = await res.json();

  return {
    props: {
      movies: data
    },
    revalidate: 600
  };
}
