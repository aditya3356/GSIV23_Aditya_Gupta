import { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import {
  GET_UPCOMING_MOVIES_ENDPOINT,
  GET_UPCOMING_MOVIES_QUERY_PARAMS,
  REQUEST_HEADERS,
} from "../constants";

const MoviesList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  const observerTarget = useRef(null);

  const fetchMovies = useCallback(async () => {
    const res = await axios.get(GET_UPCOMING_MOVIES_ENDPOINT, {
      params: {
        ...GET_UPCOMING_MOVIES_QUERY_PARAMS,
        page: pageNumber,
      },
      headers: REQUEST_HEADERS,
    });
    setMovies((prevMovies) => [
      ...prevMovies,
      ...res.data.results.filter(
        (movie) =>
          movie.poster_path &&
          movie.title &&
          movie.popularity &&
          movie.overview &&
          movie.overview !== ""
      ),
    ]);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }, [pageNumber]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMovies();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, fetchMovies]);

  return (
    <div className="p-3 grid grid-cols-5 auto-rows-auto gap-x-2 gap-y-2">
      {movies.map((movie) => (
        <MovieCard
          posterUrl={movie.poster_path}
          title={movie.title}
          rating={movie.popularity}
          description={movie.overview}
        />
      ))}
      <div ref={observerTarget}></div>
    </div>
  );
};

export default MoviesList;
