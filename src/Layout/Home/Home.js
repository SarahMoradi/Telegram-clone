import './Home.css';

import { Col, Row } from 'reactstrap';

import ChatContainer from '../Chat/ChatContainer';
import ContactList from '../Contact/ContactList';

const HomePage = () => {
  return (
    <>
      <Row className='home-page-container g-0'>
        <Col md='4' lg='3'>
          <ContactList />
        </Col>
        <Col md='8' lg='9'>
          <ChatContainer />
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
