import MovieDetails from "../components/MovieDetails";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <div className="font-roboto">
      <Navbar title="Movie Details" />
      <MovieDetails id={id} />
    </div>
  );
};

export default Details;
