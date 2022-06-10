import { useDispatch, useSelector } from 'react-redux';

import { activeChat } from '../../redux/chatController/activeChatActions';
import styles from './Home.module.css';
import { useState } from 'react';

const Contact = ({ user }) => {
  const [userActive, setUserActive] = useState({ user });
  const firstName = userActive.user.firstName;
  const lastName = userActive.user.lastName;
  const selector = useSelector((state) => state.activeChat);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`${styles.contact_chats_holder} mx-1 d-flex justify-content-between`}
        onClick={() => {
          dispatch(activeChat(userActive));
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
        }}
      >
        <div className='d-flex align-items-center'>
          <img
            src='/user.png'
            alt='userImage'
            width={31}
            height={30}
            className='mx-2'
          />
          <div className='mx-1'>
            <div
              className={`${styles.contact_name}`}
            >{`${user.firstName} ${user.lastName}`}</div>
            <div className={`${styles.last_message}`}>
              where are you right now?
            </div>
          </div>
        </div>
        <div className={`${styles.user_last_time_message}`}>
          <span>12:53 AM</span>
          <div
            className={`${styles.chat_notication_shade} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
