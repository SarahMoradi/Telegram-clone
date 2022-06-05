import ContactChatList from "./ContactChatList";
import DisplayChatScreen from "./Chat/DisplayChatScreen";
import { Row } from "reactstrap";
import mainSocket from "../../Services/io-config";
import styles from "./Home.module.css";

const Home = () => {
  console.log(mainSocket);
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
