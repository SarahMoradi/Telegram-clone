import ChatSection from "./ChatSection";
import SendMessage from "./SendMessage";

const ChatContainer = () => {
  return (
    <div className="chat-screen-container">
      <ChatSection />
      <SendMessage />
    </div>
  );
};
export default ChatContainer;
