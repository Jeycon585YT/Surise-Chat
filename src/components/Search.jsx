import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    // serach
    <div className="border-b border-slate-400">
      {/*  search form */}
      <div className="relative">
        <input
          type="text"
          className="px-10 py-4 w-full bg-transparent border-none text-white outline-none placeholder:text-slate-100/40"
          placeholder="Find a user"
        />
        <FaSearch className="absolute top-4 left-2 text-slate-100/40 text-xl" />
      </div>
    </div>
  );
};

export default Search;
