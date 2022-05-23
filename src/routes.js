import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Sign-up/Signup";

const routes = [
  { path: "/", element: <></> },
  { path: "authentication", element: <></> },
  { path: "authentication/sign-up", element: <Signup /> },
  { path: "authentication/login", element: <Login /> },
  { path: "contact", element: <></> },
  { path: "chat", element: <></> },
];
export default routes;
