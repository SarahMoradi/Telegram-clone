import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Sign-up/Signup";
import HomePage from "./Layout/Home/Home";
import Home from "./Pages/Home/Home";

const routes = [
  { path: "/chat", element: <Home /> },
  { path: "/home-page", element: <HomePage /> },
  { path: "/authentication", element: <></> },
  { path: "/authentication/sign-up", element: <Signup /> },
  { path: "/authentication/login", element: <Login /> },
  { path: "/contact", element: <></> },
  { path: "*", element: <></> },
];
export default routes;
