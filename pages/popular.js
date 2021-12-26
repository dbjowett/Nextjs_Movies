// import MovieCard from '../components/MovieCard/Movie_Card';
import MovieGrid from '../components/MovieGrid/Movie_Grid';

export default function PopularPage({ movies }) {
  console.log(movies);
  return (
    <div>
      <div style={{ color: 'white', padding: '10px 0px 40px 100px', fontSize: '3rem' }}>Popular</div>
      {/* <MovieCard />; */}
      <MovieGrid movies={movies} />
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
