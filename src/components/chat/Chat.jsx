import { FaUserPlus } from "react-icons/fa6";
import { BsThreeDots, BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRef } from "react";
import photo from "../../assets/images/defaultPhoto.jpg";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const ChatHeader = ({ photoURL, displayName }) => (
  <div className="h-20 max-sm:h-12 bg-amber-950 text-white flex justify-between items-center p-4 sm:p-2">
    <div className="flex items-center space-x-4">
      <img
        src={photoURL || photo}
        alt=""
        className="rounded-full h-12 w-12 max-sm:h-8 max-sm:w-8 object-cover object-center"
      />
      <span className="font-medium text-slate-100 text-lg sm:text-xl">
        {displayName}
      </span>
    </div>

    <div className="flex text-3xl space-x-4">
      <BsCameraVideoFill className="cursor-pointer hover:text-sky-200 duration-150 max-sm:h-8 max-sm:w-8" />
      <FaUserPlus className="cursor-pointer hover:text-sky-200 duration-150 max-sm:h-8 max-sm:w-8" />
      <BsThreeDots className="cursor-pointer hover:text-sky-200 duration-150 max-sm:h-8 max-sm:w-8" />
    </div>
  </div>
);

const Chat = () => {
  const scrollRef = useRef(null);
  const { currentChatUser, currentChatId } = useSelector((state) => state.chat);

  return (
    <div className="w-full sm:basis-2/3 bg-gray-200">
      {currentChatId ? (
        <>
          <ChatHeader
            photoURL={currentChatUser?.photoURL}
            displayName={currentChatUser?.displayName}
          />
          <MessageList scrollRef={scrollRef} />
          <ChatInput scrollRef={scrollRef} />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-full text-2xl sm:text-xl p-8">
          <AiOutlineMessage size={220} className="text-gray-500 mb-3" />
          <p className="text-gray-600">
            Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
