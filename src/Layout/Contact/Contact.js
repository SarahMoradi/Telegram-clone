import { useDispatch, useSelector } from "react-redux";
import { activeChat } from "../../redux/chatController/activeChatActions";
import "./Contact.css";
import mainSocket from "../../Services/io-config";
import mainApi from "../../Services/axios-config";
import { useState, useEffect } from "react";

const Contact = ({ user, lastUserMessage }) => {
  console.log(lastUserMessage)
  const [userActive, setUserActive] = useState({ user });
  // const activeChatId = useSelector((state) => state.activeChat);
  const dispatch = useDispatch();

  return (
    <div
      className="contact-list d-flex justify-content-between "
      onClick={() => {
        dispatch(activeChat(userActive));
      }}
    >
      <div className="d-flex align-items-center ">
        <img
          src="/user.png"
          alt="userImage"
          width={31}
          height={30}
          className="mx-2"
        />
        <div className="mx-1">
          <div className="contact-name">{`${user.firstName} ${user.lastName}`}</div>
          <div className="contact-last-message"></div>
        </div>
      </div>
      <div className="contact-last-seen pt-2">
        <span style={{ fontSize: "11px" }}>12:53 AM</span>
      </div>
    </div>
  );
};
export default Contact;
