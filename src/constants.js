import { getTomorrowDate } from "./utils";

export const GET_MOVIES_MATCHING_SEARCH_QUERY_ENDPOINT =
  "https://api.themoviedb.org/3/search/movie";

export const GET_UPCOMING_MOVIES_ENDPOINT =
  "https://api.themoviedb.org/3/discover/movie";

export const GET_MOVIES_MATCHING_SEARCH_QUERY_PARAMS = {
  include_adult: false,
  language: "en-US",
};

export const GET_UPCOMING_MOVIES_QUERY_PARAMS = {
  ...GET_MOVIES_MATCHING_SEARCH_QUERY_PARAMS,
  include_video: false,
  "primary_release_date.gte": getTomorrowDate(),
  sort_by: "primary_release_date.asc",
};

export const REQUEST_HEADERS = {
  Authorization: `Bearer ${process.env.REACT_APP_API_READ_ACCESS_TOKEN}`,
  accept: "application/json",
};
