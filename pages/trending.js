export default function TrendingPage({ data }) {
  console.log(data);
  return <div>Trending Movies</div>;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/trending');
  const data = await res.json();

  return {
    props: {
      data: data
    },
    revalidate: 600
  };
}
