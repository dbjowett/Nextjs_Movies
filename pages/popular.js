import MovieGrid from '../components/MovieGrid/Movie_Grid';
import Head from 'next/head';

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
  const res = await fetch('http://localhost:3000/api/popular');
  const data = await res.json();

  return {
    props: {
      movies: data
    },
    revalidate: 600
  };
}
