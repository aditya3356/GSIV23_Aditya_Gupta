import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="font-roboto">
      <Navbar />
      <MoviesList />
    </div>
  );
};

export default Home;
