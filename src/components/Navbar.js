import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ setSearchQuery }) => {
  return (
    <div className="p-3 h-16 drop-shadow-[0_2px_2px_rgba(155,155,155,0.25)] box-border border-b-2 border-solid border-[#d8d8d8]">
      <div className="flex justify-between items-center">
        <div className="pl-3 w-[75rem] h-10 flex rounded-lg bg-[#d8d8d8] items-center">
          <SearchIcon />
          <input
            type="text"
            className="w-full h-full ml-3.5 text-base rounded-lg outline-none bg-[#d8d8d8]"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <HomeIcon />
      </div>
    </div>
  );
};

export default Navbar;
