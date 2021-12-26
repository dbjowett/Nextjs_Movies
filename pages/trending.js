import MovieGrid from '../components/MovieGrid/Movie_Grid';

export default function TrendingPage({ movies }) {
  return (
    <div>
      <MovieGrid title='Trending' movies={movies} />
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
