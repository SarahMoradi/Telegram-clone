import "./Chat.css";
import { BsArrowLeftShort } from "react-icons/bs";
import ChatList from "./ChatList";
import { Col } from "reactstrap";
import { MdMoreVert } from "react-icons/md";
import { useSelector } from "react-redux";

const ChatSection = () => {
  const activeChatId = useSelector((state) => state.activeChat);
  
  return (
    <Col sm="12" xl="9" className="chat-bar-container w-100">
      {!activeChatId.id ? (
        <div className="header-chat-bar d-flex justify-content-between px-4"></div>
      ) : (
        <>
          <div className="chat-bar-details-contanier d-flex justify-content-between px-2">
            <div className="chat_bar_user-info_container d-flex">
              <BsArrowLeftShort
                color="white"
                size={29}
                className="back-arrow-function"
              />
              <img
                src="/user.png"
                alt="userImage"
                width={31}
                height={30}
                className="mx-2"
              />
              <div className="mx-1">
                <div className="user_account_name">
                  {`${activeChatId.id?.user?.firstName} ${activeChatId.id?.user?.lastName}`}
                </div>
                <div className="account_last_seen">last seen at 15:52 AM</div>
              </div>
            </div>
            <div className="d-flex align-items-center pb-2">
              <MdMoreVert color="white" size={25} />
            </div>
          </div>
          <div className="display-chat-lists">
            <ChatList />
          </div>
        </>
      )}
    </Col>
  );
};
export default ChatSection;
