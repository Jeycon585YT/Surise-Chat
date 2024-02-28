import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import ChatListItem from "./chat/ChatListItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { SearchUserItem } from "./SearchUserItem";

const Search = () => {
  const [search, setSearch] = useState("");
  const { users } = useSelector((state) => state.users);

  const renderedUsers = users.filter((user) => {
    if (search.length < 3) return;
    if (
      user.displayName
        .toLowerCase()
        .includes(
          search.toLowerCase() ||
            user.email.toLowerCase().includes(search.toLowerCase())
        )
    ) {
      return user;
    }
  });

  console.log(renderedUsers);

  return (
    // serach
    <div className="relative">
      {/*  search form */}
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="px-10 py-4 w-full bg-transparent border-none text-white outline-none placeholder:text-slate-100/40"
          placeholder="Find a user"
        />
        <FaSearch className="absolute top-4 left-2 text-slate-100/40 text-xl" />
      </div>
      <div className="absolute z-10 bg-amber-900 w-full  border-b border-slate-400 ">
        {renderedUsers.map((user) => (
          <SearchUserItem key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Search;
