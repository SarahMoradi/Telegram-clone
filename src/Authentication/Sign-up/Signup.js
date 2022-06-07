import { Col, Row } from "reactstrap";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import mainApi from "../../Services/axios-config";
import styles from "./Signup.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState({
    phoneNumber: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const userdataChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    mainApi
      .post("/user/register", userData)
      .then((res) => {
        toast.success("کاربر با موفقیت ثبت نام شد");
        history("/authentication/login");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message);
      });
  };
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
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={userdataChangeHandler}
                startAdornment={
                  <InputAdornment position="start">+98 </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              id="standard-basic"
              label="firstName"
              name="firstName"
              variant="standard"
              className="mt-4"
              style={{ width: "270px" }}
              value={userData.firstName}
              onChange={userdataChangeHandler}
            />
            <TextField
              id="standard-basic"
              label="lastName"
              name="lastName"
              variant="standard"
              className="mt-4"
              style={{ width: "270px" }}
              value={userData.lastName}
              onChange={userdataChangeHandler}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              variant="standard"
              className="mt-4"
              style={{ width: "270px" }}
              value={userData.password}
              onChange={userdataChangeHandler}
            />
            <Button
              variant="contained"
              size="large"
              className="mt-5"
              style={{ width: "270px" }}
              onClick={submitHandler}
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
