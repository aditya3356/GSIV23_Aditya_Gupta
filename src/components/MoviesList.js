import { useCallback, useEffect, useRef, useContext } from "react";
import axios, { CanceledError } from "axios";
import MovieCard from "./MovieCard";
import { REQUEST_HEADERS } from "../constants";
import { getMoviesRequestData } from "../utils";
import { observer } from "mobx-react-lite";
import StoreContext from "../store/Store";

let abortController;
const MoviesList = () => {
  const observerTarget = useRef(null);
  const {
    searchQuery,
    pageNumber,
    setPageNumber,
    totalPages,
    setTotalPages,
    movies,
    setMovies,
  } = useContext(StoreContext);

  useEffect(() => {
    if (abortController) {
      abortController.abort();
    }
    setPageNumber(1);
    setTotalPages(1);
    setMovies([]);
  }, [searchQuery, setPageNumber, setTotalPages, setMovies]);

  const getMovies = useCallback(async () => {
    if (pageNumber <= totalPages) {
      try {
        const { url, queryParams } = getMoviesRequestData(searchQuery);
        abortController = new AbortController();
        const res = await axios.get(url, {
          params: {
            ...queryParams,
            page: pageNumber,
          },
          signal: abortController.signal,
          headers: REQUEST_HEADERS,
        });
        setTotalPages(res.data.total_pages);
        setMovies([
          ...movies,
          ...res.data.results.filter(
            (movie) =>
              movie.poster_path &&
              movie.title &&
              (movie.vote_average || movie.popularity) &&
              movie.overview &&
              movie.overview.trim() !== ""
          ),
        ]);
        setPageNumber(pageNumber + 1);
      } catch (e) {
        if (e.name !== "CanceledError") {
          console.error("An error occurred while fetching movies!", e);
        }
        setPageNumber(1);
        setTotalPages(1);
        setMovies([]);
      }
    }
  }, [
    pageNumber,
    totalPages,
    searchQuery,
    setPageNumber,
    setTotalPages,
    setMovies,
    movies,
  ]);

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
    <div className="p-3 grid grid-cols-5 gap-x-2 gap-y-2">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          posterUrl={movie.poster_path}
          title={movie.title}
          rating={movie.vote_average ? movie.vote_average : movie.popularity}
          description={movie.overview}
          id={movie.id}
        />
      ))}
      <div ref={observerTarget}></div>
    </div>
  );
};

export default observer(MoviesList);
