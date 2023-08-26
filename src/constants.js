import { getTomorrowDate } from "./utils";

export const GET_UPCOMING_MOVIES_ENDPOINT =
  "https://api.themoviedb.org/3/discover/movie";

export const GET_UPCOMING_MOVIES_QUERY_PARAMS = {
  include_adult: false,
  include_video: false,
  language: "en-US",
  page: 1,
  "primary_release_date.gte": getTomorrowDate(),
  sort_by: "primary_release_date.asc",
};

export const REQUEST_HEADERS = {
  Authorization: `Bearer ${process.env.REACT_APP_API_READ_ACCESS_TOKEN}`,
  accept: "application/json",
};
