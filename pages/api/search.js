import imdb from '../../utils/tmdb';

export default async (req, res) => {
  const { query, source } = req.query;
  let URL = '';
  if (source === 'search') {
    URL = `search/movie?query=${query}`;
  } else {
    URL = `movie/${query}`;
  }
  const { data: { results } = {} } = await imdb(URL);
  res.status(200).send(JSON.stringify(results));
};
