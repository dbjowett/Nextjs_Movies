import MovieCard from '../components/MovieCard/Movie_card';

export default function PopularPage({ data }) {
  console.log(data);
  return (
    <div>
      <div style={{ color: 'white', padding: '50px 0px 50px 100px', fontSize: '3rem' }}>Popular</div>
      <MovieCard />;
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/popular');
  const data = await res.json();

  return {
    props: {
      data: data
    }
  };
}
