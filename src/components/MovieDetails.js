import { useCallback, useContext, useEffect } from "react";
import {
  GET_MOVIE_DETAILS_ENDPOINT,
  GET_MOVIE_POSTER_IMAGE_ENDPOINT,
  REQUEST_HEADERS,
} from "../constants";
import axios from "axios";
import { toHoursAndMinutes } from "../utils";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import StoreContext from "../store/Store";

const MovieDetails = () => {
  const { id } = useParams();
  const {
    selectedMovieCastAndCrewInfo,
    selectedMovieInfo,
    setSelectedMovieCastAndCrewInfo,
    setSelectedMovieInfo,
  } = useContext(StoreContext);

  const getSelectedMovieInfo = useCallback(async () => {
    try {
      const res = await axios.get(`${GET_MOVIE_DETAILS_ENDPOINT}/${id}`, {
        headers: REQUEST_HEADERS,
      });
      setSelectedMovieInfo(res.data);
    } catch (e) {
      console.error(
        "An error occurred while fetching selected movie details!",
        e
      );
    }
  }, [id, setSelectedMovieInfo]);

  const getSelectedMovieCastAndCrewInfo = useCallback(async () => {
    try {
      const res = await axios.get(
        `${GET_MOVIE_DETAILS_ENDPOINT}/${id}/credits`,
        {
          headers: REQUEST_HEADERS,
        }
      );
      setSelectedMovieCastAndCrewInfo({
        cast: res.data.cast,
        crew: res.data.crew,
      });
    } catch (e) {
      console.error(
        "An error occurred while fetching selected movie credits!",
        e
      );
    }
  }, [id, setSelectedMovieCastAndCrewInfo]);

  useEffect(() => {
    setSelectedMovieInfo({});
    setSelectedMovieCastAndCrewInfo({});
    getSelectedMovieInfo();
    getSelectedMovieCastAndCrewInfo();
  }, []);

  return (
    <div className="p-3 flex">
      <img
        className="w-44 h-60 border-[1px] border-solid border-[#979797]"
        src={
          selectedMovieInfo.poster_path
            ? `${GET_MOVIE_POSTER_IMAGE_ENDPOINT}${selectedMovieInfo.poster_path}`
            : null
        }
      />
      <div className="pl-2">
        <div className="mb-2 flex text-2xl font-medium items-center">
          <div className="text-[#4a4a4a] mr-2">{selectedMovieInfo.title}</div>
          <div className="text-[#9b9b9b]">
            (
            {selectedMovieInfo.vote_average
              ? selectedMovieInfo.vote_average
              : selectedMovieInfo.popularity}
            )
          </div>
        </div>
        <div className="mb-1 text-xl text-[#4a4a4a]">
          {selectedMovieInfo.release_date?.substring(0, 4)} |{" "}
          {toHoursAndMinutes(selectedMovieInfo.runtime)} |{" "}
          {
            selectedMovieCastAndCrewInfo.crew?.find(
              (person) => person.job === "Director"
            )?.name
          }
        </div>
        <div className="mb-2 text-xl text-[#4a4a4a]">
          Cast:{" "}
          {selectedMovieCastAndCrewInfo.cast
            ?.map((person) => person.name)
            .join(", ")}
        </div>
        <div className="text-xl text-[#4a4a4a]">
          Description: {selectedMovieInfo.overview}
        </div>
      </div>
    </div>
  );
};

export default observer(MovieDetails);
