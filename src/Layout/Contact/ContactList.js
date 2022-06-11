import "./Contact.css";
import { OffCanvas, OffCanvasBody, OffCanvasMenu } from "react-offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Col } from "reactstrap";
import Contact from "./Contact";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormSearch } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { fetchUsers } from "../../redux/user/UserAction";

const ContactList = () => {
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
    <div>
      <div className="contact-list-header d-flex">
        <div className="d-flex align-items-center">
          {!state ? (
            <GiHamburgerMenu
              color="white"
              className="mx-3 cursor-pointer"
              size={20}
              onClick={handleClick}
            />
          ) : (
            <MdOutlineClose
              color="white"
              className="mx-3 cursor-pointer"
              size={20}
              onClick={handleClick}
            />
          )}
        </div>
        <p className="contact-logo-name pt-2 mt-1 mx-1">
          {!state ? "Telegram" : "Menu"}
        </p>
        <OffCanvas
          width={300}
          transitionDuration={300}
          isMenuOpened={state}
          position={"left"}
          effect={"overlay"}
        >
          <OffCanvasMenu className="off-canvas-menu">
            <img src="/background.jpg" alt="default" />
            <div className="off-canvas-header">
              <img src="/user.png" alt="defaultUser" />

              {users
                .filter((user) => user._id === userId)
                .map((user) => {
                  return (
                    <div key={user._id}>
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                      <p>+98 {user.phoneNumber}</p>
                    </div>
                  );
                })}
            </div>
          </OffCanvasMenu>
        </OffCanvas>
      </div>
      <div className="contact-chat-container">
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
    </div>
  );
};
export default ContactList;
