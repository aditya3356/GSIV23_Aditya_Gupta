import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ setSearchQuery }) => {
  return (
    <div className="pl-3 w-[75rem] h-10 flex rounded-lg bg-[#d8d8d8] items-center">
      <SearchIcon sx={{ color: "#9b9b9b" }} />
      <input
        type="text"
        className="w-full h-full ml-3.5 text-base rounded-lg outline-none bg-[#d8d8d8]"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
