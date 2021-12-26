export default async function handler(req, res) {
  const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIEDB_KEY}&language=en-US&page=1`;
  const response = await fetch(URL);
  const { results } = await response.json();
  const jsonResults = JSON.stringify(results);

  res.status(200).json(jsonResults, { message: 'Success' });
}
