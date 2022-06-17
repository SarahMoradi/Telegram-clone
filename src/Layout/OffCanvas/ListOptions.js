import { MdAssignmentInd, MdSaveAlt } from 'react-icons/md';

import { BiLogOutCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const OptionList = () => {
    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/authentication/login');
      };
      const signUpHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/authentication/sign-up');
      };
      const savedMessageHandler = () => {
        
      }
    return ( <><div
        onClick={signUpHandler}
        className='d-flex align-items-center option-list-in-offcanvas mt-3 mx-2'
      >
        <span>
          <MdSaveAlt
            size={23}
            className='icons-in-options-list'
          />
          Saved Message
        </span>
      </div>
      <div
        onClick={savedMessageHandler}
        className='d-flex align-items-center option-list-in-offcanvas mt-2 mx-2'
      >
        <span>
          <MdAssignmentInd
            size={23}
            className='icons-in-options-list'
          />
          Sign up
        </span>
      </div>
      <div
        onClick={logoutHandler}
        className='d-flex align-items-center option-list-in-offcanvas mt-2 mx-2'
      >
        <span>
          <BiLogOutCircle
            size={23}
            className='icons-in-options-list'
          />
          Log out
        </span>
      </div></> );
}
 
export default OptionList;