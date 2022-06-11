import './Chat.css';

import { useSelector } from 'react-redux';

const ChatList = () => {
  const activeChat = useSelector((state) => state.activeChat);
  return (
    <div className='px-4 pt-3 display-chat-lists'>
     
        {activeChat.id && <div className='chat-list-contaier '>Hello</div>}
    
      
    </div>
  );
};
export default ChatList;
