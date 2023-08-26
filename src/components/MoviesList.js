import { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { REQUEST_HEADERS } from "../constants";
import { getMoviesRequestData } from "../utils";

const MoviesList = ({ searchQuery }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const observerTarget = useRef(null);

  const getMovies = useCallback(async () => {
    if (pageNumber <= totalPages) {
      const { url, queryParams } = getMoviesRequestData(searchQuery);
      const res = await axios.get(url, {
        params: {
          ...queryParams,
          page: pageNumber,
        },
        headers: REQUEST_HEADERS,
      });
      setTotalPages(res.data.total_pages);
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
    }
  }, [pageNumber, totalPages, searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getMovies();
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
  }, [observerTarget, getMovies]);

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
