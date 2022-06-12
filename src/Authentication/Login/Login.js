import { Col, Row } from 'reactstrap';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import mainApi from '../../Services/axios-config';
import styles from './Login.module.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const history = useNavigate();
  const [login, setLogin] = useState({ id: '', phoneNumber: '', password: '' });
  const userdataChangeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginHandler = () => {
    mainApi
      .post('/user/login', login)
      .then((res) => {
        localStorage.setItem('userId', res.data.data.user);
        localStorage.setItem('token', res.data.data.token);
        toast.success('کاربر با موفقیت وارد شد');
        history('/home-page');
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message);
      });
  };
  return (
    <div className={`${styles.login_container}`}>
      <div
        className={`${styles.login_header} d-flex justify-content-between pt-4 px-3 px-md-5`}
      >
        <div>
          <img
            src='/icon.png'
            alt='telegram-icon'
            width={28}
            className='mx-2'
          />
          Telegram Web
        </div>
        <div>
          <Link
            to='/authentication/sign-up'
            className={`${styles.header_signup_link}`}
          >
            Sign up
          </Link>
        </div>
      </div>
      <Row className='d-flex justify-content-center align-item-center'>
        <Col sm='12' md='6' xl='3' className={`${styles.login_card_container}`}>
          <div className='mt-4 mx-2'>
            <div>
              <p className={`${styles.login_text}`}>Login</p>
            </div>
            <div>
              <p className={`${styles.description_text}`}>
                Please enter your username and password to login in.
              </p>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <FormControl variant='outlined' style={{ width: '270px' }} className='mt-5'>
              <InputLabel
                style={{ width: '270px', marginLeft: '-12px' }}
                htmlFor='standard-adornment-amount'
                variant='outlined'
              >
                Phone Number
              </InputLabel>
              <Input
                variant='outlined'
                id='standard-adornment-amount'
                name='phoneNumber'
                value={login.phoneNumber}
                onChange={userdataChangeHandler}
                startAdornment={
                  <InputAdornment position='start'>+98 </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              id='standard-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              variant='standard'
              className='mt-4 mb-3'
              name='password'
              value={login.password}
              onChange={userdataChangeHandler}
              style={{ width: '270px' }}
            />
            <Button
              variant='contained'
              size='large'
              className='mt-5'
              style={{ width: '270px' }}
              onClick={loginHandler}
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
