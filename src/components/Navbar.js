import HomeIcon from "@mui/icons-material/Home";
import Searchbar from "./Searchbar";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const { id } = useParams();

  return (
    <div className="p-3 h-16 flex drop-shadow-[0_2px_2px_rgba(155,155,155,0.25)] box-border border-b-2 border-solid border-[#d8d8d8]">
      <div className="flex w-full justify-between items-center">
        {id ? (
          <div className="font-medium text-[#4a4a4a]">Movie Details</div>
        ) : (
          <Searchbar />
        )}
        <Link to={`/`}>
          <HomeIcon sx={{ color: "#4a4a4a" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
