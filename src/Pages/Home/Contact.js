import styles from './Home.module.css';

const Contact = ({ user }) => {
  return (
    <>
      <div
        className={`${styles.contact_chats_holder} mx-1 d-flex justify-content-between`}
      >
        <div className='d-flex align-items-center'>
          <img
            src='/user.png'
            alt='userImage'
            width={31}
            height={30}
            className='mx-2'
          />
          <div className='mx-1'>
            <div className={`${styles.contact_name}`}>{`${user.firstName} ${user.lastName}`}</div>
            <div className={`${styles.last_message}`}>
              where are you right now?
            </div>
          </div>
        </div>
        <div className={`${styles.user_last_time_message}`}>
          <span>12:34 AM</span>
          <div
            className={`${styles.chat_notication_shade} d-flex justify-content-center align-items-center`}
          >
            <span>1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
