export default function TopRatedMovies({ data }) {
  console.log(data);
  return <div>Top Rated Movies</div>;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/top_rated');
  const data = await res.json();

  return {
    props: {
      data: data
    },
    revalidate: 600
  };
}
