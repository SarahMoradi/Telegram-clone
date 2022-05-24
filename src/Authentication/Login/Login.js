import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div
        className={`${styles.login_header} d-flex justify-content-between align-items-center px-3`}
      >
        <div>
          <img
            src="/icon.png"
            alt="telegram-icon"
            width={28}
            className="mx-2"
          />
          Telegram Web
        </div>
        <div>
          <Link
            to="/authentication/sign-up"
            className={`${styles.header_signup_link}`}
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
