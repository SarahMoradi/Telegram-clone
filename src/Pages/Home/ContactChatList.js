import { Col } from "reactstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormSearch } from "react-icons/gr";
import styles from "./Home.module.css";
const ContactChatList = () => {
  return (
    <Col sm="12" xl="3" className="d-flex flex-column">
      <div className={`${styles.nav_bar_section}`}>
        <div
          className={`${styles.header_nav_bar} d-flex align-items-center justify-content-between px-2`}
        >
          <div className="d-flex align-items-center">
            <GiHamburgerMenu
              color="white"
              className="mx-2 my-3 cursor-pointer"
              size={20}
            />
            <p className={`${styles.contact_name_logo} my-2`}>Telegram</p>
          </div>
          <div>
            <GrFormSearch size={32} className={`${styles.search_icon}`} />
          </div>
        </div>
        <div className={`${styles.contact_chats_holder} mx-1 d-flex justify-content-between`}>
          <div className="d-flex align-items-center">
            <img
              src="/user.png"
              alt="userImage"
              width={31}
              height={30}
              className="mx-2"
            />
            <div className="mx-1">
            <div className={`${styles.contact_name}`}>John Doa</div>
            <div className={`${styles.last_message}`}>where are you right now?</div>
            </div>
          </div>
          <div className={`${styles.user_last_time_message}`}>
            <span>12:34 AM</span>
            <div className={`${styles.chat_notication_shade} d-flex justify-content-center align-items-center`}><span>1</span></div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default ContactChatList;
