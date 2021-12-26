import MovieGrid from '../components/MovieGrid/Movie_Grid';

export default function PopularPage({ movies }) {
  return (
    <div>
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
