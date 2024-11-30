import { useState } from "react";
import Button from "../shared/Button";
import { useSelector } from "react-redux";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { updateProfileImageToFirebase } from "../../Firebase/actions";
import EmojiPicker from "emoji-picker-react";

const ChatInput = ({ scrollRef }) => {
  const [isPending, setIsPending] = useState(false);
  const [input, setInput] = useState("");
  const [imgFile, setImageFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { currentChatId } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    setIsPending(true);
    event.preventDefault();
    if (!input && !imgFile) return;
    setInput("");

    try {
      let photoURL = imgFile
        ? await updateProfileImageToFirebase(imgFile, user.uid)
        : undefined;

      await updateDoc(doc(db, "chatsRoms", currentChatId), {
        chatList: arrayUnion({
          message: input,
          ownerId: user.uid,
          time: Date.now(),
          photoURL: photoURL || "",
        }),
      });

      setImageFile(null);
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
      setIsPending(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji); // Agrega el emoji al input
  };

  return (
    <div className="bg-slate-50 h-16 px-3 flex items-center justify-center">
      <form className="flex-1 h-full relative" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Escribe un mensaje..."
          className="w-full h-full outline-none bg-slate-50 text-black"
        />
      </form>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowEmojiPicker((prev) => !prev)} // Alternar el selector
            className="bg-gradient-to-r from-purple-900 via-pink-700 to-orange-600 text-white hover:from-purple-700 hover:to-orange-500 text-sm font-medium px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
          >
            <span style={{ fontSize: "1.1rem" }}>😊</span>
          </button>
          {showEmojiPicker && (
          <div
            className="absolute bottom-12 z-10"
            style={{ left: "-230px" }} // Mueve el EmojiPicker a la izquierda
          >
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
          )}
        </div>

  <Button
    onClick={handleSubmit}
    className="bg-gradient-to-r from-purple-900 via-pink-700 to-orange-600 text-white hover:from-purple-700 hover:to-orange-500 text-sm font-medium px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out"
    text="Enviar"
  />
</div>
    </div>
  );
};

export default ChatInput;


