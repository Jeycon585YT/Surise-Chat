import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Chats from "../components/Chats";

const SideBar = () => {
  return (
    <div className="basis-1/3 bg-amber-950 rounded-lg rounded-r-none">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
