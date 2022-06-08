import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Sign-up/Signup";
import Home from "./Pages/Home/Home";
import Test from "./Test";

const routes = [
  { path: "/chat", element: <Home /> },
  { path: "/new", element: <Test /> },
  /////add splash screen in authentication
  { path: "/authentication", element: <></> },
  { path: "/authentication/sign-up", element: <Signup /> },
  { path: "/authentication/login", element: <Login /> },
  { path: "/contact", element: <></> },
  { path: "*", element: <></> },
];
export default routes;
