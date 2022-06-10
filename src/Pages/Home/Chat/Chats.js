import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Chats = () => {
  const activeChatId = useSelector((state) => state.activeChat);

  useEffect(() => {
    // console.log(activeChatId.id?.user?._id, 'chats');
  }, [activeChatId]);
  return <div>Chat {activeChatId.id?.user?._id} </div>;
};

export default Chats;
