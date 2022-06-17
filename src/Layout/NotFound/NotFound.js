import './NotFound.css';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const goToHomePageHandler = () => {
    navigate('/authentication/login');
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <div className='not-found-header-text mt-5'>Oops!</div>
      <div className='mt-4'>404 - PAGE NOT FOUND</div>
      <div className='mt-1 mx-2 text-center'>
        The page you are looking for might have been removed had its name change
        or is temporarily unavailable!
      </div>
      <Button
        variant='contained'
        size='large'
        className='mt-5'
        onClick={goToHomePageHandler}
      >
        GO TO HOMEPAGE
      </Button>
    </div>
  );
};

export default NotFound;
