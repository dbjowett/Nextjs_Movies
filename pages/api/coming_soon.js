export default async function handler(req, res) {
  const date = new Date();
  const todayDate = new Date().toJSON().slice(0, 10);
  const nextweek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7).toJSON().slice(0, 10);

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_KEY}&language=en-US&primary_release_date.gte=${todayDate}&primary_release_date.lte=${nextweek}&region=US`;
  const response = await fetch(URL);
  const { results } = await response.json();
  const jsonResults = JSON.stringify(results);

  res.status(200).json(jsonResults, { message: 'Success' });
}
