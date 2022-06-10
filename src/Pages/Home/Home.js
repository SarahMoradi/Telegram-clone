import ContactChatList from "./ContactChatList";
import DisplayChatScreen from "./Chat/DisplayChatScreen";
import { Row } from "reactstrap";
import mainSocket from "../../Services/io-config";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.home_page_container}`}>
      {/* height: 100vh && max-height: 100vh && scroll :hidden */}
      <Row sm="12" className="g-0"> 
        <ContactChatList />
        <DisplayChatScreen />
      </Row>
    </div>
  );
};
export default Home;
