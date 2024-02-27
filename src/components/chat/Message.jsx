const Message = () => {
  const owner = false;

  return (
    <div className={`flex gap-5 mb-5 ${owner ? "flex-row-reverse" : ""}`}>
      <div className="flex flex-shrink-0 flex-col text-slate-600 text-sm font-light">
        <img
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5225004a8408fe43/61e79d82e98ca530e9450f36/20220119_Ronaldinho.jpg?auto=webp&format=pjpg&width=3840&quality=60"
          alt=""
          className="h-12 w-12 rounded-full object-cover object-center"
        />
        <span>just now</span>
      </div>
      <div
        className={`flex flex-col ${
          owner ? "items-end" : "items-start"
        } gap-2 `}
      >
        <p
          className={`px-5 py-2 max-w-80 rounded-3xl ${
            owner
              ? "rounded-br-none bg-sky-400 text-white"
              : "rounded-bl-none bg-white"
          }`}
        >
          sdkfjsadlf jasfsjaldfjlsadfjsadlf jlaskdj s asfd asdf asf asdf asdf sd
          asf asdf asdf asdf asdf asd
        </p>
        <img
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5225004a8408fe43/61e79d82e98ca530e9450f36/20220119_Ronaldinho.jpg?auto=webp&format=pjpg&width=3840&quality=60"
          alt=""
          className="w-1/3"
        />
      </div>
    </div>
  );
};

export default Message;
