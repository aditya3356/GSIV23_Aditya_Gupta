import { useCallback, useEffect, useState } from "react";
import {
  GET_MOVIE_DETAILS_ENDPOINT,
  GET_MOVIE_POSTER_IMAGE_ENDPOINT,
  REQUEST_HEADERS,
} from "../constants";
import axios from "axios";

const MovieDetails = ({ id }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [castAndCrewInfo, setCastAndCrewInfo] = useState({});

  const getMovieInfo = useCallback(async () => {
    const res = await axios.get(`${GET_MOVIE_DETAILS_ENDPOINT}/${id}`, {
      headers: REQUEST_HEADERS,
    });
    setMovieInfo(res.data);
  });

  const getCastAndCrewInfo = useCallback(async () => {
    const res = await axios.get(`${GET_MOVIE_DETAILS_ENDPOINT}/${id}/credits`, {
      headers: REQUEST_HEADERS,
    });
    setCastAndCrewInfo({ cast: res.data.cast, crew: res.data.crew });
  });

  useEffect(() => {
    getMovieInfo();
    getCastAndCrewInfo();
  });

  return (
    <div className="p-3 flex">
      <img
        className="w-44 h-60 border-[1px] border-solid border-[#979797]"
        src={`${GET_MOVIE_POSTER_IMAGE_ENDPOINT}${movieInfo.poster_path}`}
      />
      <div className="pl-2">
        <div className="mb-2 flex text-2xl font-medium items-center">
          <div className="text-[#4a4a4a] mr-2">{movieInfo.title}</div>
          <div className="text-[#9b9b9b]">
            (
            {movieInfo.vote_average
              ? movieInfo.vote_average
              : movieInfo.popularity}
            )
          </div>
        </div>
        <div className="mb-1 text-xl text-[#4a4a4a]">
          {movieInfo.release_date?.substring(0, 4)} | {movieInfo.runtime} |{" "}
          {
            castAndCrewInfo.crew?.find((person) => person.job === "Director")
              ?.name
          }
        </div>
        <div className="mb-2 text-xl text-[#4a4a4a]">
          Cast: {castAndCrewInfo.cast?.map((person) => person.name).join(", ")}
        </div>
        <div className="text-xl text-[#4a4a4a]">
          Description: {movieInfo.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
