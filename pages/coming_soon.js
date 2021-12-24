export default function ComingSoon({ data }) {
  console.log(data);
  return <div>Coming Soon Movies</div>;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/coming_soon');
  const data = await res.json();

  return {
    props: {
      data: data
    },
    revalidate: 600
  };
}
