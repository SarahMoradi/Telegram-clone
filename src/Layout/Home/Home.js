// import ContactChatList from "./ContactChatList";
// import DisplayChatScreen from "./Chat/DisplayChatScreen";
import { Row, Col } from "reactstrap";
import ContactChatList from "../../Pages/Home/ContactChatList";
import mainSocket from "../../Services/io-config";
import ContactList from "../Contact/ContactList";
import "./Home.css";

import "./Home.css";
const HomePage = () => {
  return (
    <>
      <Row className="home-page-container g-0">
        <Col md="4" lg="3">
          <ContactList />
        </Col>
        <Col md="8" lg="9">
          .
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
