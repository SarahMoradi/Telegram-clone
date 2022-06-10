import Chats from './Chats';
import { Col } from 'reactstrap';
import { MdMoreVert } from 'react-icons/md';
import SendMessage from './SendMessage';
import styles from '../Home.module.css';
import { useSelector } from 'react-redux';

const DisplayChatScreen = () => {
  const activeChat = useSelector((state) => state.activeChat);
  return (
    <Col sm='12' xl='9' className={`${styles.chat_bar}`}>
      {!activeChat.id ? (
        <div
          className={`${styles.chat_bar_section} d-flex justify-content-between px-4`}
        ></div>
      ) : (
        <>
          <div
            className={`${styles.chat_bar_section} d-flex justify-content-between px-4`}
          >
            <div className={`${styles.chat_bar_info_container} d-flex`}>
              {' '}
              <img
                src='/user.png'
                alt='userImage'
                width={31}
                height={30}
                className='mx-2'
              />
              <div className='mx-1'>
                <div
                  className={`${styles.chat_account_name}`}
                >{`${activeChat.id.user.firstName} ${activeChat.id.user.lastName}`}</div>
                <div className={`${styles.account_last_seen}`}>
                  last seen at 15:52 AM
                </div>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <MdMoreVert color='white' size={25} />
            </div>
          </div>
          <div className='px-4 pt-3 display-chat-container'>
            <Chats />
          </div>
          <SendMessage />
        </>
      )}
    </Col>
  );
};
export default DisplayChatScreen;
