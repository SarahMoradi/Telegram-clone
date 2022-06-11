import { useSelector } from "react-redux";
import "./Chat.css";
const ChatList = () => {
  const activeChat = useSelector((state) => state.activeChat);
  return (
    <div className="display-chat-lists">
      {activeChat.id && <div className="chat-list-contaier ">Hello</div>}
    </div>
  );
};
export default ChatList;
