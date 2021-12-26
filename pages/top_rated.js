import MovieGrid from '../components/MovieGrid/Movie_Grid';

export default function TopRatedMovies({ movies }) {
  return <MovieGrid title='Top Rated' movies={movies} />;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/top_rated');
  const data = await res.json();

  return {
    props: {
      movies: data
    },
    revalidate: 600
  };
}
