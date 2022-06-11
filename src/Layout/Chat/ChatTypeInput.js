import "./Chat.css";

import { Input, InputGroup, InputGroupText } from "reactstrap";

import { IoSendSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const ChatTypeInput = () => {
  const activeChat = useSelector((state) => state.activeChat);

  return (
    <>
      {activeChat.id && (
        <div className="type-input">
          <InputGroup>
            <Input placeholder="Write message ..." />
            <InputGroupText onClick={() => console.log("send")}>
              <IoSendSharp size={28} className='cursor-pointer' />
            </InputGroupText>
          </InputGroup>
        </div>
      )}
    </>
  );
};
export default ChatTypeInput;
