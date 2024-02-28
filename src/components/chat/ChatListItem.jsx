const ChatListItem = ({ user }) => {
  return (
    <div className="flex p-2 items-center gap-2 text-white hover:bg-black/40 cursor-pointer">
      <img
        className="w-12 h-12 rounded-full object-cover object-center"
        src="https://sm.ign.com/ign_tr/cover/h/harry-pott/harry-potter-the-series_p1mc.jpg"
        alt=""
      />
      <div>
        <span className="font-bold text-lg ">
          {user?.displayName || "Potter"}
        </span>
        <p className="text-slate-100">Hello</p>
      </div>
    </div>
  );
};

export default ChatListItem;
