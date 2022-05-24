import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { Col, Row } from "reactstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Login = () => {
  return (
    <div className={`${styles.login_container}`}>
      <div
        className={`${styles.login_header} d-flex justify-content-between pt-4 px-3 px-md-5`}
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
      <Row className="d-flex justify-content-center align-item-center">
        <Col
          sm="12"
          md="6"
          xl="3"
          className={`${styles.login_card_container}`}
        >
          <div className="mt-4 mx-2">
            <div>
              <p className={`${styles.login_text}`}>Login</p>
            </div>
            <div>
              <p className={`${styles.description_text}`}>
                Please enter your username and password to login in.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              className="mt-4"
              style={{ width: "270px" }}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              className="mt-4"
              style={{ width: "270px" }}
            />
            <Button
              variant="contained"
              size="large"
              className="mt-5"
              style={{ width: "270px" }}
            >
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
