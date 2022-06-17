import Home from './Pages/Home/Home';
import HomePage from './Layout/Home/Home';
import Login from './Authentication/Login/Login';
import Signup from './Authentication/Sign-up/Signup';

const routes = [
  { path: '/', element: <></> },
  { path: '/chat', element: <Home /> },
  { path: '/home-page', element: <HomePage /> },
  { path: '/authentication/sign-up', element: <Signup /> },
  { path: '/authentication/login', element: <Login /> },
  { path: '*', element: <>404</> },
];
export default routes;
