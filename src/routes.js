import AuthSwitcher from "./Authentication";
import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Sign-up/Signup";
import Chat from "./Pages/Chat/Chat";
import Home from "./Pages/Home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/authentication", element: <></> },
  { path: "/authentication/sign-up", element: <Signup /> },
  { path: "/authentication/login", element: <Login /> },
  { path: "/contact", element: <></> },
  { path: "/chat", element: <Chat /> },
];
export default routes;
