import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import ChatTypeInput from "./ChatTypeInput";

const ChatContainer = () => {
  return (
    <div className="chat-screen-container">
      <ChatHeader />
      {/* <ChatList /> */}
      <ChatTypeInput />
    </div>
  );
};
export default ChatContainer;
