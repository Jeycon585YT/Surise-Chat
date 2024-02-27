import Button from "./shared/Button";
import { IoIosAttach } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";

const ChatInput = () => {
  return (
    <div className="bg-slate-50 h-16 px-3 flex items-center justify-center ">
      <input
        type="text"
        placeholder="Type something"
        className="flex-1 h-full outline-none"
      />
      <div className="flex justify-center items-center space-x-4">
        <IoIosAttach className="h-6 w-6 cursor-pointer hover:text-slate-600" />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <LuImagePlus className="h-6 w-6 cursor-pointer hover:text-slate-600" />
        </label>
        <Button className="bg-sky-400" text="Send" />
      </div>
    </div>
  );
};

export default ChatInput;
