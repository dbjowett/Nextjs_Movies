import MovieGrid from '../components/MovieGrid/Movie_Grid';

export default function ComingSoon({ movies }) {
  return <MovieGrid title='Coming Soon' movies={movies} />;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/coming_soon');
  const data = await res.json();

  return {
    props: {
      movies: data
    },
    revalidate: 600
  };
}
