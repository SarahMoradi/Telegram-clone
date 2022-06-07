import { MdMoreVert } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "reactstrap";
import styles from "../Home.module.css";
const DisplayChatScreen = () => {
  const selector = useSelector((state) => state.activeChat);
  const dispatch = useDispatch();
  console.log(selector);
  return (
    <Col sm="12" xl="9">
      <div
        className={`${styles.chat_bar_section} d-flex justify-content-between px-4`}
      >
        <div className={`${styles.chat_bar_info_container} d-flex`}>
          {" "}
          <img
            src="/user.png"
            alt="userImage"
            width={31}
            height={30}
            className="mx-2"
          />
          <div className="mx-1">
            <div
              className={`${styles.chat_account_name}`}
            >{`${selector.id.user.firstName} ${selector.id.user.lastName}`}</div>
            <div className={`${styles.account_last_seen}`}>
              last seen at 15:52 AM
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <MdMoreVert color="white" size={25} />
        </div>
      </div>
    </Col>
  );
};
export default DisplayChatScreen;
