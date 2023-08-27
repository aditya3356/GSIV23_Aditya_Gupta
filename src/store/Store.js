import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export class Store {
  movies = [];
  pageNumber = 1;
  searchQuery = "";
  selectedMovieCastAndCrewInfo = {};
  selectedMovieInfo = {};
  totalPages = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setMovies = (movies) => {
    this.movies = [...movies];
  };

  setPageNumber = (pageNumber) => {
    this.pageNumber = pageNumber;
  };

  setSearchQuery = (searchQuery) => {
    this.searchQuery = searchQuery;
  };

  setSelectedMovieCastAndCrewInfo = (selectedMovieCastAndCrewInfo) => {
    this.selectedMovieCastAndCrewInfo = selectedMovieCastAndCrewInfo;
  };

  setSelectedMovieInfo = (selectedMovieInfo) => {
    this.selectedMovieInfo = selectedMovieInfo;
  };

  setTotalPages = (totalPages) => {
    this.totalPages = totalPages;
  };
}

export default createContext(Store);
