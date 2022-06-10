import { OffCanvas, OffCanvasBody, OffCanvasMenu } from "react-offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Col } from "reactstrap";
import Contact from "./Contact";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormSearch } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { fetchUsers } from "../../redux/user/UserAction";
import styles from "./Home.module.css";

const ContactChatList = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { users, error, loading } = userData;
  const userId = localStorage.getItem("userId");
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Col sm="12" xl="3" className="d-flex flex-column">
      <div className={`${styles.nav_bar_section}`}>
        {" "}
        <div
          className={`${styles.header_nav_bar} d-flex align-items-center justify-content-between px-2`}
        >
          <div className="d-flex align-items-center">
            {!state ? (
              <GiHamburgerMenu
                color="white"
                className="mx-2 my-3 cursor-pointer"
                size={20}
                onClick={handleClick}
              />
            ) : (
              <MdOutlineClose
                color="white"
                className="mx-2 my-3 cursor-pointer"
                size={20}
                onClick={handleClick}
              />
            )}
            <p className={`${styles.contact_name_logo} my-2`}>
              {!state ? "Telegram" : "Menu"}
            </p>
          </div>
          <OffCanvas
            width={300}
            transitionDuration={300}
            isMenuOpened={state}
            position={"left"}
            effect={"overlay"}
          >
            <OffCanvasMenu className={`${styles.off_canvas_menu}`}>
              <img src="/background.jpg" alt="default" />
              <div className={`d-flex ${styles.off_canvas_header}`}>
                <img src="/user.png" alt="defaultUser" />

                {users
                  .filter((user) => user._id === userId)
                  .map((user) => {
                    return (
                      <>
                        <p>
                          {user.firstName} {user.lastName}
                        </p>
                        <p>+98 {user.phoneNumber}</p>
                      </>
                    );
                  })}
              </div>
            </OffCanvasMenu>
          </OffCanvas>
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
                  <Contact key={user._id} user={user}  />
                ))}
            </div>
          )
        )}
      </div>
    </Col>
  );
};
export default ContactChatList;
