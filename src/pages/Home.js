import { useState } from "react";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <MoviesList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
