import { useSelector } from "react-redux";
import { InputGroup, Input, InputGroupText } from "reactstrap";
import "./Chat.css";
import { IoSendSharp } from "react-icons/io5";
const ChatTypeInput = () => {
  const activeChat = useSelector((state) => state.activeChat);

  return (
    <>
      {activeChat.id && (
        <div className="type-input">
          <InputGroup>
            <Input placeholder="Write message ..." />
            <InputGroupText onClick={() => console.log("send")}>
              <IoSendSharp size={20} />
            </InputGroupText>
          </InputGroup>
        </div>
      )}
    </>
  );
};
export default ChatTypeInput;
