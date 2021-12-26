export default async function handler(req, res) {
  const URL = `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.MOVIEDB_KEY}&certification_country=US&sort_by=vote_average.desc`;
  const response = await fetch(URL);
  const { results } = await response.json();
  const jsonResults = JSON.stringify(results);

  res.status(200).json(jsonResults, { message: 'Success' });
}
