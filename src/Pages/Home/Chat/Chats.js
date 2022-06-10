import './Chat.css';

import { useEffect, useState } from 'react';

import mainApi from '../../../Services/axios-config';
import mainSocket from '../../../Services/io-config';
import { useSelector } from 'react-redux';

const receiveMessage = (cb, messages) => {
  mainSocket.on('message', (newMessage) => {
    return cb([...messages, newMessage]);
  });
};
const Chats = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const activeChatId = useSelector((state) => state.activeChat);

  receiveMessage(setMessages, messages);

  useEffect(() => {
    // console.log(activeChatId.id?.user?._id, 'chats');
    setLoading(true);
    setError(false);
    mainApi
      .get(`/chat/${activeChatId.id.user._id}`)
      .then((res) => {
        setMessages(res.data.data.chats);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activeChatId]);
  return (
    <div className='chat-container'>
      {loading ? (
        <>Loading</>
      ) : error ? (
        <>Error</>
      ) : (
        <div>
          {messages.map((message) => (
            <div
              className={
                message.sender === activeChatId.id.user._id
                  ? 'sender-message-styles'
                  : 'receiver-message-styles'
              }
              key={message._id}
            >
              <p>{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chats;
