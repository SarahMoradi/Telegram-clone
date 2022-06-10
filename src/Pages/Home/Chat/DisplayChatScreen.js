import { useDispatch, useSelector } from "react-redux";

import Chats from "./Chats";
import { Col } from "reactstrap";
import { MdMoreVert } from "react-icons/md";
import SendMessage from "./SendMessage";
import { activeChat } from "../../../redux/chatController/activeChatActions";
import styles from "../Home.module.css";
import { useEffect } from "react";

const DisplayChatScreen = () => {
  const selector = useSelector((state) => state.activeChat);
  const dispatch = useDispatch(activeChat(selector));
  let firstName = localStorage.getItem("firstName");
  let lastName = localStorage.getItem("lastName");
  return (
    <Col sm="12" xl="9">
      <div
        className={`${styles.chat_bar_section} d-flex justify-content-between px-4`}
      >
        <div className={`${styles.chat_bar_info_container} d-flex`}>
          {" "}
          <img
            src="/user.png"
            alt="userImage"
            width={31}
            height={30}
            className="mx-2"
          />
          <div className="mx-1">
            <div
              className={`${styles.chat_account_name}`}
            >{`${firstName} ${lastName}`}</div>
            <div className={`${styles.account_last_seen}`}>
              last seen at 15:52 AM
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <MdMoreVert color="white" size={25} />
        </div>
      </div>
      <Chats />
      <SendMessage />
    </Col>
    
  );
};
export default DisplayChatScreen;
