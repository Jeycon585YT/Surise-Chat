import { FaUserPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div className="basis-2/3 ">
      {/* Chat info */}
      <div className="h-20 bg-amber-950 text-white flex justify-between items-center p-2">
        <span className="font-medium text-slate-100 text-xl">Zurafa</span>
        {/* chat Icons */}
        <div className="flex text-4xl space-x-4">
          <BsCameraVideoFill className="cursor-pointer hover:text-sky-200 duration-150" />
          <FaUserPlus className="cursor-pointer hover:text-sky-200 duration-150" />
          <BsThreeDots className="cursor-pointer hover:text-sky-200 duration-150" />
        </div>
      </div>
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default Chat;
