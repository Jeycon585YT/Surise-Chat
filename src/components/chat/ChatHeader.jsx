import { BsThreeDots } from "react-icons/bs";
import photo from "../../assets/images/defaultPhoto.jpg";

export const ChatHeader = ({ photoURL, displayName, onCloseChat }) => {
  return (
    <div className="h-20 max-sm:h-12 bg-gradient-to-r from-purple-900 via-pink-700 to-orange-600 text-white flex justify-between items-center p-4 sm:p-2 shadow-lg rounded-t-md">
      <div className="flex items-center space-x-4">
        <img
          src={photoURL || photo}
          alt=""
          className="rounded-full h-12 w-12 max-sm:h-8 max-sm:w-8 object-cover object-center border-2 border-pink-400 shadow-md"
        />
        <span className="font-medium text-slate-100 text-lg sm:text-xl">
          {displayName}
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;


