import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';

import MovieDetail from '../components/MovieDetail/Movie_Detail';

export default function Movie() {
  const router = useRouter();
  const { slug } = router.query;
  const _id = slug[2];

  const fetcher = (url) => fetch(url).then((r) => r.json());

  const URL = `http://localhost:3000/api/search/?query=${_id}`;
  const { data, error } = useSWR(URL, fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error!</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Head>
        <title>{data.original_title}</title>
      </Head>
      <MovieDetail movie={data} />
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   console.log(params);
//   const movie = [];
//   return {
//     props: {
//       movie: movie
//     }
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }, { params: { slug: '3' } }],
//     fallback: false
//   };
// }
