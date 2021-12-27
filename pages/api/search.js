export default async function handler(req, res) {
  const { query } = req.query;
  const URL = `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.MOVIEDB_KEY}&language=en-US`;

  const response = await fetch(URL);
  const data = await response.json();
  const jsonResults = JSON.stringify(data);

  res.status(200).json(jsonResults, { message: 'Success' });
}
