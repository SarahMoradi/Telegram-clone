import './Contact.css';

import { activeChat } from '../../redux/chatController/activeChatActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// import mainApi from '../../Services/axios-config';
// import mainSocket from '../../Services/io-config';

const Contact = ({ user }) => {
  console.log(user.lastMessage);
  const [userActive, setUserActive] = useState({ user });
  // const activeChatId = useSelector((state) => state.activeChat);
  const dispatch = useDispatch();
  const lastSeen = new Date(user.lastMessage.createdAt);

  function getFullTimeLastSeen() {
    let hour = lastSeen.getHours();
    const minute = lastSeen.getMinutes();
    const fullTimeLastSeen = `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;

    return fullTimeLastSeen;
  }

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
          <div className='contact-last-message'>{user.lastMessage.message}</div>
        </div>
      </div>
      <div className='contact-last-seen pt-2'>
        <span style={{ fontSize: '11px' }}>{getFullTimeLastSeen()}</span>
      </div>
    </div>
  );
};
export default Contact;
