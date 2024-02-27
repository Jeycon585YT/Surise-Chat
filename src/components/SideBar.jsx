import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ChatList from "./chat/ChatList";

const SideBar = () => {
  return (
    <div className="basis-1/3 bg-amber-950 rounded-lg rounded-r-none">
      <Navbar />
      <Search />
      <ChatList />
    </div>
  );
};

export default SideBar;
