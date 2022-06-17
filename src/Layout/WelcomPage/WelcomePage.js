import './WelcomePage.css';

import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

const WelcomePage = () => {
  const navigate = useNavigate();
  const continueAppHandler = () => {
    navigate('/authentication/sign-up');
  };
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center centered-app-details'>
        <div className='d-flex welcome-image-holder'>
          <img src='/telegram.png' width={300} alt='logo' className='mx-md-5' />
        </div>
        <div className='mx-5'>
          <p className='about-us-description'>ABOUT US</p>
          <h2 className='welcome-page-title'>Welcome to</h2>
          <h2 className='welcome-page-title'>Telegram Web App</h2>
          <p className='description-text'>
            This web application was developed by sarah moradi due to university
            project. In fact this version had been included the minimal features
            to compare with current app. The vital configuration based on socket
            and redux global state managment to feel more comfortable to work
            with.
          </p>
          <p className='description-text'>
            For more details and up-to-date version in the early future look for
            updates code in github platform by the link is put in below.
          </p>
          <p className='description-text'>
            See more:{' '}
            <a href='https://github.com/SarahMoradi/Telegram-clone'>
              https://github.com/SarahMoradi/Telegram-clone
            </a>
          </p>
        </div>
      </div>
      <div className='welcome-page-footer-section'>
        <div className='d-flex justify-content-end mx-5'>
          <Button
            variant='contained'
            size='large'
            className='mt-5'
            onClick={continueAppHandler}
          >
            Tap To Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
