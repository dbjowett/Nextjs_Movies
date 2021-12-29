import imdb from '../../utils/tmdb';

export default async (req, res) => {
  const date = new Date();
  const todayDate = new Date().toJSON().slice(0, 10);
  const nextweek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7).toJSON().slice(0, 10);

  const URL = `discover/movie?primary_release_date.gte=${todayDate}&primary_release_date.lte=${nextweek}&region=US`;
  const { data: { results } = {} } = await imdb(URL);
  res.status(200).send(JSON.stringify(results));
};
