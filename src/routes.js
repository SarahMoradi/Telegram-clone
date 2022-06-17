import HomePage from './Layout/Home/Home';
import Login from './Authentication/Login/Login';
import NotFound from './Layout/NotFound/NotFound';
import Signup from './Authentication/Sign-up/Signup';
import WelcomePage from './Layout/WelcomPage/WelcomePage';

const routes = [
  { path: '/', element: <WelcomePage /> },
  { path: '/home-page', element: <HomePage /> },
  { path: '/authentication/sign-up', element: <Signup /> },
  { path: '/authentication/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
];
export default routes;
