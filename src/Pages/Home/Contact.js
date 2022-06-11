import { useDispatch, useSelector } from "react-redux";
import { activeChat } from "../../redux/chatController/activeChatActions";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";

const Contact = ({ user }) => {
  const [userActive, setUserActive] = useState({ user });
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`${styles.contact_chats_holder} d-flex justify-content-between`}
        onClick={() => {
          dispatch(activeChat(userActive));
        }}
      >
        <div className="d-flex align-items-center">
          <img
            src="/user.png"
            alt="userImage"
            width={31}
            height={30}
            className="mx-2"
          />
          <div className="mx-1">
            <div
              className={`${styles.contact_name}`}
            >{`${user.firstName} ${user.lastName}`}</div>
            <div className={`${styles.last_message}`}>
              <span>Hello</span>
            </div>
          </div>
        </div>
        <div className={`${styles.user_last_time_message} pt-2`}>
          <span style={{ fontSize: "11px" }}>12:53 AM</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
