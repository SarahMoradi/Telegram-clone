import { Row } from "reactstrap";
import styles from "./Home.module.css";
import ContactChatList from "./ContactChatList";
import DisplayChatScreen from "./Chat/DisplayChatScreen";

const Home = () => {
  return (
    <div className={`${styles.home_page_container}`}>
      <div className={`${styles.main_header}`}></div>
      <Row sm="12" className="g-0">
        <ContactChatList />
        <DisplayChatScreen />
      </Row>
    </div>
  );
};
export default Home;
