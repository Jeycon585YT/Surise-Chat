import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <div className="relative  overflow-auto h-[calc(100%-136px)]">
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </div>
  );
};

export default ChatList;
