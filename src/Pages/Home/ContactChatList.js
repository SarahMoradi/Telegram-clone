import { Col } from 'reactstrap';
import Contact from './Contact';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormSearch } from 'react-icons/gr';
import mainApi from '../../Services/axios-config';
import styles from './Home.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ContactChatList = () => {
  const state = useSelector((state) => {
    console.log('state', state.data);
    return state;
  });
  return (
    <Col sm='12' xl='3' className='d-flex flex-column'>
      <div className={`${styles.nav_bar_section}`}>
        <div
          className={`${styles.header_nav_bar} d-flex align-items-center justify-content-between px-2`}
        >
          <div className='d-flex align-items-center'>
            <GiHamburgerMenu
              color='white'
              className='mx-2 my-3 cursor-pointer'
              size={20}
            />
            <p className={`${styles.contact_name_logo} my-2`}>Telegram</p>
          </div>
          <div>
            <GrFormSearch size={32} className={`${styles.search_icon}`} />
          </div>
        </div>
        {!state.loading
          ? 'wait'
          : state.data.map((user) => <Contact user={user} />)}
      </div>
    </Col>
  );
};
export default ContactChatList;
