import { GET_MOVIE_POSTER_IMAGE_ENDPOINT } from "../constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterUrl, title, rating, description, id }) => {
  return (
    <Link
      className="drop-shadow-[0_2px_2px_rgba(155,155,155,0.25)] border-2 border-solid border-[#d8d8d8] rounded-lg"
      to={`/movies/${id}`}
    >
      <div>
        <img
          className="rounded-t-lg h-96 w-full"
          src={`${GET_MOVIE_POSTER_IMAGE_ENDPOINT}${posterUrl}`}
        />
      </div>
      <div className="p-1 text-xs">
        <div className="flex justify-between mb-2">
          <div className="font-medium text-[#4a4a4a]">{title}</div>
          <div className="text-[#9b9b9b]">({rating})</div>
        </div>
        <div className="text-[#4a4a4a] line-clamp-2">{description}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
