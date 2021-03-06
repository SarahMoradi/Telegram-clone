import './Contact.css';

import { OffCanvas, OffCanvasMenu } from 'react-offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Contact from './Contact';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import OptionList from '../OffCanvas/ListOptions';
import { fetchUsers } from '../../redux/user/UserAction';
import mainSocket from '../../Services/io-config';

const userId = localStorage.getItem('userId');

const receiveMessage = (cb, messages) => {
  mainSocket.on('message', (newMessage) => {
    const id =
      newMessage.sender === userId ? newMessage.receiver : newMessage.sender;
    return cb({ ...messages, ...{ [id]: newMessage } });
  });
};
const ContactList = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { users, error, loading } = userData;
  const [state, setState] = useState(false);
  const [usersLastMessage, setUsersLastMessage] = useState({});
  receiveMessage(setUsersLastMessage, usersLastMessage);

  const handleClick = () => {
    setState(!state);
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <div className='contact-list-header d-flex'>
        <div className='d-flex align-items-center'>
          {!state ? (
            <GiHamburgerMenu
              color='white'
              className='mx-3 cursor-pointer'
              size={20}
              onClick={handleClick}
            />
          ) : (
            <MdOutlineClose
              color='white'
              className='mx-3 cursor-pointer'
              size={20}
              onClick={handleClick}
            />
          )}
        </div>
        <p className='contact-logo-name pt-2 mt-1 mx-1'>
          {!state ? 'Telegram' : 'Menu'}
        </p>
        <OffCanvas
          width={300}
          transitionDuration={300}
          isMenuOpened={state}
          position={'left'}
          effect={'overlay'}
        >
          <OffCanvasMenu className='off-canvas-menu'>
            <img src='/background.jpg' alt='default' />
            <div className='off-canvas-header'>
              <img src='/user.png' alt='defaultUser' />

              {users
                .filter((user) => user._id === userId)
                .map((user) => {
                  return (
                    <div key={user._id}>
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                      <p>+98 {user.phoneNumber}</p>
                      <OptionList />
                      <div className='offcanvas-info-details'>
                        <div>Telegram Web</div>
                        <div>Version 1.3.0</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </OffCanvasMenu>
        </OffCanvas>
      </div>
      <div className='contact-chat-container'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          userData &&
          users &&
          users.length && (
            <div>
              {users
                .filter((user) => user._id !== userId)
                .map((user) => {
                  return (
                    <Contact
                      key={user._id}
                      user={user}
                      lastMessage={usersLastMessage[user._id]}
                    />
                  );
                })}
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default ContactList;
