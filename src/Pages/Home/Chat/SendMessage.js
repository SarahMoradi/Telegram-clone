import { Button, Input } from 'reactstrap';

import mainSocket from '../../../Services/io-config';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SendMessage = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const messageInputChangeHandler = (e) => {
    setCurrentMessage(e.target.value);
  };
  const activeContact = useSelector((state) => state.activeChat);

  const sendMessageClickHandler = () => {
    mainSocket.emit('message', {
      message: currentMessage,
      receiverId: activeContact.id.user._id,
    });
    setCurrentMessage('');
  };
  return (
    <div className='d-flex'>
      <Input
        value={currentMessage}
        onChange={messageInputChangeHandler}
        placeholder='Write Message'
      />
      <Button
        disabled={!currentMessage}
        onClick={sendMessageClickHandler}
        style={{ width: '300px' }}
      >
        Send Message
      </Button>
    </div>
  );
};

export default SendMessage;

// okie?
