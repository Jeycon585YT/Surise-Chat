import SideBar from "../components/SideBar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="bg-sky-200 h-screen flex items-center justify-center">
      <div className="border border-white rounded-lg w-8/12 h-4/5 flex">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
