import { useDispatch, useSelector } from "react-redux";

import { Col } from "reactstrap";
import Contact from "./Contact";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormSearch } from "react-icons/gr";
import { fetchUsers } from "../../redux/user/UserAction";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const ContactChatList = () => {
  const [openHumbergerMenu, setOpenHumbergerMenu] = useState(false);
  console.log(openHumbergerMenu);
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { users, error, loading } = userData;
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Col sm="12" xl="3" className="d-flex flex-column">
      <div className={`${styles.nav_bar_section}`}>
        {" "}
        {openHumbergerMenu && (
          <div className={`${styles.humberger_menu_display}`}>
            dsfsdfsdfsdfsdf
          </div>
        )}
        <div
          className={`${styles.header_nav_bar} d-flex align-items-center justify-content-between px-2`}
        >
          <div
            className="d-flex align-items-center"
            onClick={() => setOpenHumbergerMenu(!openHumbergerMenu)}
          >
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
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          userData &&
          users &&
          users.length && (
            <div>
              {users
                .filter((user) => user._id !== userId)
                .map((user) => (
                  <Contact key={user._id} user={user} />
                ))}
            </div>
          )
        )}
      </div>
    </Col>
  );
};
export default ContactChatList;
