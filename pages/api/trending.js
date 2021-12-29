import imdb from '../../utils/tmdb';

export default async (req, res) => {
  const { data: { results } = {} } = await imdb(`trending/movie/day`);
  res.status(200).send(JSON.stringify(results));
};
