import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchUserItem from "./SearchUserItem";

const Search = () => {
  const [search, setSearch] = useState("");
  const { users } = useSelector((state) => state.users);

  const filteredUsers = users.filter((user) => {
    const searchLowerCase = search.toLowerCase();
    const displayNameLowerCase = user.displayName.toLowerCase();
    const emailLowerCase = user.email.toLowerCase();

    if (search.length < 3) return false;

    return (
      displayNameLowerCase.includes(searchLowerCase) ||
      emailLowerCase.includes(searchLowerCase)
    );
  });

  return (
    <div className="relative mt-4"> {/* Agregado margen superior */}
      {/* Search Form */}
      <label htmlFor="search" className="relative block">
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="px-12 py-4 w-full bg-gradient-to-r from-purple-800 via-pink-700 to-orange-600 text-white placeholder:text-pink-300 outline-none rounded-t-lg shadow-lg focus:ring-4 focus:ring-pink-500 transition-all duration-300"
          placeholder="Buscar un usuario..."
        />
        <FaSearch className="absolute top-4 left-3 text-pink-300 text-2xl hover:text-pink-100 transition-transform transform hover:scale-110" />
      </label>
      {/* Search Results */}
      <div className="absolute z-10 bg-gradient-to-r from-purple-900 via-pink-800 to-orange-700 w-full border-t border-pink-500 rounded-b-lg shadow-xl">
        {filteredUsers.map((user) => (
          <SearchUserItem
            key={user.uid}
            user={user}
            setSearch={setSearch}
            className="hover:bg-pink-700 transition-colors duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default Search;


