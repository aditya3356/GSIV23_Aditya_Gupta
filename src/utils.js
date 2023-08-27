import {
  GET_MOVIES_MATCHING_SEARCH_QUERY_ENDPOINT,
  GET_MOVIES_MATCHING_SEARCH_QUERY_PARAMS,
  GET_UPCOMING_MOVIES_ENDPOINT,
  GET_UPCOMING_MOVIES_QUERY_PARAMS,
} from "./constants";

export const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toLocaleDateString("en-CA");
};

export const getMoviesRequestData = (searchQuery) => {
  if (searchQuery !== "") {
    return {
      url: GET_MOVIES_MATCHING_SEARCH_QUERY_ENDPOINT,
      queryParams: {
        ...GET_MOVIES_MATCHING_SEARCH_QUERY_PARAMS,
        query: searchQuery,
      },
    };
  }

  return {
    url: GET_UPCOMING_MOVIES_ENDPOINT,
    queryParams: GET_UPCOMING_MOVIES_QUERY_PARAMS,
  };
};

export const toHoursAndMinutes = (totalMinutes) => {
  if (!totalMinutes) {
    return;
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`;
};

const padToTwoDigits = (num) => {
  return num.toString().padStart(2, "0");
};
