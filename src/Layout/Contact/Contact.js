import './Contact.css';

import { activeChat } from '../../redux/chatController/activeChatActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function getFullTimeLastSeen(time) {
  let hour = time.getHours();
  const minute = time.getMinutes();
  const fullTimeLastSeen = `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;

  return fullTimeLastSeen;
}

const Contact = ({ user }) => {
  console.log(user.lastMessage);
  const [userActive, setUserActive] = useState({ user });
  const dispatch = useDispatch();
  const hasLastMessage = !!user.lastMessage;

  return (
    <div
      className='contact-list d-flex justify-content-between '
      onClick={() => {
        dispatch(activeChat(userActive));
      }}
    >
      <div className='d-flex align-items-center '>
        <img
          src='/user.png'
          alt='userImage'
          width={31}
          height={30}
          className='mx-2'
        />
        <div className='mx-1'>
          <div className='contact-name'>{`${user.firstName} ${user.lastName}`}</div>
          <div className='contact-last-message'>
            {hasLastMessage
              ? user.lastMessage.message
              : 'start conversation ...'}
          </div>
        </div>
      </div>
      <div className='contact-last-seen pt-2'>
        {hasLastMessage && (
          <span style={{ fontSize: '11px' }}>
            {getFullTimeLastSeen(new Date(user.lastMessage.createdAt))}
          </span>
        )}
      </div>
    </div>
  );
};
export default Contact;
