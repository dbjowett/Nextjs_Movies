// import MovieGrid from '../components/MovieGrid/Movie_Grid';
import SearchBar from '../components/SearchBar/SearchBar';

export default function TrendingPage() {
  const getQuery = async (query) => {
    console.log('This is the query..... into sound');
    console.log(query);
    // const results = await fetch('localhost:3000/api/search', { body: query });
  };

  return (
    <div>
      <SearchBar getQuery={getQuery} />
    </div>
  );
}
