import SideBar from "../components/SideBar";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-sky-300 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-sm:w-full w-8/12 h-4/5 flex">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
