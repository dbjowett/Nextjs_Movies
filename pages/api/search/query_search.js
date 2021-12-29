import imdb from '../../../utils/tmdb';

export default async (req, res) => {
  const { query } = req.query;
  const { data: { results } = { data } } = await imdb(`search/movie?query=${query}`);
  res.status(200).send(JSON.stringify(results));
};
