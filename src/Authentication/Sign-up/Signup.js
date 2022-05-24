import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { Col, Row } from "reactstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
const Signup = () => {
  return (
    <div className={`${styles.signup_container}`}>
      <div
        className={`${styles.sign_up_header} d-flex justify-content-between pt-4 px-3 px-md-5`}
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
            to="/authentication/login"
            className={`${styles.header_login_link}`}
          >
            Login
          </Link>
        </div>
      </div>
      <Row className="d-flex justify-content-center align-item-center">
        <Col
          sm="12"
          md="6"
          xl="3"
          className={`${styles.signup_card_container}`}
        >
          <div className="mt-4 mx-2">
            <div>
              <p className={`${styles.signup_text}`}>Sign up</p>
            </div>
            <div>
              <p className={`${styles.description_text}`}>
                Please enter your phone number and enter your full information.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <FormControl variant="outlined" style={{ width: "270px" }}>
              <InputLabel
                style={{ width: "270px", marginLeft: "-12px" }}
                htmlFor="standard-adornment-amount"
                variant="outlined"
              >
                Phone Number
              </InputLabel>
              <Input
                variant="outlined"
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start" variant="outlined">
                    +98{" "}
                  </InputAdornment>
                }
              />
            </FormControl>
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
              Sign up
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Signup;
