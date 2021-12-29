import imdb from '../../utils/tmdb';

export default async (req, res) => {
  const { data: { results } = {} } = await imdb(`discover/movie`);
  res.status(200).send(JSON.stringify(results));
};
