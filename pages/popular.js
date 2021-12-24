import MovieCard from '../components/MovieCard/Movie_card';

export default function PopularPage({ data }) {
  console.log(data);
  return (
    <div>
      <div style={{ color: 'white', padding: '10px 0px 40px 100px', fontSize: '3rem' }}>Popular</div>
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
    },
    revalidate: 600
  };
}
