import Message from "./Message";

const MessageList = () => {
  return (
    <div className="bg-gray-200 p-4 h-[calc(100%-144px)] overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default MessageList;
