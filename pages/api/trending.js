export default async function handler(req, res) {
  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.MOVIEDB_KEY}`;

  const response = await fetch(URL);
  const { results } = await response.json();
  const jsonResults = JSON.stringify(results);

  res.status(200).json(jsonResults, { message: 'Success' });
}
