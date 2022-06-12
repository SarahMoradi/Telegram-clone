import './Chat.css';

import { Input, InputGroup, InputGroupText } from 'reactstrap';

import { IoSendSharp } from 'react-icons/io5';
import mainSocket from '../../Services/io-config';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SendMessage = () => {
  const activeContact = useSelector((state) => state.activeChat);
  const [currentMessage, setCurrentMessage] = useState('');
  const messageInputChangeHandler = (e) => {
    setCurrentMessage(e.target.value);
  };
  const sendMessageClickHandler = () => {
    mainSocket.emit('message', {
      message: currentMessage,
      receiverId: activeContact.id.user._id,
    });
    setCurrentMessage('');
  };
  return (
    <>
      {activeContact.id && (
        <div className='type-input'>
          <InputGroup>
            <Input
              placeholder='Write message ...'
              value={currentMessage}
              onChange={messageInputChangeHandler}
            />
            <InputGroupText
              disabled={!currentMessage}
              onClick={sendMessageClickHandler}
            >
              <IoSendSharp size={25} className='cursor-pointer' />
            </InputGroupText>
          </InputGroup>
        </div>
      )}
    </>
  );
};
export default SendMessage;
