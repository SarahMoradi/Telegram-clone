import './Chat.css';

import { BsArrowLeftShort } from 'react-icons/bs';
import ChatList from './ChatList';
import { Col } from 'reactstrap';
import { MdMoreVert } from 'react-icons/md';
import SendMessage from './ChatList';
import { useSelector } from 'react-redux';
import mainSocket from "../../Services/io-config";
import {useEffect, useState} from "@types/react";
import mainApi from "../../Services/axios-config";

const receiveMessage = (cb, messages) => {
  mainSocket.on('message', (newMessage) => {
    return cb([...messages, newMessage]);
  });
};

const ChatSection = () => {
  const activeChat = useSelector((state) => state.activeChat);
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
  console.log(messages)

  return (
    <Col sm='12' xl='9' className='chat-bar-container w-100'>
      {!activeChat.id ? (
        <div className='header-chat-bar d-flex justify-content-between px-4'></div>
      ) : (
        <>
          <div className='chat-bar-details-contanier d-flex justify-content-between px-2'>
            <div className='chat_bar_user-info_container d-flex'>
              <BsArrowLeftShort
                color='white'
                size={29}
                className='back-arrow-function'
              />
              <img
                src='/user.png'
                alt='userImage'
                width={31}
                height={30}
                className='mx-2'
              />
              <div className='mx-1'>
                <div className='user_account_name'>
                  {`${activeChat.id.user.firstName} ${activeChat.id.user.lastName}`}
                </div>
                <div className='account_last_seen'>last seen at 15:52 AM</div>
              </div>
            </div>
            <div className='d-flex align-items-center pb-2'>
              <MdMoreVert color='white' size={25} />
            </div>
          </div>
          <div className='display-chat-lists'>
            <ChatList />
          </div>
        </>
      )}
    </Col>
  );
};
export default ChatSection;
