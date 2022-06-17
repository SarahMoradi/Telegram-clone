import './Contact.css';

import { OffCanvas, OffCanvasMenu } from 'react-offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { BiLogOutCircle } from 'react-icons/bi';
import Contact from './Contact';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdAssignmentInd } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';
import { fetchUsers } from '../../redux/user/UserAction';
import mainSocket from '../../Services/io-config';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  receiveMessage(setUsersLastMessage, usersLastMessage);
  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/authentication/login');
  };
  const signUpHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/authentication/sign-up');
  };
  const handleClick = () => {
    setState(!state);
  };
  // receiveMessage(setMessages, messages)
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
                      <div className='d-flex align-items-center option-list-in-offcanvas mt-3 mx-2'>
                        <span onClick={signUpHandler}>
                          <MdAssignmentInd
                            size={23}
                            className='icons-in-options-list'
                          />
                          Sign up
                        </span>
                      </div>
                      <div className='d-flex align-items-center option-list-in-offcanvas mt-1 mx-2'>
                        <span onClick={logoutHandler}>
                          <BiLogOutCircle
                            size={23}
                            className='icons-in-options-list'
                          />
                          Log out
                        </span>
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
